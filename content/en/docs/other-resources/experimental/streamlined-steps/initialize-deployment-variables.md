---
title: "Initialize Deployment Variables"
key: "initialize-deployment-variables"
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
        parent: "streamlined-steps"

---
Initialize Deployment Variables
===============================

*   In this step we execute a script that will set environment variables related to the deployment created in the previous step
*   Amongst other variables, the deployment ID (DSEQ) is captured and set as an env variable

    apt install jq
    
    source demo.sh
    

Verify Deployment Status
------------------------

    provider-services query deployment get