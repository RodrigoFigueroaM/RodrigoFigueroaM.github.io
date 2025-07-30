---
layout: post
title:  "Traversal Links"
image: "/portfolioImgs/TraversalLinks/TraversalLinks.png"
date:   2025-07-29 15:39:40
category: Personal
youtube_id: -yNFDYmsys0
author: Me
---

[Source Code](https://github.com/RodrigoFigueroaM/TraversalLinksDev){: .btn}


## Description
TraversalLinks is a UE5 plugin I'm currently developing that streamlines the process of authoring Navigation Links, giving it a more Data-Driven approach.

### Purpose
Authoring navigation links in Unreal requires placing NavLinkProxy actors one by one.

### Solution
TraversalLinks introduces a data-driven, zone-based system for fast, batch authoring of navigation links. Designers can define traversal areas and use tools to validate the generated links so that at runtime, AI can traverse these links seamlessly.

### Common Problems It Solves
1. No feedback when a manually placed nav link will cause agents to get stuck
2. AI appears to use a link but gets stuck at runtime due to bad placement or projection
3. Difficult to iterate on traversal-heavy levels or procedural layouts
4. Data-driven approach allows for easy adjustments and testing for different traversal scenarios