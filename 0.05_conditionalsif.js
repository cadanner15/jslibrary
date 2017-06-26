var isHelpful = true;
var isExciting = true;

if(isHelpful){
	console.log("The progam is helpful");
}

if(isHelpful === true){
	console.log("The program is still helpful");
}

isHelpful = false;
isExciting = true;

if(isHelpful && isExciting){
	console.log("The program is helpful and it is exciting");
}

if(isHelpful || isExciting){
	console.log("I don't know how to feel");
}

if(!isHelpful){
	console.log("The program is not helpful");
}
