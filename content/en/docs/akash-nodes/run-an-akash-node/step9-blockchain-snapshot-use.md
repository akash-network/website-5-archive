---
title: "STEP9 - Blockchain Snapshot Use"
key: "step9-blockchain-snapshot-use"
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
STEP9 - Blockchain Snapshot Use
===============================

We could let our node catch up to the current block but this would take a very long time. Instead we will download a snapshot of the blockchain before starting our node.

**NOTE** - at the time of this writing the snapshot is 200GB and could take some time to pull down.

### Remove Existing Data

    rm -rf ~/.akash/data; \
    mkdir -p ~/.akash/data; \
    cd ~/.akash/data
    

### Download Snapshot

    SNAP_URL="$(curl -s -o - https://cosmos-snapshots.s3.filebase.com/akash/pruned/snapshot.json | jq -r '.latest')"
    
    wget -c "$SNAP_URL"
    
    SNAP="${SNAP_URL##*/}"
    
    tar xzvf "$SNAP" --force-local