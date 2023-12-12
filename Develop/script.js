// Assignment code here
var hasLower;
var hasUpper;
var hasNum;
var hasSpecial;



const numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerSet = ["a", "b", 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperSet = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const specialSet = [',', '.', '/', ';', "'", '=', '-', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '`', '~', "'", '{', '}'];

function getLength() {
  var passLen = window.prompt("Select a length between 8-128 Characters");
  return passLen
}

function getPassRules() {
  hasLower = window.confirm("Will it have lowercase letters?");
  hasUpper = window.confirm("Will it have uppercase letters?");
  hasNum = window.confirm("Will it have numbers?");
  hasSpecial = window.confirm("Will it have special characters?"
  );
}

function generatePassword() {
  var usableChars = [];
  var genPass = "";

  if (hasLower) {
    usableChars = [...usableChars, ...lowerSet]
  }
  if (hasUpper) {
    usableChars = [...usableChars, ...upperSet]
  }
  if (hasNum) {
    usableChars = [...usableChars, ...numberSet]
  }
  if (hasSpecial) {
    usableChars = [...usableChars, specialSet]
  }

  if (usableChars.length === 0) {
    alert("There are no characters to make your password");
  }
  else {
    for (var i = 0; i < passLen; i++) {
      let randomNum = Math.floor(Math.random() * usableChars.length);
      genPass += usableChars[randomNum];
    }
  }
  return genPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
