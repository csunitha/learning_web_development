/**
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

  let schedule = {};
  alert( isEmpty(schedule) ); // true
  schedule["8:30"] = "get up";
  alert( isEmpty(schedule) ); // false
**/

function isEmpty(schedule) {
  for(key in schedule) {
    return false;
  }
  return true;
}

let schedule = {};
console.log (isEmpty(schedule)); //this should return true
schedule["8:30"] = "get up";
console.log (isEmpty(schedule)); //this should return false
