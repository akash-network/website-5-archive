---
title: "Close Akash Deployment"
key: "close-akash-deployment"
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
        parent: "akash-deployments-via-terraform"

---
Close Akash Deployment
======================

**Overview**
------------

In this section we close an Akash Deployment via Terraform.

Ensure that the steps detailed in this section are executed from the directory in which the Terraform manifest exists.

**Steps**
---------

### Close the Deployment

    terraform destroy -auto-approve