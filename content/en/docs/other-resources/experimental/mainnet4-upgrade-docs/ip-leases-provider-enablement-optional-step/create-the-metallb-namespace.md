---
title: "Create the MetalLB Namespace"
key: "create-the-metallb-namespace"
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
        parent: "ip-leases-provider-enablement-(optional-step)"

---
Create the MetalLB Namespace
============================

Issue the following command to create the necessary MetalLB namespace:

    kubectl create ns metallb-system