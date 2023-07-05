//  references the #generate element
var generateBtn = document.querySelector("#generate");

// function providing the prompts so user can select desired
//password criteria and displays the generated password in an
//alert and to the page.
function writePassword() {
  var length = getLength();
  var includeLowercase = confirm(
    "Would you like to include lowercase characters?"
  );
  var includeUppercase = confirm(
    "Would you like to include uppercase characters?"
  );
  var includeNumber = confirm("Would you like to include numberic characters?");
  var includeSpecialChar = confirm(
    "Would you like to include special characters?"
  );

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumber &&
    !includeSpecialChar
  ) {
    alert("You must select at least one character type");
    return;
  }
  var password = generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumber,
    includeSpecialChar
  );
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  alert("your generated password is: " + password);
}
// function allowing the user to enter a length with specific criteria
function getLength() {
  var length = NaN;
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Enter the password length (8-128):"));
  }
  return length;
}
// function that places all the criteria selected in a character pool
//and generates random characters at a random index until user
//defined length is met
function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumber,
  includeSpecialChar
) {
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "1234567890";
  var specialChar = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  var char = "";
  if (includeLowercase) char += lowerCaseChar;
  if (includeUppercase) char += upperCaseChar;
  if (includeNumber) char += numericChar;
  if (includeSpecialChar) char += specialChar;
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * char.length);
    password += char.charAt(randomIndex);
    console.log(password);
  }
  return password;
}

// Adds click event listener to the generate button
generateBtn.addEventListener("click", writePassword);
