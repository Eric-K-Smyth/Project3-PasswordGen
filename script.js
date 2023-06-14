// Assignment Code
//Need Character limit, special characters, numbers, lowercase, upercase
var specialCharacters = [ '!',
'"',
'#',
'$',
'%',
'&',
'(',
')',
'*',
'+',
',',
'-',
'.',
'/',
':',
';',
'<',
'=',
'>',
'?',
'@',
'[',
'\\',
']',
'^',
'_',
'`',
'{',
'|',
'}',
'~',
];

var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  if (Number.isNaN(length)){
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8) {
    alert('Password must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password must be less than 128 characters');
    return null;
  }

  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.');

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.');
  
  var hasLowerCaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.');

  var hasUpperCaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.');
}





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
