const fs = require('fs');
const path = require('path');
const glob = require('glob')
const SOURCE_DIR = "stage/community";
const TARGET_DIR = "content/en/community/core-groups";


function run() {
    // copy all files and directories that do not start with '.' from SOURCE_DIR TO TARGET_DIR 
    // rename README.md to index.md

    // read all files and directories in SOURCE_DIR
    // for each file or directory

    glob(SOURCE_DIR + '/**/*', (err, files) => {
        if (err) {
            console.log('Error', err)
        }
        for (let file of files) {
            // if it starts with a dot, skip it
            if (file.startsWith('.')) {
                continue;
            }

            // remove SOURCE_DIR from the file name
            targetfile = file.replace(SOURCE_DIR, '');

            // if it is a directory, create the directory in TARGET_DIR 
            if (fs.statSync(file).isDirectory()) {
                // and ignore if the directory exists in the TARGET_DIR
                if (!fs.existsSync(path.join(TARGET_DIR, targetfile))) {
                    fs.mkdirSync(path.join(TARGET_DIR, targetfile));
                }
            } else {
                // if it is a file, copy it to TARGET_DIR
                // if it is README.md, rename it to index.md
                if (file.endsWith('README.md')) {
                    // if the file is in the root of the SOURCE_DIR, rename it to _index.md
                    if (file.split('/').length == 3) {
                        targetfile = targetfile.replace('README.md', '_index.md');
                    } else { 
                        targetfile = targetfile.replace('README.md', 'index.md');
                    }
                }


                fs.copyFileSync(file, path.join(TARGET_DIR, targetfile));

            }
            console.log("got file", targetfile)
        }
    });
}
run();