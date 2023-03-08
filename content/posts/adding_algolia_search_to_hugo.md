---
title: "Adding Algolia Search to Hugo"
description: "Lets add algolia search to hugo"
date: 2023-03-04T13:55:20-05:00
draft: false
tags: ["Search Engine", "Algolia", "Hugo"]
categories: ["Development"]
# weight: 4
# lastmod: 2020-01-01T16:45:40+08:00
# author: "Dillon"
# authorLink: "https://shivas.blog"
# images: []
# resources:
#   - name: "featured-image"
#   src: "featured-image.png"
# lightgallery: true
---
### What This Post Covers
Hi There! If you're looking for a powerful framework to build your personal or project website in a matter of minutes, Hugo is your guy. However, there's one little problem - Hugo doesn't come with a search engine by default. But don't fret, I'm here to show you how I enabled Algolia search on my Hugo website. Just a quick heads up, this isn't a comprehensive guide, but rather a post that I created as I was learning how to do this myself. So, let's dive in and get started, shall we?

### Before We Begin
To follow this post, you should have the following installed and up-to-date on your local machine:

- [x] Hugo
- [x] NPM

We will be using Algolia as our search provider, which is a SaaS (Search as a Service) platform. Therefore, you will need to have an Algolia account set up at [https://www.algolia.com/](https://www.algolia.com/).


### Getting Keys from Algolia
After creating an Algolia account, navigate to the "Search" product in the left-hand panel. Here, you can create an index under an application. It's worth noting that Algolia is a free service, and you can find more details on their website.

Next, go to the [API Keys section](https://www.algolia.com/account/api-keys/)from seetings (left bottom) and copy the following details:

1.  Application ID
2.  Admin API Key
3.  Index name - this should be the name of the index you created earlier.

### Change on local env
Install Hugo-algolia on your local
 Navigate to your project root directory and run the following command
 
	`npm install hugo-algolia`

Add this piece of code to your package.json on your project root directory
```json
"scripts": {
"index": "hugo-algolia",
"index-and-send": "hugo-algolia -s"
}```


>add this to your config.yml file (which is in project root dir, it don't exist create one) -
```yaml
---
algolia:
index: "hugopage"
key: "66427d478es90866c81fd82f9"
appID: "86WT02H4BNN2"
---
```
	replace index, key and appid from your Algolia account that you created.

Make sure your have a cople of posts created already and then run the following command to create a our local.
	`npm run index`
	this will create a .json file that we can upload to our algolia index that we create


