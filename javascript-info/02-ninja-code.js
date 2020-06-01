console.log("hello test");

let len = 23;
let i = -22;
console.log(len + i);
console.log(Math.max(0, len + i));

// taken from a well-known javascript library
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

console.log("i is " + i);
