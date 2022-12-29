---
title: "Create Test Deployment"
key: "create-test-deployment"
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
Create Test Deployment
======================

*   If a deployment has been in the current session previously, use the following command to clear the DSEQ number to prepare for new deployment creation

    unset AKASH_DSEQ
    

### **Create Deployment**

    provider-services tx deployment create sdl/big-dipper.yaml