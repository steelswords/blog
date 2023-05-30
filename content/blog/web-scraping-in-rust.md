+++
title = "Web Scraping in Rust"
date = 2023-04-23
# updated = 2023-04-28
description = "I scraped Utah's MLS with Rust to find the commute time of different properties"

[taxonomies]
tags = ["rust", "showcase", "web technologies"]
+++

Link to Github: https://github.com/steelswords/mls-scraper

Recently, I have been on the hunt for a house. This has involved looking at a lot of entries on Utah’s MLS (Multiple Listing System). The MLS website has lots of useful information, including the price, number of beds and baths, square footage, and so on. It also has a link to the property on Google Maps.
This quaint city bungalow is perfect for those five-alarm chili parties where 11 guests need to use the bathroom at the same time.

As it turns out, our main criterion for picking a property, besides having a comfortable price and size, was the commute to my office. As my wife and I compiled a dataset of potential houses, it became tedious to manually look up the commute from each property. Futhermore, the address at the top is not selectable, so I can’t just copy it into a spreadsheet.

This seems like a job for…. a three-day project that saves me a total of 20 minutes!

The good news is this gives me a chance to try Rust. I’ve used Rust trivially before, but this is an opportunity to make something actually useful to me.
What Does it Do?

The program reaches out to an MLS listing and scrapes a few of the things that are harder to get, like the address, the MLS number, and most importantly, the commute time.

That’s right. I found a crate that lets me query the Google Maps API, so I automatically look up what the morning commute time is. I get directions for my work address with a departure time of 8:45 next Tuesday morning, as Tuesday is the least remarkable (and most representative) work day.

Here’s how it works:

cargo run 'https://www.utahrealestate.com/<mls number>'

And this is the output:

Days on URE: 135
Status: ACTIVE
MLS#: 1####4
Type: Single Family
Style: 2-Story
Year Built: 1939
Address: 2##########
Salt Lake City, UT 84103
Commute time: 42 mins
Time in traffic: 41 mins

Running this on the Go (Mobile)

Even though I use a super-portable ultrabook, I unfortunately don’t always have my laptop with me. Wouldn’t it be nice to run this on my phone? Thanks to the folks over at UserLAnd, this is possible! I just had to clone my repo and manually install a few things. I seem to remember having to install a couple of packages, like ca-certificates.
Potential Improvements

Before long, we were under contract for a house, so my internal need for this has dissipated. But if I were to make a more polished, fleshed-out version, it would look like this:

    Better commute estimation
        Evening commute
        Make sure we’re not estimating on a holiday
        Perhaps do a little iteration to find the optimal departure time
        Check for public transport options
    More customizability
        Configurable work address
        Output on terminal, and/or
        Output to a CSV to make spreadsheeting easier
    Clean up some warnings

But for now, I was just doing this project for fun and to save myself a little bit of aggravation. So maybe I’ll come back to it, but I think probably not in any serious capacity.
Thoughts on Rust

Rust is an interesting language. I find some parts really clean and snappy, like all the builtin functions. I like the safety feature, and I love that it’s efficient and can go toe-to-toe with C++. The main thing I don’t like is the steep learning curve. Rust works very differently from other languages I’ve used before, especially its borrowing system. (Die-hard Rustaceans will tell me that’s what’s so great about it.) That being said, for all my frustrations of trying to figure out why my closure expected a () but found a &str, I keep finding myself drawn to this language. There is something magical about this tricky language. I think my Rust journey is not over; it has just begun.

