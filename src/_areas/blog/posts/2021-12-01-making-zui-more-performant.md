---
layout: blog
type: blogPost
title: Making ZUI more performant
description: Reducing the bloat of ZUI to improve load times for your apps
date: 2021-12-01T01:46:29.942Z
hideToc: false
tags:
  - Engineering
  - Web
---
## History

Anecdote time!

A few years back, before the Zywave API Toolkit existed and when the organization was still only a few hundred employees, ZUI 4 was born. We produced standard, ES modules with one caveat: the import statements were ["bare'](https://github.com/WICG/import-maps#the-basic-idea). This made it harded to use ZUI in an environment where you did not want to use some NodeJS based resolver (webpack or rollup, for example) because browsers only had implemented URI-based imports, and those were not valid URIs. And it really hurt adoption. Who wants webpack everywhere, when webpack isn't needed?

An architect at Zywave convinced the ZUI team that maybe, just maybe, taking on the "bundling" process might make everyone's lives so much easier. And thus [@zywave/zui-bundle](https://www.npmjs.com/package/@zywave/zui-bundle) was born. And all was good.