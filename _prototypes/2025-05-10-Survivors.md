---
layout: prototype
title: "Survivors Prototype"
image: "portfolioImgs/Survivors/Survivors.PNG"
date: 2025-05-10 10:00:00
category: [Prototype]
youtube_id: aaoiHiGFrg0
author: Me
---

## Description
Survivors is a prototype of a Vampire Survivors-style action game in UE 5.5 to explore more on Gameplay ability System (GAS). The primary goal of this prototype was to extend GAS to support auto-reactivating abilities and upgrades. This pushed me to deeply understand the ability lifecycle, tag system, and activation flow in Unreal’s Gameplay Ability System.

## Features
In this prototype I implemented:

#### Custom GAS-based Ability System:
- Handles automatic reactivation, passive and active abilities, cooldowns, and upgrades

#### Modular Subsystems: 
- Data-driven abilities, upgrades, and UI using Data Assets and Data Tables (designed to extend enemies and other gameplay systems)

#### Upgradeable Abilities:
- AOE damage, projectiles, healing, buffs, movement boosts, etc. all scalable via Gameplay Effects and upgrade logic

#### Enemy AI & Spawning:
- Dynamic enemy spawning with Environment Query System (EQS) and Behavior Trees, with difficulty scaling via upgrade system

## Built Using
- Unreal Engine 5
- Gameplay Ability System (GAS)
- Environment Query System (EQS)
- C++ & Blueprints
- Behavior Trees
- UMG
- Data Tables