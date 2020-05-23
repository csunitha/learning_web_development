var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper"; 
} else {
    computerChoice = "scissors";
}
  var compare = function(choice1, choice2) {
      if(choice1 === choice2) {
          alert( "It's a tie.");
      }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            alert("You lose")
    }
      if (choice2 === "paper") {
          alert("you win")
     }

 }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            alert("You Win.")
        }
        if (choice2 === "scissors") {
            alert("You lose.")
        }
  }
  //initial issue with the code was choice for rock was not their - this is now fixed. 
    if (choice1 ==="rock") {
        if (choice2 === "scissors"){
            alert("You win.")
        }
        if (choice2 === "paper") {
            alert("You lose.")
        }
    }
  }
  compare(userChoice,computerChoice);