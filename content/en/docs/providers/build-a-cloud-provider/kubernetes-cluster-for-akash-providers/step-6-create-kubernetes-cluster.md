---
title: "STEP 7 - Create Kubernetes Cluster"
key: "step-7-create-kubernetes-cluster"
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
STEP 6 - Create Kubernetes Cluster
==================================

Create Cluster
--------------

With inventory in place we are ready to build the Kubernetes cluster via Ansible.

*   Note - the cluster creation may take several minutes to complete
*   If the Kubespray process fails or is interpreted, run the Ansible playbook again and it will complete any incomplete steps on the subsequent run

    cd ~/kubespray
    
    ansible-playbook -i inventory/akash/hosts.yaml -b -v --private-key=~/.ssh/id_rsa cluster.yml