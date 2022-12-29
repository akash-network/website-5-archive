---
title: "Akash Node Via Helm Charts"
key: "akash-node-via-helm-charts"
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
        parent: "akash-nodes"

---
Akash Node Via Helm Charts
==========================

Build an Akash Node quickly and simply with a deployment onto your Kubernetes cluster via a ready to use Helm Chart.

The Akash Node build detailed takes advantage of "state sync" which allows rapid activation. State Sync allows a new node to join a network by fetching a snapshot of the state at a recent height instead of fetching and replaying all historical blocks. This can reduce the time needed to sync with the network from hours to minutes.

Steps in this guide include:

*   **STEP 1** - [Prepare Kubernetes Cluster](prepare-kubernetes-cluster.md)
*   **STEP 2** - [Akash Node Installation](akash-node-installation.md)
*   **STEP 3** - [Node Verifications](node-verifications.md)