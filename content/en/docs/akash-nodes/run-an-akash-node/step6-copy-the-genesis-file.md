---
title: "STEP6 - Copy the Genesis File"
key: "step6-copy-the-genesis-file"
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
STEP6 - Copy the Genesis File
=============================

Akash nodes need the Genesis file for the blockchain. In this step we will gather the genesis.json file and make sure it is valid.

### Copy the Genesis File

    curl -s "$AKASH_NET/genesis.json" > $HOME/.akash/config/genesis.json
    

### Verify the Genesis File

*   NOTE - the validation of the genesis file is failing post Mainnet3 upgrade. If you receive the following error message when using the `akash validate-genesis`, disregard the error and proceed to subsequent steps.
    *   `Error: error validating genesis file /root/.akash/config/genesis.json: failed to unmarshal inflation genesis state: EOF`

    akash validate-genesis
    

### Expected Output of Validate Genesis

    root@ip-10-0-10-101:~# akash validate-genesis
    
    File at /root/.akash/config/genesis.json is a valid genesis file