---
title: "Create your Certificate"
key: "create-your-certificate"
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
Create your Certificate
=======================

In this step we will create a local certificate and then store the certification on the block chain

*   NOTE - for those familiar with previous Akash CLI versions the following commands for cert creation have changed. We believe the new command sets in this version make steps more clear.
*   Ensure that prior steps in this guide have been completed and that you have a funded wallet before attempting certificate creation.
*   **Your certificate needs to be created only once per account** and can be used across all deployments.

#### Generate Cert

*   Note: If it errors with `Error: certificate error: cannot overwrite certificate`, then add `--overwrite` should you want to overwrite the cert. Normally you can ignore that error and proceed with publishing the cert (next step).

    provider-services tx cert generate client --from $AKASH_KEY_NAME
    

#### Publish Cert to the Blockchain

    provider-services tx cert publish client --from $AKASH_KEY_NAME