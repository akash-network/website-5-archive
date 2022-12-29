---
title: "Additional notes on the IP Operator"
key: "additional-notes-on-the-ip-operator"
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
Additional notes on the IP Operator
===================================

If running non-Helm-based Akash Provider, then make sure to set the following

    AKASH_IP_OPERATOR=true
    

*   Alternatively this could be passed in via CLI argument

    provider-services run --ip-operator=true
    

*   Additional ensure that the Akash provider IP operator is running (`provider-services ip-operator`)