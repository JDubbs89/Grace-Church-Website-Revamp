# Grace Church - Website Revamp 2025
  Welcome! This is my Next.js project I am working on for Grace Church, in Jackson MI.

## Overview
  Grace Church is one of the oldest Baptist churches in Michigan - over 100 years old! That said, the current website at the time of writing this is quite outdated (not 100 years outdated, but certainly not modern either.)
  This project is made to give the church's site a little bit of a facelift - Next.js allows for easy front and backend functionality while making the site look great.

![image](https://github.com/JDubbs89/Grace-Church-Website-Revamp/blob/master/gallery/homepage.png)

## Mission Statement
  Grace Church Exists to Glorify God by Upholding the Gospel, Making Disciples, Serving Others, and Providing Community.

## Site Features
  - Responsive Design and Sleek Interactions
  - Quick, easy access to giving portal
  - Readable, good looking content
  - Accurate carryover from the original lifeatgrace.org site
  - Video embeds and sermon lookups

## Tech Stack
  ### Frontend
  This site is built on Next.js, a framework for React that integrates React features such as client and server functional components, layouts, etc. with better routing, SEO, and backend API integrations.
  Next.js allows for a well organized, easily navigable project footprint, making it easier to make changes and improve upon existing logic.
  ### Backend
  Docker keeps all the services in this project neatly bound together, but separately in containers. Docker provides a lightweight format for simulating file structures/operating systems without the use of a traditional VM.
  I've chosen to use SQLite for post data, email listees, and other data involved with the site.
  Still deciding which API structure I want to use, although I am considering a RESTful API with either FastAPI, Django, or Spring Boot.
  Will likely use Redis for caching/site performance.
