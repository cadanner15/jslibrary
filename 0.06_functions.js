function greetings(){
	console.log("greetings class");
}

greetings();

function printTwoNumbers(){
	console.log(2);
} 

printTwoNumbers();

console.log("--------");

function divider(){
	console.log("-------");
}

divider();

function add(){
	var x=3;
	var y=4;
	console.log(x+y)
}

function subtract(){
	var x=5;
	var y=2;
	console.log(x-y);
}

add();
subtract();

divider()

function numberInputted(x){
	console.log("Number inputted:", x);
}

numberInputted(8);

function addTwoNums(x, y){
	console.log(x+y);
}

addTwoNums(5, 4);

divider();

function feeling(){
	return "I'm feeling tired.";
}

console.log(feeling());
function multiply(x, y){
	return x*y;
}

console.log(multiply(3,4));

divider();

function fuseWords (firstWord, secondWord){
	return firstWord + " " + secondWord
}

console.log(fuseWords("Trine", "University"));

for(var i = 0; i<4;i++){
	divider();
}