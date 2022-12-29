---
title: "Akash Node Installation"
key: "akash-node-installation"
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
        parent: "akash-node-via-helm-charts"

---
Akash Node Installation
=======================

Uninstall Any Prior Node Instances
----------------------------------

**NOTE** - if no previous Akash node instances are found the following message will be received and is expected

*   \``` Error: uninstall: Release not loaded: akash-node: release: not found` ``

    helm -n akash-services uninstall akash-node
    

**Install Akash Node as a Kubernetes Pod**
------------------------------------------

    helm install akash-node akash/akash-node -n akash-services
    

### **Expected/Sample Output**

    helm install akash-node akash/akash-node -n akash-services
    
    NAME: akash-node
    LAST DEPLOYED: Thu Jun 23 13:26:03 2022
    NAMESPACE: akash-services
    STATUS: deployed
    REVISION: 1
    TEST SUITE: None