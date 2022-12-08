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
var includeUpper = window.confirm("Include uppercase letters?")
var includeLower = window.confirm("Include lowercase letters?")
var includeSymbol = window.confirm("Include symbols?")
var includeNumber = window.confirm("Include lowercase letters?")
}  

do  {
  //start for loop to loop through options?
 for (var i = 0; i < desiredLength; i++) {


//choose whether or not to include uppercase

if (includeUpper && randomPassword.length < desiredLength) {
includeUpper = Math.floor((Math.random() * 26) + 65);
//convert to letter in ascii table
includeUpper = String.fromCharCode(includeUpper);
randomPassword = randomPassword.concat(includeUpper)
}


//choose whether or not to include lowercase

if (includeLower && randomPassword.length < desiredLength) {
includeLower = Math.floor((Math.random() * 26) + 97);
includeLower = String.fromCharCode(includeLower);
randomPassword = randomPassword.concat(includeLower)
}

//choose whether or not to include special characters

if (includeSymbol && randomPassword.length < desiredLength) {
includeSymbol = Math.floor((Math.random() * 15) + 33);
var includeSymbol = String.fromCharCode(includeSymbol);
randomPassword = randomPassword.concat(includeSymbol)
}

//choose whether or not to include numbers

if (includeNumber && randomPassword.length < desiredLength) {
includeNumber = Math.floor((Math.random() * 10) + 48);
var includeNumber = String.fromCharCode(includeNumber);
randomPassword = randomPassword.concat(includeNumber)
  }
//at least one character type must be chosen
   if (!includeUpper && !includeLower && !includeSymbol && !includeNumber) {
    window.alert("You must pick at least one criteria!");
   }

  }
}while (randomPassword.length < desiredLength);
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