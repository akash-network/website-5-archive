---
title: "Update the Deployment"
key: "update-the-deployment"
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
        parent: "detailed-steps"

---
Update the Deployment
=====================

### Update the Manifest

Update the deploy.yml manifest file with the desired change.

_**NOTE:**_\*\* Not all attributes of the manifest file are eligible for deployment update. If the hardware specs of the manifest are updated (I.e. CPU count), a re-deployment of the workload is necessary. Other attributes, such as deployment image and funding, are eligible for updates.

### Issue Transaction for On Chain Update

    provider-services tx deployment update deploy.yml --dseq $AKASH_DSEQ --from $AKASH_KEY_NAME 
    

### Send Updated Manifest to Provider

    provider-services send-manifest deploy.yml --dseq $AKASH_DSEQ --provider $AKASH_PROVIDER --from $AKASH_KEY_NAME