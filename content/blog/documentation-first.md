+++
title = "The Documentation First Approach"
date = 2026-11-1
description = "A manifesto for building and maintaining computer systems"

[taxonomies]
tags = ["opinion", "programming"]
+++

# Documentation First

Credit where credit is due. I remember watching a YT short from Dave Eddy talking
about his philosophy of "The Documentation is Always Right." This is a
development of that core idea.

# First, What Documentation?

# Shouldn't Your Code Be Self-Documenting?

This sounds like such a simple, elegant solution, but it is misleading to the
max.

Short answer: YES! Your code should be self-documenting *in that* it should be
readable, clear, consistent, and straightforward. Variable, function, and
class/struct names should all clarify its purpose and method of operation.

But, here's the catch: No amount of adherence to the principle of
"self-documenting code" will leave a newbie with enough to go on. If you have
neglected adding comments because you believe that your code is clear enough


Here's the thing: code lies. Code lies because the person who wrote it was
mortal, with a feeble human brain. Code lies because the programmer who wrote it
believed the lie at the time of writing.

- A function that is subtlely wrong leads to trouble. Who's to say what's right?

As AI-generated code becomes more prevelant in our industry, this type of
lie is likely to explode in popularity.

And code is non-specific. If every function were named *just right* so that its
purpose and function were obvious and unambiguous, we wouldn't need comments.


# Proliferation of Javadoc comment boilerplate
Some folks come from shops where commenting everything was expected so the
CI/CD pipeline (if they were lucky) or a `make docs` command (if they were
less lucky) would generate a 2000s-style static HTML website that "documents"
every function, class, and constant in a module of code.

- I've used these rarely
- I agree, this is overkill:

```
/** A class that represents a complex number. */
class ComplexNumber
{
public:
    /** @brief Returns the real part of the complex number. */
    double getRealValue() const;

    /** @brief Returns the imaginary part of the complex number. */
    double getImaginaryValue() const;
};
```

I have to agree with the "Code should be self-documenting" folks here. Such
"documentation" comments:
1. Don't add any information, and
2. Clutter the source file

Their whole purpose seems to be to make the author feel better about their code
being "fully documented" or perhaps feeling better about the amount of code they
write in a given time period because their file *looks* impressively long, at
first glance, even though a significant chunk of that time was spent typing out
boiler plate.

## Don't Waste A Good Name
As you can see, this class and its methods do a great job of self-documenting.
Their names make their purpose and function **obvious** and **unambiguous**.
These are the hallmarks of good names for things. If a reasonbly-trained
programmer comes across your code without any context, how obvious will its
*purpose* **and** *function* be from just the name? If there are potential gaps
in understanding, fill them with a better name or with comments and other
documentation.

## Context Your Reader Has
How much context should you assume your reader has? This is a tricky question,
and to be frank, I haven't come to a good conclusion here yet.

### There Is Such a Thing As Too Little Context
One has only to remember a time reading one's own code and uttering, "Huh?" or
"WTF?" to know that assuming whoever reads your code needs some help getting
into the same headspace as the present author you is in. So there is certainly a
minimum amount of context required when writing through code.

### There Is Such a Thing As Too Much Context
On the other side of the spectrum , there is hypothetically such a thing as too
much explaining (though, admittedly, I have yet to see this done in practice.
The closest projects come to this are wildly popular, hobbyist-focused
projects, where you can sometimes find explanations for what SSH is, for
instance). At a certain point, too much documentation becomes a hinderance to
understanding. Technical fields universally produce shorthand for common
concepts because repetition becomes tedious for competent, experienced readers.

More than confusion, though, explaining too much in the weeds can be a signal to
the reader that a unit of documentation is not for them. If I open a book or
technical article on electronics and it begins with a refresher on Ohm's Law,
I'm more likely to discard said writing because the beginner-level topic is a
cue that I'm not going to learn much or anything from the rest.

Even if I were to skip past the first couple chapters of this hypothetical book,
does that leave me prone to skip important, new information with the old, basic
information? There is little a writer can do to control readers' actions, but
you can ensure your writing is skip-around friendly.

To do this, make sure your work has clear headings, subheadings, and
sub-subheadings. Don't leave tangentially-related tidbits buried in the text of
some paragraph if your heading indicates an advanced reader can skip that
section.

TODO: I could work on this.


Concepts to explore here:
- naming so that purpose and function is
    - obvious
    - unambiguous

- Comments must communicate intent and architecture. That is best done through
  prose.
