function tellStory() {
	
	//gathering form elements
	var txtBoy = document.getElementById("txtBoy");
	var txtGirl = document.getElementById("txtGirl");
	var txtGeol = document.getElementById("txtGeol");
	var txtVerb = document.getElementById("txtVerb");
	var txtContainer = document.getElementById("txtContainer");
	var txtLiquid = document.getElementById("txtLiquid");
	var txtBodyPart = document.getElementById("txtBodyPart");
	var txtIngVerb = document.getElementById("txtIngVerb");
	var output = document.getElementById("output");
	
	//get the data from form element 
	var boy = txtBoy.value; 
	var girl = txtGirl.value;
	var geol = txtGeol.value;
	var verb = txtVerb.value;
	var container = txtContainer.value;
	var liquid = txtLiquid.value;
	var bodyPart = txtBodyPart.value;
	var ingVerb = txtIngVerb.value; 
	
	
	//write the story
	var story = boy + " and " + girl + " went up the ";
	story += geol + " to " + verb + " a " + container ;
	story += " of " + liquid + ". </br> </br>";
	story += boy + " fell down and broke his " + bodyPart ;
	story += " and " + girl + " came " + ingVerb + " after.";
	
	
	//copy the story to output
	output.innerHTML = story;
	
}


