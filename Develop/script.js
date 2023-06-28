// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Generate password based on user criteria
function generatePassword() {
  var passwordLength = getPasswordLength();
  var passwordCharacters = getPasswordCharacters();
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomIndex];
  }

  return password;
