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

    if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCaseCharacters === false &&
      hasUpperCaseCharacters === false 
    ) {
      alert(`At least one character type must be selected`);
      return null;
    }

    var passwordstorage = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCaseCharacters: hasLowerCaseCharacters,
      hasUpperCaseCharacters: hasUpperCaseCharacters,
    };
    return passwordstorage;
  }

function getRandom(arr){
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (!options) return null;


  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters));
  }

for (var i = 0; i < options.length; i++){
  var possibleCharacter = getRandom(possibleCharacters);
  result.push(possibleCharacter);
}

for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}
 return result.join('');

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
