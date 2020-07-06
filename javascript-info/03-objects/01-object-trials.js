let user = {
  name : "nandeska",
  age : 45,
  "likes sports" : true
};

console.log(user.name);
console.log(user["name"]);

user.age = 55;
delete user.age;

//muli word propert cannot be referred using dot.
user["likes sports"] = false;

delete user["likes sports"];
