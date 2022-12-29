---
title: "Upload Manifest"
key: "upload-manifest"
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
Upload Manifest
===============

### Upload Manifest to Provider

*   Upload the deployment’s SDL to chosen provide

    provider-services send-manifest sdl/big-dipper.yaml --provider $AKASH_PROVIDER
    

### **Confirm Lease Status**

*   Retrieve the deployment’s URL and mapped ports

    provider-services provider lease-status --provider $AKASH_PROVIDER