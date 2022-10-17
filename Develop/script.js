// Assignment code here
// Stated variables
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "<", "=", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var selectLength = "";
var selectSpecialCharacter;
var selectNumericCharacter;
var selectUpperCase;
var selectLowerCase;

// This is a prompt that asks the user what the length of the password should be
function generatePassword() {
  var selectLength = (prompt("How many characters would you like your password to be?"));
  
  // This will return null if the user hits 'Cancel'
  if (selectLength === null) { return null; }

  // This will make the user input a length that is accepted in the password criteria
  while(selectLength <= 7 || selectLength >= 127) {
      alert("The paassword has to be between 8-128 characters");
      var selectLength = (prompt("How many characters would you like your password to be?"));
  } 

  // This will confirm with the user how many characters their password will be 
  alert("Your password will have " + selectLength + " characters");

    // This will select the password criteria that the user wants depending on if they click OK or cancel
  var selectSpecialCharacter = confirm("Select OK if you want to include special characters");
  var selectNumericCharacter = confirm("Select OK if you want to include numeric characters");    
  var selectLowerCase = confirm("Select OK if you want to include lowercase characters");
  var selectUpperCase = confirm("Select OK if you want to include uppercase characters");
  
    // This will make sure that at least one of the password criteria are selected. If not, it will ask the criteria again so the user can choose 
  while(selectUpperCase === false && selectLowerCase === false && selectSpecialCharacter === false && selectNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var selectSpecialCharacter = confirm("Select OK if you want to include special characters");
    var selectNumericCharacter = confirm("Select OK if you want to include numeric characters");    
    var selectLowerCase = confirm("Select OK if you want to include lowercase characters");
    var selectUpperCase = confirm("Select OK if you want to include uppercase characters");   
  } 

  // This will confirm the password criteria selected by user
  var passwordCharacters = []
    
  if (selectSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (selectNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }
    
  if (selectLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }

  if (selectUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }

  // This will generate the random password based on the criteria selected
  var randomPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if (password === null) { return; }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);