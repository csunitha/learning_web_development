// https://stackoverflow.com/questions/62020200/how-to-write-if-else-condition-in-the-right-form

if(email.val() == "") {
  $("#error").html("<p>Email Cant be empty</p>");
  $("#error").show();
  setTimeout(function(){$("#error").fadeOut();}, 2000);
  email.focus();
} else  !validateEmail(email.val()) {
  $("#error").html("<p>Wrong email format</p>");
  $("#error").show();
  setTimeout(function(){$("#error").fadeOut();}, 2000);
  email.focus();
}

////Another solution by another user 

// separate messages values to avoid long texts in the nested if part
// and prevent them from being searched for in parts of code
//  where they can be scattered in several places, and possibly repeated

const errorMessage =
  { email_empty : '<p>Email Cant be empty</p>'
  , email_wrong : '<p>Wrong email format</p>'
  }

var messageError = ''
if(email.val()==='')                   { messageError = errorMessage.email_empty }
else if ( !validateEmail(email.val())) { messageError = errorMessage.email_wrong }

if (messageError) {
  $("#error").html(messageError)
  $("#error").show()
  setTimeout(function(){$("#error").fadeOut();}, 2000)
  email.focus()
}
