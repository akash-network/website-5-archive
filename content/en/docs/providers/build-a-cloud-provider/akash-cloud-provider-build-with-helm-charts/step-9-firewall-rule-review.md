---
title: "Step 10 - Firewall Rule Review"
key: "step-10-firewall-rule-review"
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
Step 8 - Firewall Rule Review
=============================

External/Internet Firewall Rules
--------------------------------

The following firewall rules are applicable to internet-facing Kubernetes components.

### **Akash Provider**

    8443/tcp - for manifest uploads
    

### **Akash Ingress Controller**

    80/tcp - for web app deployments
    443/tcp - for web app deployments
    30000-32767/tcp - for Kubernetes node port range for deployments
    30000-32767/udp - for Kubernetes node port range for deployments