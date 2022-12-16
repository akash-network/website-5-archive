require('dotenv').config()

var buildClient = require('@datocms/cma-client-node').buildClient;
var isBlock = require('datocms-structured-text-utils').isBlock;
var stext2text = require('datocms-structured-text-to-plain-text').render;
var stext2html = require('datocms-structured-text-to-html-string').render;
var util = require('util');
var TurndownService = require('turndown');
var CONTENT_PATH = "content/en/blog";

const endPoint = 'https://graphql.datocms.com/'
const apiToken = process.env.DATO_API_TOKEN

function run() {
    doFetch(Query)
        .then(res => res.json())
        .then(res => {
            //console.log(util.inspect(res.data, { showHidden: false, depth: null, colors: true }))
            res.data.allBlogPosts.forEach(record => {
                try {
                    htmlContent = stext2html(record.content, renderOptions);
                    markdownContent = html2markdown(htmlContent);
                    meta = renderMeta(record);
                    saveFile(record.slug, meta, markdownContent);
                } catch (error) {
                    console.log("ERROR",record.slug);
                    console.log(error);
                    console.log(htmlContent);
                    console.log(util.inspect(record.content, { showHidden: false, depth: null, colors: true }))
                }
            });
        });
}

function getBlogCount() {
    doFetch('query { _allBlogPostsMeta { count } }').then(res => res.json()).then(res => {
        console.log(res.data);
        //return res.data._allBlogPostsMeta.count
    });
}


const renderOptions = {
    renderBlock({ record, adapter: { renderNode } }) {
        // TODO: add support for other blocks (e.g. CTA, Video, etc.)
        if (record.image != null && record.image.url != "") {
            return renderNode('figure', {}, renderNode('img', { src: record.image.url }));
        }
    },
}

function html2markdown(html) {
    return new TurndownService().turndown(html);
}

function saveFile(slug, meta, content) {
    const fs = require('fs');
    const path = require('path');
    const dir = path.join(process.cwd(), CONTENT_PATH, slug);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const filename = path.join(dir, 'index.md');
    console.log("W", filename)
    fs.writeFileSync(filename, '---\n' + meta + '---\n' + content);
}

// this method renders metadata to frontmatter
function renderMeta(record) {
    return `title: "${record.title}"
date: ${record.date}
lastmod: ${record.updatedAt}
images: ["${record.coverImage.url}"]
draft: false
weight: 50
categories: ["News"]
tags: ["security", "performance", "SEO"]
contributors: ["John Doe"]
pinned: false
homepage: false
`;
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

const Query = `
query {
    allBlogPosts {
      title
      slug
      updatedAt
      date
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

run();