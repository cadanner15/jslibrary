var emptyObject = {};
var name="Clare!";

var clareDanner = {
//Properties
name: "Clare Danner",
age: 20,
vocation: "Student",
hasGraduated: false,
//Methods
greeting: function(){
	console.log("Hello, I am" + this.name + "." + "I am" + this.vocation);
},

ageOf	:function(){
	console.log("Hello, I am " + this.name + "." + " I am " + this.age);
},

extendedGreeting	:function() {
	this.greeting();
	this.ageOf();
}

};

console.log("##################");
clareDanner.greeting();
console.log("##################");

console.log(clareDanner);
console.log(clareDanner.name);
console.log(clareDanner.age);
console.log(clareDanner.middleName);
console.log("--------");

var trineUniversity = {
	type: "college",
	location: "Angola",
	yearEstablished: 1884,
	closingSoon: false
};

console.log(trineUniversity.yearEstablished);
console.log(trineUniversity["yearEstablished"]);
trineUniversity.yearEstablished = 1884;
console.log(trineUniversity.yearEstablished);
console.log(trineUniversity.yearEstablished+50);
console.log(trineUniversity.yearEstablished);
trineUniversity.type="college";
console.log(trineUniversity.type);

console.log(trineUniversity.numberOfStudents);
trineUniversity.numberOfStudents="3000";
console.log(trineUniversity.numberOfStudents);
trineUniversity.color="white"
trineUniversity.bestCollegeEver =true;
console.log(trineUniversity.color);
console.log(trineUniversity.bestCollegeEver)

delete trineUniversity.bestCollegeEver

trineUniversity.majorsOffered = ["Engineering", "Education", "Psychology"];
console.log(trineUniversity.majorsOffered);
console.log(trineUniversity.majorsOffered[1]);

console.log(Object.keys(trineUniversity));

var friend = {
	name: "Benjamin Moricz",
	age: 21,
	vocation: "mechanical engineer",
	isTall: "false"
};

console.log(friend);
console.log(friend.name)
console.log(friend.age);
console.log(friend.vocation);
clareDanner.ageOf();

//Inheritance
var car = {
	make: "",
	model: "",
	year: 0,
	constructor: function(make,model,year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
};

var myCar = Object.create(car);
myCar.constructor("Jeep", "Liberty", 2004);
console.log(myCar.year);

//Shorthand way of inheritance
var book={
	title:"",
	yearPublished: 0,
	numOfPages: 0,
	constructor:function(title, yearPublished, numOfPages){
		this.title = title;
		this.yearPublished = yearPublished;
		this.numOfPages = numOfPages;
		return this;
	}
};

var myFavBook = new book.constructor("The Fault In Our Stars", 2012, 317)
console.log(myFavBook.title);

//Shorterhand version
function computer(screenSize, hardDriveSize, hasNumPad){
	this.screenSize = screenSize;
	this.hardDriveSize = hardDriveSize;
	this.hasNumPad = hasNumPad;

}

var myPC = new computer(17, "1TB", true)
console.log(myPC.screenSize);

//Objects are references 
//*************object***********
//				 ^car

var pcOne = new computer (12, "500GB", false);
var pcTwo = new computer (14, "2TB", true);
var pcThree = pcTwo;

pcTwo.screenSize = 15;

console.log(pcOne.hardDriveSize);
console.log(pcThree.screenSize)

