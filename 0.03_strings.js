//Strings are a group of characters.
//Strings must go in quotes.

console.log("I'm not too hot at coding.");

var facebookStatus = "I'm so excited to finally have my certificate."

console.log(facebookStatus);
var login = 'claredanner';
console.log(login);

var password = "walking321"
var collegeCity = "Angola"
var collegeState = "Indiana"
var commaSpace = ", ";
console.log (collegeCity + commaSpace + collegeState);
console.log(collegeCity + "," + collegeState);

//Mixing Strings and Integers
var yearsTrineHasOperated = 133;
var university = "Trine University";
var graduatedFromCollege = 2019;

console.log (university + commaSpace + graduatedFromCollege)

console.log ("The number of years Trine has operated:", yearsTrineHasOperated);
console.log ("The 'number' of years Trine has operated:", yearsTrineHasOperated);
console.log ('The "number" of years Trine has operated: ', yearsTrineHasOperated);
console.log ("The \"number\" of years in Trine has operated:", yearsTrineHasOperated);

var privateCollege = "Trine University";

//String Methods (functions)
console.log(privateCollege.length);
console.log(privateCollege.toUpperCase());
console.log(privateCollege.toLowerCase());
console.log(privateCollege.split(" "));

console.log (privateCollege.slice(3))