---
title: "Inventory Operator"
key: "inventory-operator"
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
        parent: "helm-based-provider-persistent-storage-enablement"

---
Inventory Operator
==================

*   Install an Inventory Operator that is used for persistent storage
*   The Operator reports the free space available to the Akash Provider

    helm install inventory-operator akash/akash-inventory-operator -n akash-services
    

#### Expected Output

    root@node1:~/helm-charts/charts# helm install inventory-operator akash/akash-inventory-operator -n akash-services
    
    NAME: inventory-operator
    LAST DEPLOYED: Thu May  5 18:15:57 2022
    NAMESPACE: akash-services
    STATUS: deployed
    REVISION: 1
    TEST SUITE: None