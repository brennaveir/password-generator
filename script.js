// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
var randomPassword = ""

//prompt user to input password length between 8-128 
 var desiredLength = window.prompt("Choose a password length from 8-128");
 if (desiredLength < 8 || desiredLength > 128) {
  alert("invalid input")
 }  
 else {
  //start for loop to loop through options?
 for (var i = 0; i < desiredLength; i++) {
 
//choose whether or not to include uppercase
var includeUpper = window.confirm("Include uppercase letters?")
if (includeUpper) {
includeUpper = Math.floor((Math.random() * 26) + 65);
//convert to letter in ascii table
includeUpper = String.fromCharCode(includeUpper);
return includeUpper;
}


//choose whether or not to include lowercase
var includeLower = window.confirm("Include lowercase letters?")
if (includeLower) {
includeLower = Math.floor((Math.random() * 26) + 97);
includeLower = String.fromCharCode(includeLower);
}

//choose whether or not to include special characters
var includeSymbol = window.confirm("Include symbols?")
if (includeSymbol) {
includeSymbol = Math.floor((Math.random() * 15) + 33);
var includeSymbol = String.fromCharCode(includeSymbol);
}

//choose whether or not to include numbers
var includeNumber = window.confirm("Include lowercase letters?")
if (includeNumber) {
includeNumber = Math.floor((Math.random() * 10) + 48);
var includeNumber = String.fromCharCode(includeNumber);
  }

//at least one character type must be chosen
   if (!includeUpper && !includeLower && !includeSymbol && !includeNumber) {
    window.alert("You must pick at least one criteria!");
   }
   
  }
}
return randomPassword;
}
  //  else if (includeUpper, includeLower, includeSymbol, includeNumber) {
  //   for (var i = 0; i < desiredLength; i++) {
  //   randomPassword = randomNumber.concat(randomSymbol, randomLower, randomUpper)
  //  }
  // }
  //  else if (!includeUpper, includeLower, includeSymbol, includeNumber) {
  //   randomPassword = randomNumber.concat(randomSymbol, randomLower)
   
   
  // } 
  //  return randomPassword;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);