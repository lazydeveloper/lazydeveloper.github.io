---
title: "Calculate anual rate of return"
description: "Calculate simple anual rate of return using python programming language"
date: 2023-03-04T13:55:20-05:00
draft: false
tags: ["Python Programming"]
categories: ["Code Challenge"]
draft: false
# weight: 4
# lastmod: 2020-01-01T16:45:40+08:00
# author: "Dillon"
# authorLink: "https://shivas.blog"
# description: "This article shows the basic Markdown syntax and format."
# images: []
# resources:
#   - name: "featured-image"
#   src: "featured-image.png"
# lightgallery: true
---

## The Challenge
In this challenge, you will write a program called invest.py that tracks the growing amount of an investment over time.  

An initial deposit, called the principal amount, is made. Each year, the amount increases by a fixed percentage, called the annual rate of return.


For example, a principal amount of $100 with an annual rate of return of 5% increases the first
year by $5. The second year, the increase is 5% of the new amount $105, which is $5.25.


Write a function called invest with three parameters: the principal amount, the annual rate of return, and the number of years to calcu- late.

The function signature might look something like this:  
`def invest(amount, rate, years):`

The function then prints out the amount of the investment, rounded to 2 decimal places, at the end of each year for the specified number of years.  For example, calling invest(100, .05, 4) should print the following:

```zsh
year 1: $105.00
year 2: $110.25
year 3: $115.76
year 4: $121.55
```

## Solution

### Doing with 'for' loop
```python
def invest(principal, rate, year): #(100, 5, 4)
    final_amount = principal # ( final_amount = 100)
    for i in range(year):
        final_amount *= (1 + rate/100) # final_amount = 100 * ( 1 + 5/100)
        print("Year {}: ${:,.2f}".format(i+1, final_amount))

invest(float(input("Enter Principal amount in $")), 
float(input("Enter the rate %")), 
int(input("And enter the number of years: ")))
```

### Doing with 'while' loop
```python
def invest(principal, rate, years):
    final_amount = principal
    i = 1
    while i <= years:
        final_amount *= (1 + rate/100)
        print("Year {}: Final amount: ${:,.2f}".format(i, final_amount))
        i += 1
invest(float(input("Enter Principal amount in $")), 
float(input("Enter the rate %")), 
int(input("And enter the number of years: ")))
```