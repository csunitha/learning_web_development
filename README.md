# learning_web_development
## 6-Jul-2020:
  Excited :) Created my first CSS work on my own. 02-yin-yang.html.
  freecodecamp: Starting section Applied Visual design lessons. completed 12 out of 52 lessons. 
  few css syntax learned text-tranform, box-shadow, text-align, opacity
  
## 5-Jul-2020:
  CSS craze gone into my head - seeing yesterday's penguin-css.
  So created new folder my-css-works. Based on an article A Beginner's guide to Pure CSS Images by Mike Mangialardi, starting on css drawing.  
  z-index, clip-path, (--webkit-clip-path for safari)
  reference: https://medium.com/coding-artist/a-beginners-guide-to-pure-css-images-ef9a5d069dd2&usg=AOvVaw0C1rrx4qjGH5f0vvt3So_3

## 4-Jul-2020:
  freecodecamp: Basic CSS lessons completed. element-design.html, penguin-css.html, penguin-css-animation.html
  
## 3-Jul-2020:
  freecodecamp: Bascic CSS lessons in progress. build cat photo app

## 2-Jul-2020:
  freecodecamp: Basic HTML lessons completed
  Data types: 
  Primitives
  Numbers - 1e9, Hex -> 0x, Binary -> 0b, Octal -> 0o
       num.toString(base) 
        eg num.toString(2) to binary
           num.toString(16) to hex
      two dots to call a method 
        eg 12345..toString() 
  String - use of backticks ``
    .length property
    accessing specific char str[0] or str.charAt(0) 
    .toUpperCase(), .toLowerCase()
    .indexOf(), .lastIndexOf()
    .includes(), .startsWith(), .endsWith()
    getting Substring -> .slice(start [, end])  -> most preferred
                         .substring(start [, end]) -> this does not support negative
                         .substr(start [, length])
    .localeCompare()
    .trim(), .repeat()

  
## 20-Jun-2020:
  Symbols.  let id = Symbol(); or let id = Symbol("id");
  Objects - keys can be string or symbol.
  Global symbol registry.  Symbol.for("key"). Symbol.keyFor("sym")
  System Symbols.

  Object to Primitive conversions.  (complex one! - need to read more)
  Three variants of type conversion, so called hints - string, number, default.
  Symbol.toPrimitive, toString, valueOf

  The conversion algorithm is:
    1. Call obj[Symbol.toPrimitive](hint) if the method exists,
    2. Otherwise if hint is "string"
        try obj.toString() and obj.valueOf(), whatever exists.
    3. Otherwise if hint is "number" or "default"
        try obj.valueOf() and obj.toString(), whatever exists.


## 14-Jun-2020:
  Objects: Constructor function. They are technically regular functions. There are 2 conventions though - named with capital letter first, executed only with new operator. Main purpose of Constructor is to implement reusable object creation code.
  new.target special property - to check if function was called with new or not.

## 13-Jun-2020:
  Objects: Objects copied by reference.
  - cloning (Shallow copy) -> Object.assign(dest, src1, src2..)
     let clonedObj = Object.assign({}, user)
  - nested cloning or deep cloning. There’s a standard algorithm for deep cloning that handles the case above and more complex cases, called the Structured cloning algorithm. We can use recursion to implement deep cloning. Or take an existing implementation cloneDeep(obj) from Javascript library lodash.

  Garbage collection: Happens automatically. Main concept of memory management in JS is reachability.
  “Reachable” values are those that are accessible or usable somehow.
  Background process in JavaScript engine called Garbage collector.
  Basic garbage collection algorithm is mark-and-sweep.  
  Few other terms - roots, unreachable island.  

  Usage of methods in objects, this. In unit test, usage of stub (ref 03-objects-methods.html)
  chaining

## 6-Jun-2020:
  BDD - revision - before(), after(), beforeEach(), afterEach(), it.only(), Nested describe
  Objects: {} or new Object()

## 1-Jun-2020:
  Arrow functions
  Developer tools - "debugger"  in code. enable/disable automatic pause in case of an error in dev tool.
  Coding style - backtick quotes for multi lines ``
  Style guides
  Automated linters - Linters are tools that can automatically check the style of your code and make improving suggestions.
  Comments (good and bad comments)
  BDD, Mocha, chai
  installed node.js

## 31-May-2020:
  reference: javascript.info
  Functions, function Declaration vs function Expression, callbacks

## 30-May-2020:
  reference: javascript.info
  loops - for / while / do-while (04-few-more-trials.html)
  switch conditions (06-switch-conditions.html)

## 26-May-2020:
  alert, prompt, confirm (06-switch-conditions.html)
  Operators (conditional -> if, ? ) (04-few-more-trials.html)
            (logical || && !)
  Nullish coalescing operator '??' -> recent addition to language.
  labels in loop (03-label-in-loops.html)

## 25-May-2020:
  8 basic datatypes - string, number, bigint, boolean, object, undefined, null, symbol
  Operator facts:
    Anything added with string + becomes string. for other operator, it gets converted to number.
    unary operator - if operand not a number, this makes it number e.g +true => 1
    modify assign operator -> += , -=, /=, etc
    postfix and prefix operator ++ --
    strict equality opertor === strict non equality operator !==

## 23-May-2020:
  HTML5 Simple Game Programming Preparation.
    Completed Udemy course: HTML5 Simple Game Programming Preparation.
    Downloaded simpleGame.js and tried redball, car game.
    Also has downloaded the simpleGamePractice.html which will generate code for games.
    Also the reference folder has documentation for simpleGame.js -> documentation.html
  HeadFirst - HTML5
    This week completed chapter 3 for event handling. Saves the song.
    And also got introduced to
      - localstorage setItem and getItem.
      - JSON parse and stringify.  
