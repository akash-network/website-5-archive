---
title: "Complete Persistent Storage Manifest/SDL Example"
key: "complete-persistent-storage-manifestsdl-example"
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
        parent: "persistent-storage"

---
Complete Persistent Storage Manifest/SDL Example
================================================

    version: "2.0"
    services:
      postgres:
        image: postgres
        params:
          storage:
            data:
              mount: /var/lib/postgres
      grafana:
        image: grafana/grafana
        expose:
          - port: 3000
            as: 80
            to:
              - global: true
            accept:
              - webdistest.localhost
        params:
          storage:
            data:
              mount: /var/lib/grafana
    profiles:
      compute:
        grafana-profile:
          resources:
            cpu:
              units: 1
            memory:
              size: 1Gi
            storage:
              - size: 512Mi
              - name: data
                size: 1Gi
                attributes:
                  persistent: true
                  class: beta2
        postgres-profile:
          resources:
            cpu:
              units: 1
            memory:
              size: 1Gi
            storage:
              - size: 512Mi
              - name: data
                size: 1Gi
                attributes:
                  persistent: true
                  class: beta2
      placement:
        westcoast:
          attributes:
            region: us-west
          pricing:
            grafana-profile:
              denom: uakt
              amount: 1000
            postgres-profile:
              denom: uakt
              amount: 7000
    deployment:
      grafana:
        westcoast:
          profile: grafana-profile
          count: 1
      postgres:
        westcoast:
          profile: postgres-profile
          count: 1