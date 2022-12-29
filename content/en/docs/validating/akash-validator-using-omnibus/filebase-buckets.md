---
title: "FileBase Buckets"
key: "filebase-buckets"
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
        parent: "akash-validator-using-omnibus"

---
FileBase Buckets
================

The Omnibus framework used to build our Akash Validator will store the following info in a S3 bucket for re-use when a deployment is restarted. All data stored will be encrypted.

*   _Validator's Private Key_
*   _Node IDs_ - more detail on the use of these IDs later in this guide

Bucket Creation
---------------

We recommend the use of [FileBase](https://console.filebase.com/) S3 buckets for this purpose. If you do not have a FileBase account, create a free account for this use.

Create the following buckets within FileBase for upcoming use in the Validator build.

*   akashnode1
*   akashnode2
*   akashvalidator

Access Keys
-----------

Visit the FileBase \`Access Keys\` menu option and capture the `KEY` and `SECRET` for use in subsequent steps.