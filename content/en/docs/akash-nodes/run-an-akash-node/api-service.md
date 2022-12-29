---
title: "API Service"
key: "api-service"
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
        parent: "akash-node-cli-build"

---
API Service
===========

The API Service of a full node enables a read-only query API that is useful for many tools such as dashboards, wallets, and scripting in general.

The API Service is configured in `~/.akash/config/app.toml` and can be enabled in the `[api]` section:

    [api]
    enable = "true"
    

By default, the service listens on port `1317`, but this can also be changed in the `[api]` section of `app.toml`.