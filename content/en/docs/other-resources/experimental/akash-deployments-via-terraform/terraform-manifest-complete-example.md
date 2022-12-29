---
title: "Terraform Manifest - Complete Example"
key: "terraform-manifest-complete-example"
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
Terraform Manifest - Complete Example
=====================================

*   Replace the _**account\_address**_ and _**key-name**_ values

    terraform {
      required_providers {
        akash = {
          source = "cloud-j-luna/akash"
          version = "0.0.5"
        }
      }
    }
    
    provider "akash" {
      account_address = "akash1g<redacted>"
      keyring_backend = "os"
      key_name = "mykey"
      node = "https://akash-rpc.polkachu.com:443"
      chain_id = "akashnet-2"
      chain_version = "0.1.0"
    }
    
    resource "akash_deployment" "hello_world" {
      sdl = file("${path.module}/deploy.yaml")
    }
    
    output "services" {
      value = akash_deployment.hello_world.services
    }