---
title: String Template in Java 21
description: String Template is now available with Java 21 as a part of JEP430
date: 2024-05-22T13:55:20-05:00
draft: false
tags:
  - Java
  - JEP
  - String
  - Java21
categories:
  - Programming
---
### String Template
In the past, we relied on string concatenation to format output for print statements. 

`System.out.println(arr[i] + " " + "From for loop");`

Now this will change from Java 21 as String Template is here. String templates offer a more elegant approach by letting you embed expressions directly within the string. This improves readability and maintainability of your code.

### What is String Template?
String Template is a process of substituting values of variables into placeholders in a string. 

**Example 01 - using STR format**
```java
package dev.shiva.core.string;
public class StringTemplate {
    public static void main(String[] args) {
        String name = "Shiva";
        String email = "myemail@shiva.dev";

        System.out.println(STR."Hello, this is \{name} and my email address is \{email}");
    }
}
```

- **Focus on the placement of the `STR` template processor** within the string literal. It acts as a signal for the Java compiler to treat the following text as a template.
- **Notice the placeholders `{name}` and `{email}`** embedded within the string. These will be replaced with the actual values of corresponding variables during template processing.
- 
Here is the output: `Hello, this is Shiva and my email address is myemail@shiva.dev`

[Example program demonstrating String Template](https://github.com/SHlVA/java-bootcamp/blob/main/src/dev/shiva/core/string/StringTemplate.java)


### Advantages of String Templates:**
**Readability:** String templates improve code readability by embedding expressions directly within the string.
**Type Safety:** Expressions within templates are evaluated at runtime, ensuring type safety.
**Flexibility:** String templates can incorporate complex logic and expressions.

**Note:** Update your JDK 21 before trying string template.