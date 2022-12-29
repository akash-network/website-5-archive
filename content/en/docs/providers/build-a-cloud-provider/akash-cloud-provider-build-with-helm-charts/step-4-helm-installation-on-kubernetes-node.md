---
title: "STEP 4 - Helm Installation on Kubernetes Node"
key: "step-4-helm-installation-on-kubernetes-node"
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
STEP 4 - Helm Installation on Kubernetes Node
=============================================

*   Install Helm on a Kubernetes Master Node
    
        wget https://get.helm.sh/helm-v3.9.4-linux-amd64.tar.gz
        
        tar -zxvf helm-v3.9.4-linux-amd64.tar.gz
        
        mv linux-amd64/helm /usr/local/bin/helm
        
        helm repo add akash https://ovrclk.github.io/helm-charts
        
    

**Confirmation of Helm Install**
--------------------------------

**Print Helm Version**

    helm version
    

**Expected Output**

    root@node1:~# helm version
    
    version.BuildInfo{Version:"v3.9.4", GitCommit:"6e3701edea09e5d55a8ca2aae03a68917630e91b", GitTreeState:"clean", GoVersion:"go1.17.5"}