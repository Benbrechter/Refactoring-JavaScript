
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//this is the funtion we call at the end of the 
//the questions asked to get the criteria

//this turns the srtings into arrays 
var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArray = includeUppercase.split('');

var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = includeLowercase.split('');

var includeNumber = "0123456789";
var numberArray = includeNumber.split('');

var includeSymbols = "!@#$%^&*()_+";
var symbolsArray = includeSymbols.split('');

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
function generatePassword() {
  var userArray = [''];
  var password = '';
  var charAmount = parseInt(window.prompt('Character requirement \nmin: 8 max: 128'));

  if (charAmount < 8 || charAmount > 128 || Number.isNaN(charAmount)) {
    window.alert('Password did not meet length criteria or was not a number.')
    return '';
  }
  //need to figure out how to take the user imput and apply it to charAmount


  var includeUppercase = window.confirm('Would you like to include uppercase?');

  if (includeUppercase === true) {

    userArray = userArray.concat(uppercaseArray);
  }



  var includeLowercase = window.confirm('Would you like to include lowercase?');
  if (includeLowercase === true) {
    userArray = userArray.concat(lowercaseArray)
  };
  //I probably need to insert a form of math

  var includeNumber = window.confirm('Would you like to include numbers?');
  if (includeNumber === true) {
    userArray = userArray.concat(numberArray)
  };
  //I probably need to insert a form of math


  var includeSymbols = window.confirm('Would you like to include symbolys?');
  if (includeSymbols === true) {
    userArray = userArray.concat(symbolsArray)
  };

  if (includeLowercase === false && includeNumber === false && includeSymbols === false && includeUppercase === false) {
    window.alert('Please select one character type to make a password.')
    return '';
  };

  for (let i = 0; i < charAmount; i++) {
    var index = Math.floor(Math.random() * userArray.length);  //the first pass through the loop gives 1 char
    password += userArray[index];               // this comes from += it builds until it hits the cap
  }
  return password;

};

generateBtn.addEventListener("click", writePassword)


//const length= 8;

//const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//const lowercase= "abcdefghijklmnopqrstuvwxyz";
//const number= "0123456789";
//const specialChar= "!@#$%^&*()_+";

//var index= Math.floor(Math.random() * charlength.length);
//var passwordLength = charlength[index];