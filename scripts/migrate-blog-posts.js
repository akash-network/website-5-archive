require('dotenv').config()

const buildClient = require('@datocms/cma-client-node').buildClient;
const isBlock = require('datocms-structured-text-utils').isBlock;
const stext2text = require('datocms-structured-text-to-plain-text').render;
const stext2html = require('datocms-structured-text-to-html-string').render;
const yaml = require('js-yaml');
const util = require('util');
const TurndownService = require('turndown');

const CONTENT_PATH = "content/en/blog";
const endPoint = 'https://graphql.datocms.com/'
const apiToken = process.env.DATO_API_TOKEN

async function run() {
  let count;

  // Fetch the count of all blog posts
  await doFetch('query { _allBlogPostsMeta { count } }')
    .then(response => response.json())
    .then(response => {
      count = parseInt(response.data._allBlogPostsMeta.count);
      console.log("Blog Count", count);
    });

  // Calculate the number of iterations needed to retrieve all the blog posts
  const numIterations = Math.ceil(count / 100);

  // Iterate through all the blog posts
  for (let i = 0; i < numIterations; i += 1) {
    // Fetch a batch of 100 blog posts
    await doFetch(makeQuery(100, i * 100))
      .then(response => response.json())
      .then(response => {
        // Process each blog post
        response.data.allBlogPosts.forEach(record => {
          try {
            // Convert the content to HTML and Markdown
            const htmlContent = stext2html(record.content, renderOptions);
            const markdownContent = html2markdown(htmlContent);

            // Generate the meta information for the blog post
            let meta = renderMeta(record);

            // If the blog post has a cover image, download it and add it to the meta information
            if (record.coverImage != null && record.coverImage.url != "") {
              const coverImageName = record.coverImage.url.split("/").pop();
              downloadImage(record.coverImage.url, coverImageName, CONTENT_PATH + "/" + record.slug);
              meta = meta + `\nimages: ["${coverImageName}"]\n`;
            }

            // Save the meta information and Markdown content to a file
            saveFile(record.slug, meta, markdownContent);
          } catch (error) {
            console.log("ERROR", record.slug);
            console.log(error);
            console.log(htmlContent);
            console.log(util.inspect(record.content, { showHidden: false, depth: null, colors: true }))
          }
        });
      });
  }
}

async function getBlogCount() {
  await doFetch('query { _allBlogPostsMeta { count } }').
    then(res => res.json()).
    then(res => {
      console.log("Count from Getblog", res.data._allBlogPostsMeta.count)
      return parseInt(res.data._allBlogPostsMeta.count)
    });
}


const renderOptions = {
  renderBlock({ record, adapter: { renderNode } }) {
    // TODO: add support for other blocks (e.g. CTA, Video, etc.)
    if (record.image != null && record.image.url != "") {
      // console.log("IMAGE", record.image.url)
      // console.log(util.inspect(record, { showHidden: false, depth: null, colors: true }))
      // TODO: if the image url contains 'www.datocms-assets.com', download the image to 
      // the local filesystem and replace the url with the local path
      // imageName = record.image.url.split("/").pop(); 
      // downloadImage(record.image.url, imageName, slugDirectory(record.slug));

      imageName = record.image.url
      return renderNode('figure', {}, renderNode('img', { src: imageName }));
    }
  },
}


function downloadImage(url, filename, directory) {
  const fs = require('fs');
  const download = require('image-downloader');
  const path = require('path');

  const dir = path.join(process.cwd(), directory);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const options = {
    url: url,
    dest: path.join(dir, filename)
  }
  download.image(options).then(({ filename, image }) => {
      console.log('DOWNLOAD (image):', filename)
    }).catch((err) => console.error(err))
}


function html2markdown(html) {
  return new TurndownService().turndown(html);
}

function slugDirectory(slug) {
  const path = require('path');
  return path.join(process.cwd(), CONTENT_PATH, slug);
}


function saveFile(slug, meta, content) {
  const fs = require('fs');
  const path = require('path');
  const dir = slugDirectory(slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const filename = path.join(dir, 'index.md');
  console.log("W", filename)
  fs.writeFileSync(filename, '---\n' + meta + '---\n' + content);
}

// this method renders metadata to frontmatter
function renderMeta(record) {

  // create a JSON object with the metadata
  let meta = {
    title: record.title,
    date: record.date,
    lastmod: record.updatedAt,
    draft: false,
    weight: 50,
    categories: ["News"],
    tags: [],
    contributors: [],
    pinned: false,
    homepage: false
  };

  // if the blog post has categories, add them to the metadata
  if (record.category != null) {
    meta.categories = [];
    record.category.forEach(category => {
      meta.categories.push(category.title);
    });
  }

  // if blog post has an author, add them to the metadata
  if (record.author != null) {
    meta.contributors = [record.author.name];
  }


  // convert the JSON object to YAML
  return yaml.dump(meta);
}

function doFetch(query) {
  return fetch(
    endPoint,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        query: query
      }),
    }
  ).catch(err => console.error(err));
}

function makeQuery(first, skip) {
  return `query {
    allBlogPosts(first: ${first}, skip: ${skip}) {
      title
      slug
      updatedAt
      date
      category {
        title
        slug
      }
      author {
        name
        id
      }
      imageWhenHeroed {
        url
        title
      }
      content {
        blocks {
          ... on ImageRecord {
            id
            title
            image {
              url
              width
              title
            }
          }
          ... on CtaRecord {
            id
            links {
              href
              label
            }
          }
          ... on VideoRecord {
            id
            title
            video {
              video {
                duration
                framerate
                mp4Url
              }
              url
              size
              title
            }
          }
          ... on VideoExternalEmbedRecord {
            id
            title
            externalVideo {
              width
              url
              title
              thumbnailUrl
              providerUid
              provider
              height
            }
          }
          ... on TableRecord {
            id
            markdownTable
          }
          ... on CalloutRecord {
            id
            content(markdown: true)
          }
          ... on ShareLinkRecord {
            id
          }
        }
        links
        value
      }
      coverImage {
        url
        video {
          duration
          framerate
          mp4Url
        }
        title
        height
      }
      id
    }
  }
`
}

run();
