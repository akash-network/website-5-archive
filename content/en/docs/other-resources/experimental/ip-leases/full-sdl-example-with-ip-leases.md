---
title: "Full SDL Example with IP Leases"
key: "full-sdl-example-with-ip-leases"
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
        parent: "ip-leases"

---
Full SDL Example with IP Leases
===============================

Sections of the following SDL was used in prior sections of this guide. Providing the full SDL for context and placement clarity.

    ---
    version: "2.0"
     
    endpoints:
     myendpoint:
       kind: ip
     
    services:
     web:
       image: akashlytics/hello-akash-world:0.2.0
       expose:
         - port: 3000
           as: 80
           to:
             - global: true
               ip: "myendpoint"
     
    profiles:
     compute:
       web:
         resources:
           cpu:
             units: 0.5
           memory:
             size: 512Mi
           storage:
             size: 512Mi
     
     placement:
       dcloud:
         attributes:
            ip-lease: true
         pricing:
           web:
             denom: uakt
             amount: 1000
     
    deployment:
     web:
       dcloud:
         profile: web
         count: 1