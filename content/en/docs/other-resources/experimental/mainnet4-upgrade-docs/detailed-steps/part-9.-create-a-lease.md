---
title: "Create a Lease"
key: "create-a-lease"
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
Create a Lease
==============

Create a lease for the bid from the chosen provider above by running this command:

    provider-services tx market lease create --dseq $AKASH_DSEQ --provider $AKASH_PROVIDER --from $AKASH_KEY_NAME
    

### Confirm the Lease

You can check the status of your lease by running:

    provider-services query market lease list --owner $AKASH_ACCOUNT_ADDRESS --node $AKASH_NODE --dseq $AKASH_DSEQ
    

Note the bids will close automatically after 5 minutes, and you may get the response:

    bid not open
    

If this happens, close your deployment and open a new deployment again. To close your deployment run this command:

    provider-services tx deployment close --dseq $AKASH_DSEQ  --owner $AKASH_ACCOUNT_ADDRESS --from $AKASH_KEY_NAME 
    

If your lease was successful you should see a response that ends with:

        state: active
    

{% hint style="info" %} Please note that once the lease is created, the provider will begin debiting your deployment's escrow account, even if you have not completed the deployment process by uploading the manifest in the following step. {% endhint %}