// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
var randomPassword = ""
//prompt user to input password length between 8-128 
 var desiredLength = window.prompt("Choose a password length from 8-128");
 if (desiredLength < 8 || desiredLength > 128) {
  return "Please choose valid number between 8 and 128!";
 }  
else {
  //prompt user to choose criteria
var includeUpper = window.confirm("Include uppercase letters?")
var includeLower = window.confirm("Include lowercase letters?")
var includeSymbol = window.confirm("Include symbols?")
var includeNumber = window.confirm("Include numbers?")
}  


  //start for loop to loop through options?
 for (var i = 0; i < desiredLength; i++) {


//if uppercase is chosen, generate random uppercase letter

if (includeUpper && randomPassword.length < desiredLength) {
  //choose a random number between 1 and 26 and add 65 to get uppercase letter numbers in ascii
includeUpper = Math.floor((Math.random() * 26) + 65);
//convert to letter in ascii table
includeUpper = String.fromCharCode(includeUpper);
//add random uppercase letter to randomPassword
randomPassword = randomPassword.concat(includeUpper)
}


//if lowercase is chosen, generate random lowercase letter

if (includeLower && randomPassword.length < desiredLength) {
includeLower = Math.floor((Math.random() * 26) + 97);

includeLower = String.fromCharCode(includeLower);
randomPassword = randomPassword.concat(includeLower)
}

//if uppercase is chosen, generate random symbol

if (includeSymbol && randomPassword.length < desiredLength) {
includeSymbol = Math.floor((Math.random() * 15) + 33);
var includeSymbol = String.fromCharCode(includeSymbol);
randomPassword = randomPassword.concat(includeSymbol)
}

//if uppercase is chosen, generate random number

if (includeNumber && randomPassword.length < desiredLength) {
includeNumber = Math.floor((Math.random() * 10) + 48);
var includeNumber = String.fromCharCode(includeNumber);
randomPassword = randomPassword.concat(includeNumber)
  }
//at least one character type must be chosen
   if (!includeUpper && !includeLower && !includeSymbol && !includeNumber) {
     return "You must pick at least one criteria!";
   }
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