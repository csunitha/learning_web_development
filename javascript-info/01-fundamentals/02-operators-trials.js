// examples tried on 26-May-2020

// example 1
let official_name = prompt("What is the “official” name of JavaScript?","");

if(official_name == "ECMAScript") {
  alert("Right");
} else {
  alert("Didn’t know? ECMAScript!");
}

// example 2
let guess = prompt("Enter a number");
if (guess > 0 ) {
  alert(1);
} else if (guess < 0) {
  alert (-1);
} else {
  alert(0);
}

//example 3
let result = ( (a + b) <4 ) ? "Below" : "Over";

//example 4
let message = login == "Employee" ? "Hello" :
                  login == "Director" ? "Greetings" :
                      login == "" ? "No login" :
                          "";


//example 4
let login = prompt("Enter your login id", "");
if (login == "Admin") {
  let password = prompt("Enter password");
  if (password == "Master") {
    alert ("Welcome");
  } else if (password == "" || password == null) {
    alert("Cancelled");
  } else {
    alert ("Wrong password");
  }
}
else if (login = "" || password == null )
  alert("Cancelled");
else  {
  alert("I don't know you");
}
