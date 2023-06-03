+++
title = "CPSL Compiler"
date = 2022-06-12
description = "I built a compiler for a Pascal-like language called CPSL"

[taxonomies]
tags = ["showcase", "project"]
+++
# Building a Compiler

During my undergrad degree, I took a wonderful class called Compiler Construction. It had a reputation among the computer science students of being the hardest class their department offered. It was so much fun!

The first day of the class, the professor stressed to us the amount of work this compiler would take. He said not to procrastinate because we couldn’t physically type the amount of code required in less than four weeks or so. He was more or less right about that. Not to worry though, I got started as soon as I could.

The class was very interesting. We talked about parsing, regular expressions, and abstract syntax trees, among other topics.

The ultimate end of the class, and the only graded assignment, was a compiler for a language called CPSL, which is structured very similarly to Pascal. We were given a language specification and a bunch of example programs written in CPSL.

Our assignment simplified the modern compiler frontend/backend design into one frontend program that took CPSL and compiled it into MIPS assembly. This necessitated using a MIPS simulator to actually run any of the programs compiled from CPSL.

Originally, the assignment was to incorporate writing functions in CPSL, but due to COVID disruptions, the requirements were scaled back so that compiling functions resulted in extra credit.

You can find the code for [my compiler on Github](https://github.com/steelswords/compilers).

