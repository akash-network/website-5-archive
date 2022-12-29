---
title: "STEP 9 - Review Firewall Policies"
key: "step-9-review-firewall-policies"
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
        parent: "kubernetes-cluster-for-akash-providers"

---
STEP 8 - Review Firewall Policies
=================================

If local firewall instances are running on Kubernetes control-plane and worker nodes, add the following policies.

Kubernetes Port List
--------------------

In this step we will cover common Kubernetes ports that need to be opened for cross server communications. For an exhaustive and constantly updated reference, please use the following list published by the Kubernetes developers.

*   [Exhaustive list of Kubernetes Ports](https://kubernetes.io/docs/reference/ports-and-protocols/)

**Etcd Key Value Store Policies**
---------------------------------

Ensure the following ports are open in between all Kubernetes etcd instances:

    - 2379/tcp for client requests; (Kubernetes control plane to etcd)
    - 2380/tcp for peer communication; (etcd to etcd communication)
    

**API Server Policies**
-----------------------

Ensure the following ports are open in between all Kubernetes API server instances:

    - 6443/tcp - Kubernetes API server
    

Worker Node Policies
--------------------

Ensure the following ports are open in between all Kubernetes worker nodes:

    - 10250/tcp - Kubelet API server; (Kubernetes control plane to kubelet)