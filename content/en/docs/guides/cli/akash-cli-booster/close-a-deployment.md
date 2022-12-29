---
title: "Close a Deployment"
key: "close-a-deployment"
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
        parent: "akash-cli-booster"

---
Close a Deployment
==================

    akash_close
    

#### Expected/Sample Output

    root@ip-10-0-10-163:~/akash-tools/cli-booster[http://akash-sentry01.skynetvalidators.com:26657][deploymentone][4751918-1-1]$ akash_close
    
    INFO: Broadcasting 'akash deployment close -y' transaction...
    Enter keyring passphrase:
    gas estimate: 237627
    INFO: Waiting for the TX 7AF03163EC3347712DCD2BBC648D82F70BCE0F681683AFAC537EA5520F8F2785 to get processed by the Akash network
    INFO: Success
    4751918 deployment has been successfully closed.
    INFO: Total spent for 4751918: 129 uakt or $0.0001767