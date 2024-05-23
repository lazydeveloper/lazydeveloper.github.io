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
### The String Template
I still remember when writing print statements in Java, I managed to make the output
look more readable by appending text with the variable. Something like this

`System.out.println(arr[i] + " " + "From for loop");`

Now this will change from Java 21 as String Template is here.
[Example program demonstrating String Template](https://github.com/SHlVA/java-bootcamp/blob/main/src/dev/shiva/core/string/StringTemplate.java)


### What is String Template?
String Template is a process of substituting values of variables into placeholders in a string. 

**Example 01 - using STR format**
```java
String name= "Shiva";
String email = "myemail@shiva.dev"
System.out.println(STR."Hello, this is \{name} and my \{email} address is {email}")
```

1. Take a close look at the `STR` template process placement inside the string statment.
2. Followed by the variable name in place holder `{name}` and `{email}` placed along the string.
Here is the output: `Hello, this is Shiva and my email address is myemail@shiva.dev`

### Advantages of String Templates:**
**Readability:** String templates improve code readability by embedding expressions directly within the string.
**Type Safety:** Expressions within templates are evaluated at runtime, ensuring type safety.
**Flexibility:** String templates can incorporate complex logic and expressions.

**Note:** Update your JDK 21 before trying string template.