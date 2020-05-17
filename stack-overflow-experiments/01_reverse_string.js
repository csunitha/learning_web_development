
function callBothMethods() {
	var txtString = document.getElementById("txtString");
	var txtValue = txtString.value;
	var output1 = document.getElementById("output1");
	var output2 = document.getElementById("output2");
	
	
	var reversedValue = reverseString1(txtValue);
	output1.innerHTML = reversedValue;
	reversedValue = reverseString2(txtValue);
	output2.innerHTML = reversedValue;
	
}

function reverseString1(s) {
  try{
    s = s.split("").reverse().join("");
	return s;
  }   
  catch(e){
      console.log(e.message);
  }
  finally {
      console.log(s);
  }
}

function reverseString2(s){
  try{
	  val = s.split("").reverse().join("");
      console.log(val);
	  return val;
  }
  catch(e){
      console.log(e.message)
      console.log(s);
  }
}