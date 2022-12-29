---
title: "RPC Service"
key: "rpc-service"
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
RPC Service
===========

The RPC Service allows for both sending transactions to the network and for querying state from the network. It is used by the `akash` command-line tool when using an `akash tx` command or `akash query` command.

The RPC Service is configured in the `[rpc]` section of `~/.akash/config/config.toml`.

By default, the service listens on port `26657`, but this can also be changed in the `[rpc]` section of `config.toml`.