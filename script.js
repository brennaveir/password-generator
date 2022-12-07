// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
var randomPassword = ""

//prompt user to input password length between 8-128 
 var desiredLength = window.prompt("Choose a password length from 8-128");
 if (desiredLength < 8 || desiredLength > 128) {
  console.log("invalid input")
 }  
 else {
  randomPassword.length = desiredLength
 }
 
//choose whether or not to include uppercase
var includeUpper = window.confirm("Include uppercase letters?")
if (includeUpper) {
includeUpper = Math.floor((Math.random() * 26) + 65);
//convert to letter in ascii table
var randomUpper = String.fromCharCode(includeUpper)
}
else {
  //do not include uppercase
}

//choose whether or not to include lowercase
var includeLower = window.confirm("Include lowercase letters?")
if (includeLower) {
includeLower = Math.floor((Math.random() * 26) + 97);
var randomLower = String.fromCharCode(includeLower);
}
else {
  //do not include lowercase
}

//choose whether or not to include special characters
var includeSymbol = window.confirm("Include symbols?")
if (includeSymbol) {
includeSymbol = Math.floor((Math.random() * 15) + 33);
var randomSymbol = String.fromCharCode(includeSymbol);
}
else {
  //do not include symbols
}

//choose whether or not to include numbers
var includeNumber = window.confirm("Include lowercase letters?")
if (includeNumber) {
includeNumber = Math.floor((Math.random() * 10) + 48);
var randomNumber = String.fromCharCode(includeNumber);
}
else {
  //do not include numbers
}
//at least one character type must be chosen
   if (!includeUpper && !includeLower && !includeSymbol && !includeNumber) {
    window.alert("You must pick at least one criteria!");
   }
   else if (includeUpper, includeLower, includeSymbol, includeNumber) {
    for (var i = 0; i < desiredLength; i++) {
    randomPassword = randomNumber.concat(randomSymbol, randomLower, randomUpper)
   }
  }
   else if (!includeUpper, includeLower, includeSymbol, includeNumber) {
    randomPassword = randomNumber.concat(randomSymbol, randomLower)
   //fill in all combos
   
  } 
   return randomPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
