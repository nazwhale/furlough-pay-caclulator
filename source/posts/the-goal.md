---
title: The Goal
date: 2020-04-14T17:04:13.886Z
thumbnail: /images/uploads/7906A685-7049-4587-98D4-4414EC053B31.png
---
I’m furloughed till at least May 31st.

Between cooking and lazing around the house, I’ve set myself a goal of:

> *“Put something on the internet that gets some traffic”*

Despite working as a software engineer I’ve never had any significant amount of people using something I’ve built outside work. Surely there’s a bunch to be learned in building and managing a project that’s used by strangers.

What challenges do you bump into with the Domain Name System (DNS)? Search engine optimization (SEO)? Putting ads on your site? Making it work for both mobile and every browser under the sun? Getting feedback (both analytics and opinions from users)?

What other acronyms and weirdness haven’t I encountered yet?

Chatting to an also-furloughed pal, we pondered what might be the simplest fastest way we could achieve this.

# The Idea

Last week a spreadsheet was passed around work. You put your salary in and it told you how much per month you’d get if you were furloughed.

That way people could easily answer the question “could I afford to go on furlough?”.

What if we made that into a webpage so that anyone else facing furlough could easily figure out if it was financially viable for them?

Granted it’s not the sexiest project in the world. But the goal here is speed and traffic, not bling-bling.

# Challenges to the Idea

## How fast could we turn that spreadsheet into a webpage?

The logic in the spreadsheet is simple: Your “furlough pay” is 80% of your normal pay up to a limit of £2500 per month.

Though there are some edge cases to think about (e.g. part-time workers), it felt like we could easily build something basic that works for most people. Perhaps a static webpage with a little bit of javascript for the logic.

So hopefully pretty fast!

## Is this something people want?

Right now the UK is yet to reach the peak of coronavirus infections and lots of companies are deciding to put people on furlough. This is anecdotal, but I know enough people who’ve been furloughed in the last week to be confident in the assumption.

Presumably, lots of people right now are having to answer the question “could I afford to go on furlough?”.

According to Google Trends, interest in the word “furlough” is rocketing.

It seems like if there was ever a time to make a furlough calculator, it’s now.

## Is there already something good out there?

After a bit of searching, we found a bunch of furlough calculators.

They all had pretty confusing designs. They were hard to navigate and often displayed way too much information.

Some gave you the option of entering your tax code, national insurance group, student loan, and pension deductions. Some just showed your raw pay before any tax came out. One deducted the wrong amount of tax.

Perhaps the amount of furlough calculators out there indicates demand but no-ones nailed it yet.

Could be worth a crack!

# Let’s Go

We logged on to Google Domains and found [https://furloughpaycalculator.co.uk/](https://furloughpaycalculator.co.uk/) for £10.

On the to-do list was:

1. Design and build the simplest possible thing that does the job

2. Deploy it to the web

3. Figure out how to link it to our [shiny new domain](https://furloughpaycalculator.co.uk/)

4. Get feedback from users

5. Iterate

---

Stay tuned for [Part 2](https://medium.com/@nazwhale/making-a-website-that-gets-some-traffic-ab8f8b012d16) to see some questionable designs.
