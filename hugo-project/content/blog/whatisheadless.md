---
title: What is headless?
date: 2021-10-29
draft: flase
hideToc: flase
enableToc: true
enableTocContent: flase
image: image/whatisheadless.png
author: Manh Tuan
authorEmoji: 
tag:
- noidung
series:
-
---

Should you adopt the newer “headless” approach to content management? Or stick with a traditional, monolithic system.

While Content Management Systems (CMS) have been around for a long time, there have been some big changes in what’s on lately. Let’s explore the differences between the two approaches and look at how Sanity is an evolution of both.


{{< youtube xNXpYkWM5As >}}


__What is a Headless CMS?__
* A headless CMS is a content management system that provides a way to author content, but instead of having your content coupled to a particular output (like web page rendering), it provides your content as data over an API.

The “head” relates to where your content ends up, and the “body” is where your content is stored and authored. This might sound a little strange at first, but __the point of a headless CMS isn't that you don't want or need a head, it's that you get to pick and choose which heads (outputs) you send your content to.__

In the last few years, we have seen an uptick of CMSes that try to be more flexible in their ways of making content available. These are usually called “Headless” or “API-first” CMSes. Some of them market themselves as “Content infrastructure,” “Content Hubs” or even “Content as a Service.” However, when you take a closer look, they all pretty much boil down to some database backend with a web-based user interface, and content made accessible through an API.

At Sanity we see today’s headless CMS systems as an evolutionary step that leads to an even better way of managing content – where structure is truly flexible, content is treated like data, and editors work in tailored real-time collaboration environments.

__Headless CMS vs Traditional CMS__
* As opposed to headless, a “traditional CMS” is software that you either install and have to manage on your own, or on a managed server environment. Traditional CMSes are also called “monolithic” because they pack all the functionality and assumptions for how you want to work into a single system. Traditional CMSes often provide a “What You See Is What You Get” (WYSIWYG) content editing interface because they __only have one context__ for presenting the content – usually a web page.
![markdown](https://cdn.sanity.io/images/3do82whm/next/665ee622d8843e9bd55dc8035ea21c717f410326-3388x2946.png?w=720&h=626&fit=clip&auto=format)

__What about Decoupled CMSes?__
* As a response to the introduction of headless CMSes, some of the traditional CMS vendors have built APIs on top of their systems and market them as “decoupled.” The decoupled approach promises both website rendering capabilities and the flexibility of headless, however, the catch is that decoupled CMS APIs are heavily influenced by a model built for a single website. When it boils down to it, this is a form of coupling and restricts the amount of contexts that your content can reasonably be applied to
* Decoupled CMSes are __adding APIs__ on top to serve content
* Headless CMSes are __API-exclusive__
* __How does a Headless CMS work?__
* A headless CMS works by:
 1. 1 Giving editors an interface for managing content.
 2. 2 Giving editors an interface for managing content.
 * Most headless CMSes are offered as a Software as a Service (SaaS), meaning that your editors will have to log into a web application and that the APIs are hosted in a cloud-based backend. Some headless CMSes will let you host the whole solution on your own server and database. In this model means you have to do your own scaling and operations.

* Sanity lets you host the react-based customizable editing interface yourself, and you get the no-ops and scaling-friendly advantages of a hosted real-time backend. In many ways Sanity is a superset of a headless CMS – because it’s more flexible, offers real-time collaboration, and it treats your content (even rich text) as data. You can use it to power products of any kind.
