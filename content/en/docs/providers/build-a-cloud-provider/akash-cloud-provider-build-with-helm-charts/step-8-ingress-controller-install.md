---
title: "STEP 9 - Ingress Controller Install"
key: "step-9-ingress-controller-install"
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
        parent: "akash-cloud-provider-build-with-helm-charts"

---
STEP 7 - Ingress Controller Install
===================================

*   Build the Kubernetes ingress controller
    
        helm install akash-ingress akash/akash-ingress -n ingress-nginx --set domain=$DOMAIN
        
    

#### Expected Output

    NAME: akash-ingress
    LAST DEPLOYED: Thu Apr 28 19:08:45 2022
    NAMESPACE: ingress-nginx
    STATUS: deployed
    REVISION: 1
    TEST SUITE: None