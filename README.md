# learning_web_development
## 19-Jul-2020:
  freecodecamp: completed Applied Accessibility lessons.  
  * high contrast text   
  * color contrast  
  * descriptive link text   
  * navigable keys using accesskey attribute 
  * tabindex    
      
  Responsive web design principles.   
  Responsive Web Design is an approach to designing web content that responds to the constraints of different devices.   
  * Media Query -> technique that change presentation of content based on viewport size.   
  * viewport -> viewport is user's visible area of web page.  

  @media to specify css based on definition.   
  making image responsive using max-width 100% and height auto.   
  retina image for higher resolution. (define width and height half of the original)  
  responsive typography using viewport units.  

  4 different view port units 
  * vw (viewport width)  
  * vh (viewport height)  
  * vmin (viewport min)   
  * vmax (viewport max)   

  completed responsive web design principles. 

## 18-Jul-2020: 
  freecodecamp: continuing Applied Accessibility lessons.  
  * figure, figcaption (see camper-cat.html)  
  * usage of for attribute in labels for text  
  * fieldset, legend for grouping buttons (see deep-thoughts.html)   
  * time, datetime (see date-time.html)   
  * screen reader only data using css (see screen-reader-only-css.html)   
    - display: none; or visibility: hidden; hides content for everyone, including screen reader users   
    - Zero values for pixel sizes, such as width: 0px; height: 0px; removes that element from the flow of your document, meaning screen readers will ignore it.   

## 12-Jul-2020:  
  freecodecamp: Continuing Applied Accessibility lessons. 

## 11-Jul-2020: 
  freecodecamp: continuing on animation properties.   
  animation properties -> animation-timing-function, with regular properties and using cubic-bezier.   
  Completed Applied Visual design.   
   
  Starting Applied Accessibility lessons.   
  * Text alternative for images
  * Hierarchial relationship of content - appropriate header tags.   
  * main, article, section, header, nav, footer    

## 10-Jul-2020:
  freecodecamp: more understanding on css offset - top, left (tried with creating a heart with rotating a square using transform and ::before and ::after with top and left offset)   
  
## 9-Jul-2020:
  freecodecamp: animate with variable rates at different % in keyframes, different duration. 

## 8-Jul-2020:
  freecodecamp: continuing the color theory. adjusting saturation, and lightness.  
  background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...)  
  background: repeating-linear-gradient()  
  background: url()   
  transform -> scale, move, rotate, skew, etc   
  box-shadow (can use this to create a cresent moon)   
  pseudo-elements -> ::before, ::after (to add something before or after a selected element)   
  Animation properties -> 8 animation properties, animation-name, animation-duration, animation-fill-mode, animation-iteration-count     
  @keyframes 
     

## 7-Jul-2020: 
  freecodecamp: continuing with section Applied Visual Design lessons.   
  few css syntax learned font-size, font-weight, line-height   
  usage of pseudo classes   
  introduction to css box model,  position (absolute, relative, fixed), css offset     
  pushing elements - left or right with float property   
  centering element with margin:auto   
  complementary color - reference on RGB additive color model and CMY model   
    * primary color = red, green, blue   
    * secondary color = mixing 2 primary color   
    * tertiary color = primary + one of the secondary color neighbour   
  hsl() - hue, saturation, lightness    
  html - semantic elements - header, nav, section, aside   

## 6-Jul-2020:
  Excited :) Created my first CSS work on my own. 02-yin-yang.html.
  freecodecamp: Starting section Applied Visual design lessons. completed 12 out of 52 lessons. 
  few css syntax learned text-tranform, box-shadow, text-align, opacity, z-index
  
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
