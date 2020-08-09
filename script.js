document.querySelector("#generate").addEventListener("click", writePassword);
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLength = "";

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to be?"));
      } 

      alert(`Password will have ${confirmLength} characters`);

    var confirmUpperCase = confirm("Would like to include uppercase characters?");    
    var confirmLowerCase = confirm("Would like to include lowercase characters?");
    var confirmSpecialCharacter = confirm("Would you like to include special characters?");
    var confirmNumericCharacter = confirm("Would like to include numeric characters?");

      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Would like to include special characters?");
        var confirmNumericCharacter = confirm("Would like to include numeric characters?");    
        var confirmLowerCase = confirm("Would like to include lowercase characters?");
        var confirmUpperCase = confirm("Would like to include uppercase characters?");   
    } 

      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}