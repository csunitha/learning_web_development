let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert (`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert ( pow(x, n) );
}

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

//space between parameters - line 11
//No space between the function name and parentheses between the parentheses and the parameter - line 11
//Curly brace { on the same line, after a space - line 11
//A space  after for/if/while… - line 13, 17
//Spaces around operators - line 14
//A semicolon ; is mandatory
//Spaces around a nested call - line 8
