---
title: "Adding Algolia Search to Hugo"
description: "Lets add algolia search to hugo"
date: 2023-03-04T13:55:20-05:00
draft: false
tags: ["Algolia", "Hugo"]
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

### 0. Before We Begin
To follow this post, you should have the following installed and up-to-date on your local machine:

- [x] Hugo
- [x] NPM

We will be using Algolia as our search provider, which is a SaaS (Search as a Service) platform. Therefore, you will need to have an Algolia account set up at [https://www.algolia.com/](https://www.algolia.com/).

- [x] Signup for [https://www.algolia.com/](https://www.algolia.com/)
- [x] Have atlease one post created/published to test the search.

### 1. Getting Keys from Algolia
After creating an Algolia account, navigate to the "Search" product in the left-hand panel. Here, you can create an index under an application. It's worth noting that Algolia is a free service, and you can find more details on their website.

Next, go to the [API Keys section](https://www.algolia.com/account/api-keys/)from seetings (left bottom) and copy the following details:

1.  Application ID
2.  Admin API Key
3.  Index name - this should be the name of the index you created earlier.

### 2. Installing Hugo-algolia
To install Hugo-algolia package on your local and configure it to your project, follow the steps below:

1.  Open your terminal and navigate to the root directory of your Hugo project.
2.  Run the command `npm install hugo-algolia` to install the `hugo-algolia` package.
3.  Once the package is installed, add the following code snippet `package.json` file located in the project root directory:

```yml
"scripts": {     
"index": "hugo-algolia",     
"index-and-send": "hugo-algolia -s" }
```
This code will allow you to run the commands `npm run index` to index the search, and `npm run index-and-send` to send the search index to Algolia.

4.  Next, create a `config.yml` file in the project root directory (if it doesn't exist already).
5.  Add the following code to the `config.yml` file:

```toml
algolia:   
	index: "your_index_name"   
	key: "your_api_key"   
	appID: "your_app_id" 
```

Replace `your_index_name`, `your_api_key`, and `your_app_id` with the values from your Algolia account that you created.

By following the above steps, you have successfully installed the `hugo-algolia` package on your local and configured it to your Hugo project.

### 3. Building Site Index
Assuming you have a few posts already published and the hugo server up and running - follow the steps below to build the hugo search index and send it to Algelio Index.

1.  Open your terminal and navigate to the root directory of your Hugo project.
2.  Run the `hugo` command to build the static pages of your website.
3.  Once the static pages are built, run the `npm run index` command to index the search.
4.  Finally, run the `npm run index-and-send` command to send the search index to Algolia Index.
5.  Check if the search is working correctly on your local.

By following the above steps, you have successfully configured Algolia search into your Hugo website, indexed the search and pushed the changes to GitHub repository.

### 4. The End
Now that you have successfully integrated Algolia search into your Hugo site, you can search for posts using keywords. Please note that you need to build and send the search index to Algolia every time you publish a new post, as explained in step 3. Posts that are not included in the search index will not appear in search results, but you can still navigate to them manually from the website.

For example, if you visit my blog at [shiva.blog](http://lazydeveloper.github.io/), you can search for posts using the search bar located in the header section. 

![alt text](assets/img/algolia-search-bar.jpg)

If you have any questions, suggestions or feedback about this tutorial, please feel free to start a [new discussion here](https://github.com/lazydeveloper/lazydeveloper.github.io/discussions).  Looking for ways to improve and provide better content to my blog readers.

