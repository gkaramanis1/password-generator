// Assignment code here
var passwordLength;
var hasUppercase;
var hasLowercase;
var hasSymbol;
var hasNumeric;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var lengthInput = window.prompt("Enter the length you want your password to be.");

if (lengthInput > 128 || lengthInput >= 1) {
window.alert("Accepted")
}
passwordLength = lengthInput;

var hasUppercase = window.prompt()


generatePassword();

}

function generatePassword() {
alert(passwordLength);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 