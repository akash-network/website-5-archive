---
title: "VMware Tanzu"
key: "vmware-tanzu"
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
        parent: "custom-kubernetes-cluster-settings"

---
VMware Tanzu
============

Kube-System Namespace Labeling
------------------------------

*   Make sure kube-system namespace has kubernetes.io/metadata.name: kube-system label

    kubectl label namespace kube-system kubernetes.io/metadata.name=kube-system
    

Why? This is required by the akash-deployment-restrictions Network Policy to allow Pods access the kube-dns.