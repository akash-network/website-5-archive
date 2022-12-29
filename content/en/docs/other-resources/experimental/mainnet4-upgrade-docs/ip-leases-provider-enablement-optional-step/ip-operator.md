---
title: "IP Operator"
key: "ip-operator"
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
IP Operator
===========

Create the necessary IP Operator for IP Leases provider enablement.

### Command Template

*   Replace `<provider-address>` with the address of your provider

    helm install akash-ip-operator akash/akash-ip-operator -n akash-services --set provider_address=<provider-address>
    

### Example Command

    helm install akash-ip-operator akash/akash-ip-operator -n akash-services --set provider_address=akash1hwmenz63dp59uve5ytea09suwgr47y3rn9902y
    

### Example Output

    helm install akash-ip-operator akash/akash-ip-operator -n akash-services --set provider_address=akash1hwmenz63dp59uve5ytea09suwgr47y3rn9902y
    
    NAME: akash-ip-operator
    LAST DEPLOYED: Wed Aug 10 20:43:38 2022
    NAMESPACE: akash-services
    STATUS: deployed
    REVISION: 1
    TEST SUITE: None