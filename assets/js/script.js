
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

var window = window || {};
var document = document || {};

function generatePassword() {
    var length = Number(window.prompt("How many characters should be included in your password? Must be between 8 and 28 :")) 
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a number between 8 and 128.");
      return;
    }

      var includeLowercase = window.confirm("Would you like to include lowercase letters? (OK = Yes, Cancel = No)");
      var includeUppercase = window.confirm("Would you like to include uppercase letters?" + "\n" + "(OK = Yes, Cancel = No)");
      var includeNumbers = window.confirm("Would you like to include numbers?" + "\n" + "(OK = Yes, Cancel = No)");
      var includeSpecial = window.confirm("Would you like to include special characters?" + "\n" + "(OK = Yes, Cancel = No)");

      var possibleCharacters = "";
          if (includeLowercase) possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
          if (includeUppercase) possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          if (includeNumbers) possibleCharacters += "0123456789";
          if (includeSpecial) possibleCharacters += "!@#$%^&*()";

      var password = "";
      for (var i = 0; i < length; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      } 

      if (!validatePasswordContent(password, includeLowercase, includeUppercase, includeNumbers, includeSpecial)) {
        return generatePassword();
      }
      return password;
    }


    function validatePasswordContent(password, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
      var hasLowercase = /[a-z]/.test(password);
      var hasUppercase = /[A-Z]/.test(password);
      var hasNumbers = /[0-9]/.test(password);
      var hasSpecial = /[!@#$%^&*()]/.test(password);
    
      if  (!hasLowercase || !hasUppercase || !hasNumbers || !hasSpecial) {
        alert("You must select at least one of each character type.");
        return false;
      }
      return true;
    }
    
    


  
function writePassword() {
var password = generatePassword();
if (typeof password === 'string') {
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
  }




 

