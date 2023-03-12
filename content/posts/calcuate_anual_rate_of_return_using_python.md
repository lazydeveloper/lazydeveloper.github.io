---
title: "Calculate Anual Rate Of Return In Python"
description: "Calculate simple anual rate of return using python programming language"
date: 2023-03-04T13:55:20-05:00
draft: false
tags: ["Code Challenge", "Python", "Programming", "Loops"]
categories: ["Python", "Programming"]
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

Hey there! We're going to work on a challenge together where we'll be writing a program called invest.py. The goal of this program is to track the growing amount of an investment over time.

We'll start with an initial deposit, also known as the principal amount. Each year, this amount will increase by a fixed percentage called the annual rate of return.

For instance, if we start with a principal amount of $100 and an annual rate of return of 5%, the first year's increase will be $5. The second year, the increase will be 5% of the new amount, which is $105, resulting in an increase of $5.25.

To complete this challenge, we need to write a function called "invest" with three parameters: the principal amount, the annual rate of return, and the number of years to calculate.

The function should look something like this:

    `def invest(amount, rate, years):`

Once we've defined the function, we need to ensure it prints out the amount of the investment, rounded to 2 decimal places, at the end of each year for the specified number of years.

For example, if we call the function like this: `invest(100, .05, 4)`, it should print out the following:

```zhs
year 1: $105.00
year 2: $110.25
year 3: $115.76
year 4: $121.55
```

## Solution

### Doing with 'for' loop

```python
def invest(principal, rate, year):
    final_amount = principal
    for i in range(year):
        final_amount *= (1 + rate/100)
        print("Year {}: ${:,.2f}".format(i+1, final_amount))

invest(float(input("Enter Principal amount in $")), float(input("Enter the rate%")), int(input("And enter the number of years: ")))
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
invest(float(input("Enter Principal amount in $")), float(input("Enter the rate%")), int(input("And enter the number of years: ")))
```
