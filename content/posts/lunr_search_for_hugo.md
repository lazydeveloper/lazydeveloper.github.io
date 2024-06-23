---
title: "Add Lunr Search to Hugo site"
description: "Lets add lunr search to hugo"
date: 2024-06-11T20:02:20-05:00
draft: false
tags: ["Search", "Lunr", "Hugo"]
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

### What's covered in this post?
Hugo ships with out search, yet I love it. However, I've managed to integrate lunr search that is supported by the theme [Loveit](https://hugoloveit.com/) I'm using on this website. With that being said, this post will cover how I integrate `lurn` on [my website](https://shiva.dev/) - for demo, go ahead and search for something on this website :)

### Install or update!
Make sure you update or install before we start.

- [ ] [Hugo](https://gohugo.io/installation/)
- [ ] [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [ ] [hugo-lunr](https://www.npmjs.com/package/hugo-lunr)

Today, there are handfull of search tools available for Hugo websites. One popular option is Hugo-lunr, which utilizes Lunr search. It's easily installed via npm. For more information, visit its npm page: [hugo-lunr](https://www.npmjs.com/package/hugo-lunr).

### 1. Edit `package.json`
Lets start!

Go to `package.json` in project root directory and add the following
``` 
	"scripts": {
    "index": "hugo-lunr -i \"content/subdir/**\" -o static/lunr.json"
  }
```
[here](https://github.com/lazydeveloper/lazydeveloper.github.io/blob/main/package.json) is my package.json for quick reference 

{{< admonition type=info title="Info" open=false >}}
Line 2 will allow you to change the output of the index file generation. You can change the path as you need.
{{< /admonition >}}
### 2. Edit `config.toml`
Make sure you enable search in your config.toml - if don't exist, go ahead and add at the end of the page.
```json
# Search config
  [params.search]
    enable = true
    # type of search engine ["lunr", "algolia"]
    type = "lunr"
```

and then add out-puts if not added already (must go into config.toml thats in root directory of the your project)
```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
  page = ["HTML"]
```
{{< admonition type=warning title="STOP" open=true >}}
make sure you add outputs to the `config.toml` file that exist at the root of your project.
{{< /admonition >}}
you can check my both config.toml file [here](https://github.com/lazydeveloper/lazydeveloper.github.io/tree/main)

### 3. Build the index
After step 1 and 2 you shall be able to build the site index. Go ahead and open the terminal and run the following command from your project root directory.

```
npm run index 
```

once you run this command, you will see the file `lunr.json` generated in `static` folder at the root of your project directory.

Now build your website. 
```
hugo
```
This will copy the `lunr.json` from `static` dir to the `public` dir of your project.

### 4. Edit `baseof.html`
Open `themes/<theme-name>/layouts/_default/baseof.html`(this path might be diff in your case, based on your theme) and add the following line before closing the head
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js"></script>
```


and at the end of the page, add the following script. this will fetch the data from `lurn.json` file that's generated in [step 3](#3-build-the-index)

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
{{< admonition type=warning title="STOP" open=true >}}
Code generated in this step 4 is by ChatGPT. It is advised to thoroughly check before using it yourself.
{{< /admonition >}}
### 5. Test the 'search'!
By following the above steps, you have successfully setup `lunr` on your webpage. You shall be able to search your website.
1. run the following to build the index `npm run index`
2. run `hugo` to build the website
3. start your server with `hugo server -D`

Now start your hugo server using the cmd `hugo server -D` and you shall be able to search your through your content. 

![shiva.dev](https://i.pinimg.com/736x/90/71/7f/90717fc83380e01fbc6124973aa84217.jpg)

{{< admonition type=tip title="TIP" open=true >}}
It is worth mentioning that every time you create a new post or updated an existing one, make sure perform [step 3](#3-build-the-index) (build index) to index the updated content for the search. 
{{< /admonition >}}

### Conclusion
I don't claim expertise in Hugo or Lunr. I integrated Lunr by researching various resources and credit those who explained it before me. I only take credit for detailing how I implemented Lunr search on my website. If you have any questions or suggestions, please post them [here](https://github.com/lazydeveloper/lazydeveloper.github.io/discussions/new/choose).
