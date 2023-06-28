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
}

// Get password length from user
function getPasswordLength() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length! Enter a number between 8 and 128:"));
  }

  return length;
}

// Get password characters based on user criteria
function getPasswordCharacters() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var passwordCharacters = "";

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Please select at least one character type.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // Add selected character types to passwordCharacters
  if (includeLowercase) {
    passwordCharacters += lowercaseChars;
  }

  if (includeUppercase) {
    passwordCharacters += uppercaseChars;
  }

  if (includeNumeric) {
    passwordCharacters += numericChars;
  }

  if (includeSpecial) {
    passwordCharacters += specialChars;
  }
  

  return passwordCharacters;
}