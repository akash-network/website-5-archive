---
title: "Check Persistent Storage Health"
key: "check-persistent-storage-health"
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
Check Persistent Storage Health
===============================

Persistent Storage Status Check
-------------------------------

    kubectl -n rook-ceph get cephclusters
    

### **Expected Output**

    root@node1:~/akash# kubectl -n rook-ceph get cephclusters
    
    NAME        DATADIRHOSTPATH   MONCOUNT   AGE     PHASE   MESSAGE                        HEALTH      EXTERNAL
    rook-ceph   /var/lib/rook     1          5m18s   Ready   Cluster created successfully   HEALTH_OK