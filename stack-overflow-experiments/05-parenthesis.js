
/*
I've written a function that takes a string containing parentheses,
loops through the string and counts the number of open and closed parentheses using a for loop.
A while loop is then supposed to loop over the string while the number of open parentheses is
greater than the number of closed parentheses and append a closed parenthesis to the string.
My example code :

input let string = '((( )';
closeThoseParens(string)
 */

function buttonclicked() {
    let txtelement1  = document.getElementById("txtParen");
    let txtvalue = txtelement1.value;
    let result = closeThoseParens(txtvalue);
    txtelement1.value = result;
}
function closeThoseParens(string) {
    let openTicker = 0;
    let closedTicker=0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            openTicker++;
            console.log(openTicker);
        } else if (string[i] === ')') {
            closedTicker++;
        }
    }

    while (openTicker > closedTicker){
        string += ")"
        closedTicker++;
        console.log(closedTicker);
    }
    return string;
}