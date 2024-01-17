//the var generateBtn id calling to the button in HTML 
var generateBtn = document.querySelector("#generate");  

//this turns the srtings into arrays 
var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArray = includeUppercase.split('');

var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = includeLowercase.split('');

var includeNumber = "0123456789";
var numberArray = includeNumber.split('');

var includeSymbols = "!@#$%^&*()_+";
var symbolsArray = includeSymbols.split('');

//This function prints the password into the password holder
function writePassword() {
  // this is calling to the funtioon that will generate our password
  var password = generatePassword();
  // var passwordText is calling to the placeholder in the HTML.
  var passwordText = document.querySelector("#password");
  // now the placeholder text will be repllaced by the password that the user generates
  passwordText.value = password;
}


// Add event listener to generate button
function generatePassword() {
  //userArray is an empty array that will be filled as the user answers password prompts
  var userArray = [''];

  var password = '';
//we parseInt the charAmount so it changes the data typer for "#", to a #
  var charAmount = parseInt(window.prompt('Character requirement \nmin: 8 max: 128'));

  //if charAmount is less than 8 || greater than 128 || number is Not A Number
  if (charAmount < 8 || charAmount > 128 || Number.isNaN(charAmount)) {
    window.alert('Password did not meet length criteria or was not a number.')
    return '';
  }
 
  // this is asking if thewy would like to include uppercase
  var includeUppercase = window.confirm('Would you like to include uppercase?');

  if (includeUppercase === true) {
    //if true then the computer concats this into the userArray
    userArray = userArray.concat(uppercaseArray);
  }



  var includeLowercase = window.confirm('Would you like to include lowercase?');
  if (includeLowercase === true) {
    //If true the computer concats this with whatever is in the array
    userArray = userArray.concat(lowercaseArray)
  };
  

  var includeNumber = window.confirm('Would you like to include numbers?');
  if (includeNumber === true) {
    //the computer is concating this to whatever is held in the userArray 
    userArray = userArray.concat(numberArray)
  };
  


  var includeSymbols = window.confirm('Would you like to include symbolys?');
  if (includeSymbols === true) {
    //the computer is concating the symbols on to the userArray
    userArray = userArray.concat(symbolsArray)
  };

  if (includeLowercase === false && includeNumber === false && includeSymbols === false && includeUppercase === false) {
    //this is trouble shooting just incase the user chooses not to choose any characters
    window.alert('Please select one character type to make a password.')
    return '';
  };
  //this for loop is putting the users charAmount into action stopping when necissary 
  for (let i = 0; i < charAmount; i++) {
    // var index is randomizing characters that we have concated into the userArray
    var index = Math.floor(Math.random() * userArray.length); 
    //this keeps the loop of adding one character we concated in the userArray
    //until it hits the user chosen charAmount 
    password += userArray[index];       
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