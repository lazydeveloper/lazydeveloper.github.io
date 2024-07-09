---
title: "Adding Password Protection To A Hugo Post"
description: "Adding Password Protection To A Hugo Post"
date: 2024-07-07T13:55:20-05:00
draft: false
tags: ["Hugo"]
categories: ["Development"]
---

In this post, I'll show you the simplest way to protect a Hugo page with a password by using front matter and adding a new parameter called "password." This allows you to set a unique password for each post. 

{{< admonition type=warning title="proceed with caution" open=true >}}
This method lacks complete security. Anyone with basic Hugo knowledge can access your repository and view the passwords. Therefore, it's advisable to avoid sharing sensitive information using this approach. For full password protection, consider using GitHub secrets or variables instead of passwords, though this topic is not covered in this post.
{{< /admonition >}}


{{< admonition type=success title="What this post cover" open=false >}}
1. Easy method to assign a password to any Hugo post (not 100% secured)
2. Users will be prompted to enter a password to access the post.
3. Unique password for each post
{{< /admonition >}}

Before we proceed, open the post [Top Secret](http://localhost:1313/posts/top_secret/) that is protection with a password. When prompted, enter the password `1234` to read the top secret. 

![password-protection](https://pouch.jumpshare.com/preview/GA_t8X7rJkwOSdsolhK4H7ND9kHBOgRq7g98Vcr_R62DovJUg6TLF0gQt5140AoHfJD7SLqCLZnupx2aUWWIM4A9dVtAxDj6JHloBdAvI18)

----
## 1. Add a new parameter, `password`
To give you a sense of what I mean by "Add a new parameter" take a look at the `password` parameter at the line [#9](https://github.com/lazydeveloper/lazydeveloper.github.io/blob/1477fa46fe7425899d15470398e4405f6c0cfb0a/content/posts/top_secret.md?plain=1#L8) in the code below.
```markdown
---
title: "Top Secret"
description: "Password to open the top secret: 1234 "
date: 2024-07-07T13:55:20-05:00
draft: false
tags: ["Hugo"]
categories: ["Development"]
hiddenFromHomePage: true
password: "1234"
---
```
Any value you input for the password parameter here (for example, 1234) will act as the password for accessing this post. So, include this new parameter in an existing or new post, as we'll proceed to implement the password protection logic in the following step.

----
## 2. Implementing logic for the password parameter

It's time to write the logic, Let's add a script to the default post layout. In my case its [single.html](https://github.com/lazydeveloper/lazydeveloper.github.io/blob/main/themes/LoveIt/layouts/posts/single.html) located at `themes/LoveIt/layouts/posts/`. The path or the file name may be different in your setup.

**Add the following code snippets to your layout file (single.html).**

01. Add this div at the starting of the article class. This will ensures that the content is hidden initially if a password is set.
    ```html
    <div id="content-container" {{- if .Params.password -}}style="display: none;"{{- end -}}>
    ```

02. Now add this code at the end of your layout file. The <script> handles the password prompt and reveals the content if the correct password is entered.
    ```html
    <script>
            window.onload = function() {
                var contentContainer = document.getElementById("content-container");
                if ("{{ .Params.password }}" !== "") {
                    var password = prompt("Enter password:");
                    if (password === "{{ .Params.password }}") {
                        contentContainer.style.display = "block";
                    } else {
                        alert("Incorrect password");
                    }
                } else {
                    contentContainer.style.display = "block";
                }
            };
        </script>
    ```
    Here my [single.html](https://github.com/lazydeveloper/lazydeveloper.github.io/blob/1477fa46fe7425899d15470398e4405f6c0cfb0a/themes/LoveIt/layouts/posts/single.html) file for quick reference. Look at the line#[21](https://github.com/lazydeveloper/lazydeveloper.github.io/blob/1477fa46fe7425899d15470398e4405f6c0cfb0a/themes/LoveIt/layouts/posts/single.html#L22) and line#[104 to 118](https://github.com/lazydeveloper/lazydeveloper.github.io/blob/1477fa46fe7425899d15470398e4405f6c0cfb0a/themes/LoveIt/layouts/posts/single.html#L104)


----
## 3. Testing the protection
Now that you know how to add a password parameter and the logic to check the password, you can create a new post with a password parameter or add the password parameter to an existing post. This method should work fine.

However, as previously discussed, this method is not 100% secure. At the time of writing this post, I'm not certain about replacing the password with a GitHub variable or secret, or using any similar mechanism to hide the password. If I manage to achieve this (fingers crossed), I will update this post accordingly.

Please share your opinions or any other suggestions by [commenting here](https://github.com/lazydeveloper/lazydeveloper.github.io/discussions/new/)








