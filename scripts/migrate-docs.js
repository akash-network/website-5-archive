const { isThematicBreak } = require('datocms-structured-text-utils');
const marked = require('marked');
const slugify = require('slugify');
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { exec } = require('child_process');
const { transferableAbortSignal } = require('util');

const sourceDir = 'stage/docs';
const targetDir = 'content/en/docs';
//const targetDir = 'stage_out';

function run() {
    // Generate a map of markdown files form the summary 
    // and store in a hash with the slug as the key
    // and the file path and parent as the values

    // Tokenize the summary markdown
    var summaryFile = path.join(sourceDir, 'SUMMARY.md');
    var summaryMD = fs.readFileSync(summaryFile, 'utf8');
    const tokens = marked.lexer(summaryMD);

    // Iterate through the tokens and build the map
    var fileMap = {};
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].type === 'list') {
            mapListItems(tokens[i].items, null, fileMap);
        }
    }

    // Iterate through the filemap and process the markdown files. For each markdown file:
    // 1. Replace image path for gitbook images
    // 2. Add frontmatter
    // 3. Replace README.md with index.md
    // 4. Render markdown to target directory
    for (const [slug, file] of Object.entries(fileMap)) {
        console.log("processing file:", file.path, "slug:", slug, "title:", file.title, "parent:", file.parent);

        // read the markdown file from the source directory
        var mdFile = path.join(sourceDir, file.path);
        var md = fs.readFileSync(mdFile, 'utf8');

        // Function to detect any image urls that contain .gitbook/assets, 
        // move those images to the `images` directory in the same directory as the markdown file,
        // and update the image url to point to the new location
        const walkTokens = (token) => {
            if (token.type === 'image') {
                const url = token.href;
                if (url.includes('.gitbook/assets')) {
                    const imageName = url.split("/").pop();
                    const imageUrl = "/images/.gitbook/" + imageName;
                    console.debug("replace image url:", url, "with:", imageUrl);
                    token.href = imageUrl;
                }
            }
        }
        // override the walkTokens function to replace image paths
        marked.use({ walkTokens });

        // Get the new file path by replacing the source directory with the target directory
        let newfile = mdFile.replace(sourceDir, targetDir);

        // If the file is named "README.md", rename it to "index.md"
        if (path.basename(newfile) === 'README.md') {
            newfile = path.join(path.dirname(newfile), '_index.md');
        }

        saveMarkdown(newfile, slug, file);
    }

    function saveMarkdown(newfile, slug, file) {
        // marked library does not convert tokens to makrdown so we need 
        // to convert the HTML back to markdown which is not ideal
        // Convert the markdown to HTML
        const newHtml = marked.parse(md);

        // Convert the HTML back to markdown
        var newMarkdown = TurndownService().turndown(newHtml);

        // Create the target directory if it does not exist
        if (!fs.existsSync(path.dirname(newfile))) {
            const mkdirp = require('mkdirp');
            mkdirp.sync(path.dirname(newfile));
        }

        // prepend the frontmatter
        var fm = makeFrontmatter(slug, file.title, file.parent);

        var out = fm;

        if (file.parent != null || file.parent != undefined) {
            out = fm + "\n" + newMarkdown;
        }

        // Write the new markdown to the new file
        fs.writeFileSync(newfile, out);
        console.log(`Updated: ${newfile}`);
    }
    //console.log(fileMap);
}

function makeFrontmatter(slug, title, parent) {
    date = new Date();
    var frontmatter = `---
title: "${title}"
key: "${slug}"
description: ""
lead: ""
date: ${date}
lastmod: ${date}
draft: false
images: []
weight: 1
toc: true

`
    if (parent) {
        frontmatter += `menu:
    docs:
        parent: "${parent}"
`
    }

    frontmatter += `
---`
    return frontmatter;
}

function mapListItems(items, parentID, fileMap) {
    if (!items || items.length === 0) {
        return;
    }

    for (const item of items) {
        if (!item.tokens || item.tokens.length === 0) {
            continue;
        }

        var slug = null;
        for (const token of item.tokens) {
            switch (token.type) {
                case 'text':
                    slug = processTextLinkToken(token, parentID, fileMap);
                    break;
                case 'list':
                    mapListItems(token.items, slug, fileMap);
                    break;
            }
        }
    }
}

function processTextLinkToken(token, parentId, fileMap) {
    if (!token || token.type !== 'text') {
        return;
    }
    const text = token.tokens[0].text;
    const link = token.tokens[0].href;
    console.log("text:", text, "| link:", link, "parent:", parentId);
    let slug = slugify(text.toLowerCase());
    fileMap[slug] = {
        title: text,
        path: link,
        parent: parentId
    }
    return slug;
}

run();