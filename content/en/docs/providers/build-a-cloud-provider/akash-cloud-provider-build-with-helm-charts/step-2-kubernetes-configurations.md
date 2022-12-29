---
title: "STEP 2 - Kubernetes Configurations"
key: "step-2-kubernetes-configurations"
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
STEP 2 - Kubernetes Configurations
==================================

Create Provider namespaces on your Kubernetes cluster.

Run these commands from a Kubernetes master node which has kubectl access to cluster.

    kubectl create ns akash-services
    kubectl label ns akash-services akash.network/name=akash-services akash.network=true
    
    kubectl create ns ingress-nginx
    kubectl label ns ingress-nginx app.kubernetes.io/name=ingress-nginx app.kubernetes.io/instance=ingress-nginx
    
    kubectl create ns lease
    kubectl label ns lease akash.network=true