---
title: "Provider Networks"
key: "provider-networks"
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
        parent: "build-a-cloud-provider"

---
Provider Networks
=================

NOTE: Please use Mainnet for deployments. Testnet does not have providers today.
--------------------------------------------------------------------------------

At any given time, there are a number of different Akash networks running for using in testing new nodes, providers, validators, and even deployments. The generally available networks are:

Network

Description

[mainnet](https://github.com/ovrclk/net/tree/master/mainnet)

Akash Network mainnet network.

[testnet](https://github.com/ovrclk/net/tree/master/testnet)

**No providers available to bid at this time.**

[edgenet](https://github.com/ovrclk/net/tree/master/edgenet)

Testing the next mainnet version.

The [ovrclk/net](https://github.com/ovrclk/net) GitHub repository contains metadata about each available network. The format is standardized across the networks so that you can use the same method to fetch the information for any of them.

First determine the base URL (`$AKASH_NET`) for the network you want to connect to - use the line from below that corresponds with the network you want to connect to:

    # mainnet
    AKASH_NET="https://raw.githubusercontent.com/ovrclk/net/master/mainnet"
    
    # testnet
    AKASH_NET="https://raw.githubusercontent.com/ovrclk/net/master/testnet"
    
    # edgenet
    AKASH_NET="https://raw.githubusercontent.com/ovrclk/net/master/edgenet"
    

### Version

    AKASH_VERSION="$(curl -s "$AKASH_NET/version.txt")"
    

### Chain ID

The akash CLI will recogonize `AKASH_CHAIN_ID` environment variable when exported to the shell.

    export AKASH_CHAIN_ID="$(curl -s "$AKASH_NET/chain-id.txt")"
    

### Genesis

    curl -s "$AKASH_NET/genesis.json" > genesis.json
    

### Seed Nodes

    curl -s "$AKASH_NET/seed-nodes.txt" | paste -d, -s
    

### Peer Nodes

    curl -s "$AKASH_NET/peer-nodes.txt" | paste -d, -s
    

### RPC Node

Print a random RPC endpoint. The akash CLI will recognize `AKASH_NODE` environment variable when exported to the shell.

    export AKASH_NODE="$(curl -s "$AKASH_NET/rpc-nodes.txt" | shuf -n 1)"
    
    echo $AKASH_NODE
    

### API Node

Print a random API endpoint

    curl -s "$AKASH_NET/api-nodes.txt" | shuf -n 1