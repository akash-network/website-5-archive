---
title: "STEP 2 - Inbound Communication Verifications"
key: "step-2-inbound-communication-verifications"
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
        parent: "akash-provider-checkup"

---
STEP 2 - Inbound Communication Verifications
============================================

*   In this step we will verify functionality of inbound communication for active deployments on our provider
*   Within the Cloudmos Deployment detail pane > navigate to the LEASES tab > and click the URL of the test deployment

![](/images/.gitbook/akashlyticsInboundVerification.png)

*   A new tab within your browser should launch and Hello Akash World home page should display as demonstrated below
*   Note - the URL will be directed to the Ingress Controller of your provider Kubernetes cluster
*   If this page does not display properly it would indicate an issue with the provider’s Ingress Controller and we should investigate via the [Provider Troubleshooting guide](../../akash-provider-troubleshooting/)

![](/images/.gitbook/helloWorldHomePage.png)