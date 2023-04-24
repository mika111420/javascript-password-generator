// Assignment code here
var specialChar = ["?", "!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "=", "{", "[", "]", "|"]
var numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCaseOptions = ["q", "w", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var upperCaseOptions = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

var allOptions = specialChar.concat(numberOptions).concat(lowerCaseOptions).concat(upperCaseOptions);
console.log(allOptions)


var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var password = ""
  var passwordLength = prompt("what is the length of your password?");
  console.log(passwordLength)

  if (passwordLength < 8) {
    alert("Password length must be greater than 8")
    return "Please try again"
  }
  if (passwordLength > 128) {
    alert("Password length must be less than 128")
    return "Please try again"
  }
  var numberchecker = isNaN(passwordLength);
  if (numberchecker === true) {
    alert("Please pick a number")
    return "Please try again"
  }

  var askingSpecialChar = confirm("Do you want special characters in your password?");
  console.log(askingSpecialChar);
  if (askingSpecialChar) {
    password += getRandomValueFromArray(specialChar)
  }

  var askingNumberOptions = confirm("Do you want to include numbers in your password?");
  console.log(askingNumberOptions);
  if (askingNumberOptions) {
    password += getRandomValueFromArray(numberOptions)
  }

  var askingLowerCaseOptions = confirm("Do you want to include lower case letters in your password?");
  console.log(askingLowerCaseOptions);
  if (askingLowerCaseOptions) {
    password += getRandomValueFromArray(lowerCaseOptions)
  }

  var askingUpperCaseOptions = confirm("Do you want to include upper case letters in your password?");
  console.log(askingLowerCaseOptions);
  if (askingUpperCaseOptions) {
    password += getRandomValueFromArray(upperCaseOptions)
  }

  for (var i = 0; i < passwordLength; i++) {
    password += getRandomValueFromArray(allOptions)
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getRandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUpToMax = randomNumber * max
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);
}

function getRandomValueFromArray(array) {
  var randomArrayPosition = getRandomNumber(0, array.length);
  return array[randomArrayPosition];


}

generateBtn.addEventListener("click", writePassword);
