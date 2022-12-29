---
title: "STEP1 - Install Akash Software"
key: "step1-install-akash-software"
description: ""
lead: ""
date: Thu Dec 29 2022 03:03:46 GMT-0800 (Pacific Standard Time)
lastmod: Thu Dec 29 2022 03:03:46 GMT-0800 (Pacific Standard Time)
draft: false
images: []
weight: 1
toc: true

menu:
    docs:
        parent: "akash-node-cli-build"

---
STEP1 - Install Akash Software
==============================

In this step we will cover Installing the Akash software on a Linux server. We will use an Ubuntu server for our examples. The commands may need to be changed slightly depending on your Linux distribution.

Download and Install Akash
--------------------------

### Install Latest Stable Akash Version

    cd ~
    
    apt install jq -y
    
    apt install unzip -y
    
    AKASH_VERSION="$(curl -s https://api.github.com/repos/ovrclk/akash/releases/latest | jq -r '.tag_name')"
    
    curl https://raw.githubusercontent.com/ovrclk/akash/master/godownloader.sh | sh -s -- "$AKASH_VERSION"