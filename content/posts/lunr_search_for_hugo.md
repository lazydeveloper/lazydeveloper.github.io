---
title: "Add Lunr Search to Hugo site"
description: "Lets add lunr search to hugo"
date: 2023-06-11T20:02:20-05:00
draft: false
tags: ["Search", "Lunr", "Hugo"]
categories: ["Development"]
weight: 4
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
Hugo ships with out search, yet I love it. However, I've managed to integrate lunr search that is supported by the theme [Loveit](https://hugoloveit.com/) that I'm using on this website. With that being said, this post will cover how I managed to integrate `lurn` on [my website](https://shiva.dev/) - go ahead and search for something on this website :)

### What you need?
Make sure you the following installed/updated 

- [ ] [Hugo](https://gohugo.io/installation/)
- [ ] [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [ ] [hugo-lunr](https://www.npmjs.com/package/hugo-lunr)

Today, there are handfull of search tools available for Hugo websites. One popular option is Hugo-lunr, which utilizes Lunr search. It's easily installed via npm. For more information, visit its npm page: [hugo-lunr](https://www.npmjs.com/package/hugo-lunr).

### 1. Update package.json
Go to `package.json` in project root directory and add the following
``` 
	"scripts": {
    "index": "hugo-lunr -i \"content/subdir/**\" -o static/lunr.json"
  }
```
[here](https://github.com/SHlVA/shlva.github.io/blob/main/package.json) is my package.json for quick reference 

### 2. Update config.toml
Make sure you enable search in your config.toml
```json
# Search config
  [params.search]
    enable = true
    # type of search engine ["lunr", "algolia"]
    type = "lunr"
```

and then add out puts if not added already.
```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
  page = ["HTML"]
```

### 3. Build the index
After step 1 and 2 you shall be able to build the site index. Go ahead and open the terminal and run the following command from your project root directory.

```
npm run index 
```

once you run this command, you will see the file `lunr.json` generated in `static/lunr.json` folder at the root of your project directory.

Now build your website. 
```
hugo
```
This will copy the `lunr.json` from static/ dir to the public/ dir of your project.

### 4. Update baseof.html
open `themes/LoveIt/layouts/_default/baseof.html`(this path might be diff in your case, based on your theme) and add the following line before closing the head
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js"></script>
```

and at the end of the page, add the following script. this will fetch the data from lurn.json file that's generated in step 3

```html
<!-- Script to load Lunr index and handle search -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var searchIndex;

        fetch('/lunr.json')
            .then(response => response.json())
            .then(data => {
                searchIndex = lunr(function () {
                    this.field('title');
                    this.field('content');
                    this.field('tags');
                    this.ref('uri');

                    data.forEach(doc => {
                        this.add(doc);
                    });
                });
            });

        function performSearch(query) {
            if (searchIndex) {
                var results = searchIndex.search(query);
                displayResults(results);
            }
        }

        function displayResults(results) {
            var resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = '';
            results.forEach(result => {
                var item = document.createElement('div');
                item.innerHTML = `<a href="${result.ref}">${result.ref}</a>`;
                resultsContainer.appendChild(item);
            });
        }

        var searchInputDesktop = document.getElementById('search-input-desktop');
        if (searchInputDesktop) {
            searchInputDesktop.addEventListener('input', function() {
                performSearch(searchInputDesktop.value);
            });
        }

        var searchInputMobile = document.getElementById('search-input-mobile');
        if (searchInputMobile) {
            searchInputMobile.addEventListener('input', function() {
                performSearch(searchInputMobile.value);
            });
        }
    });
</script>
```
### 5. The End
By following the above steps, you have successfully setup lunr on your webpage. You shall be able to search your website.
1. run the following to build the index `npm run index`
2. run `hugo` to build the website
3. start your server with `hugo server -D`

1. Open your terminal and navigate to the root directory of your Hugo project.
2. Run the `npm run index` command to index of your content directory.
3. Once index is ready, run `hugo` to build your website.

Now start your hugo server using the cmd `hugo server -D` and you shall be able to search your through your content. 


