---
title: How Javascript Works -  Thread of execution and Memory
date: 2020-03-25
---
*This is the first post in a series titled "How Javascript Works".*

## Thread of execution and memory:

The *thread of execution* describes how the javascript engine walks through the code. The context in which the code runs is called the *execution context*. An Execution context consist of two parts:

1. *Memory* for keeping track of label, value pairs.
2. Executing the code.

Javascript application begin in the global *execution context*. As functions are executed, a brand new *execution context* is created. This execution context is inside the one from which it was called. For now 

![alt text](/myFullName.png "myFullName code block")

## Thread of execution example:

Global execution context

---

### Line 1
Save a new constant in global *memory* with the label `myFirstName` which references the value `'Travers'`

### Line 2
Save a new constant in global *memory* with the label `myLastName` which references the value `'Pinkerton'`

### Line 4
Save a new function in global *memory* with the label `fullName` which refrences the function value (including the parameters and function body)

### Line 9

(Breaking Line 9 into two parts: Left Hand Side of the equal sign, and right Hand Side of the equal sign)

**Left Hand Side**: Save a new constant in global *memory* with the label`myFullName` in global *memory*

**Right Hand Side**:

Look for `constructFullName` in the current *execution context* (in this case global) and we find `constructFullName` references a function

As indicated by the ( ... ) after `constructFullName`, call the function (which `constructFullName` references) which creates a *execution context*

Lookup `myFirstName` in the current *execution context*, where we find it references the value `'Travers'`

Lookup `myLastName` in the current *execution context*, where we find it references the value `'Pinkerton'`

Execute `constructFullName('Travers', 'Pinkerton')`

Create and enter into *execution context* for evaluation of `constructFullName('Travers', 'Pinkerton')`

`constructFullName('Travers', 'Pinkerton')` *execution context*

---


`firstName` *parameter*: Save in this *execution context* *memory*, the label `firstName` which references the *argument* `'Travers'`

`lastName` *parameter*: Save in this *execution context* *memory*, the label`lastName`which references the *argument*`'Pinkerton'`

Line 5:

Left Hand Side: Save a new constant with the label `fullName`

Right Hand Side: result of `myFirstName + ' ' + myLastName`

Lookup `firstName` in the current *execution context*, find references to value `Travers`

Lookup `lastName` in the current *execution context*, find references to value `Pinkerton`

Right Hand Side evaluates to 'Travers Pinkerton'

result of line 5 is a constant in the current *execution context* with label `fullName` and value `'Travers Pinkerton'`

Line 6: lookup `fullName` in the current *execution context*, find `fullName` which references `'Travers Pinkerton'`

**return** the value `'Travers Pinkerton'` out of the current *execution context*

---

the constant `myFullName` in global *memory* references the returned value `'Travers Pinkerton'`

---

Something to note is that when the `'Travers Pinkerton'` is returned out of the result of the function call `constructFullName( ... )`, the *execution context* that was created is gone along with its *memory* including `fullName : 'Travers Pinkerton'`
