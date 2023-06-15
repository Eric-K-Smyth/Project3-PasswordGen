// Assignment Code
//Need Character limit, special characters, numbers, lowercase, upercase
//Make a function that asks for the function that is between 8 and 128 characters
//Make each character option boolean so if all are false it wont work since nothing was selected
//Instead of rock paper sissors elimination. Since we're generating it, start off empty and add values as theyre selected
//Take all possible characters and randomize them
//return output as a string or alert
var specialCharacters = [ '!', //Array of all special characters
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

var numericCharacters = ['0','1','2','3','4','5','6','7','8','9']; //array of numbers
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //array of lowercase letters
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //array of upercase letters

function getPasswordOptions() { //takes the input string and returns a number
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  if (Number.isNaN(length)){ //Makes sure the input is an actual number
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8) { //sets minimum password length
    alert('Password must be at least 8 characters');
    return null;
  }

  if (length > 128) { //sets maximum password length
    alert('Password must be less than 128 characters');
    return null;
  }

  var hasSpecialCharacters = confirm( //line 66 to 76 ask the user what type of characters they want in their password
    'Click OK to confirm including special characters.');

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.');
  
  var hasLowerCaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.');

  var hasUpperCaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.');

    if (
      hasSpecialCharacters === false && //returns the alert if no charcters are selected
      hasNumericCharacters === false &&
      hasLowerCaseCharacters === false &&
      hasUpperCaseCharacters === false 
    ) {
      alert(`At least one character type must be selected`);
      return null;
    }

    var passwordstorage = { //stores the user input options to be used in calculations
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCaseCharacters: hasLowerCaseCharacters,
      hasUpperCaseCharacters: hasUpperCaseCharacters,
    };
    return passwordstorage;
  }

function getRandom(arr){ //get a random number to pick a characters from the arrays of characters at the top of the code
  var randIndex = Math.floor(Math.random() * arr.length); //multiplies the random by the length of the array so it can pick any number within the chosen array, and rounds down so not to break by rounding to a character thats not included
  var randElement = arr[randIndex]; //stores the value as a variable
  return randElement; //returns the variable to use it again
}

function generatePassword() { //function to finally generate the password
  var options = getPasswordOptions(); //the function from making the boolean values with options
  var result = []; //array we will fill with final password
  var possibleCharacters = []; //array for possible characters
  var guaranteedCharacters = []; //array for guaranteed characters
  
  if (!options) return null; //returns null if all the values from the getpasswordoptions are false
  
  if (options.hasSpecialCharacters) { //if hasspecialcharacters is true, add the array to the array of possible characters
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters)); //adds a random character from the array to guaranteed characters
  }

  if (options.hasNumericCharacters) { //if hasnumericcharacters is true, add the array to the array of possible characters
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters)); //adds a random character from the array to guaranteed characters
  }

  if (options.hasLowerCaseCharacters) { //if hasLowercasecharacters is true, add the array to the array of possible characters
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters)); //adds a random character from the array to guaranteed characters
  }

  if (options.hasUpperCaseCharacters) { //if hasUppercasecharacters is true, add the array to the array of possible characters
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters)); //adds a random character from the array to guaranteed characters
  }

for (var i = 0; i < options.length; i++){ //Using the possiblecharacter array, which is all true arrays combined, it picks random characters using the whole array, but there is a chance it only picks from one array
  var possibleCharacter = getRandom(possibleCharacters);
  result.push(possibleCharacter);
}

for (var i = 0; i < guaranteedCharacters.length; i++) { //to fix it from the unlikely event of rolling random numbers to pick from 1 array, we take the guarenteed characters and replace the first charcaters in results with the guarenteed characters
  result[i] = guaranteedCharacters[i];
}
 return result.join(''); //returns the result as a string

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
