// Assignment Code
var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector("#password");


// functions to generate characters for four criteria

// lower case characters
function getRandomLowercaseCharacter() {
  var dictionary ="abcdefghijklmnopqrstvuwxyz";

  var randomNo  =   Math.floor( Math.random() * 26);   //   0 - 25, o->a, 1->b , 25-> z

  var randomCharacter = dictionary.charAt(randomNo);
  return randomCharacter;
}

// upper case characters
function getRandomUppercaseCharacter() {
  var dictionary ="ABCDEFGHIJKLMNOPQRSTVUVWXYZ";

  var randomNo  =   Math.floor( Math.random() * 26);   //   0 - 25, o->a, 1->b , 25-> z

  var randomCharacter = dictionary.charAt(randomNo);
  return randomCharacter;
}

// numbers
function getRandomNumeric() {
  var randomNo  =   Math.floor( Math.random() * 10);  
  return randomNo;
}

// special characters
function getRandomSpecialCharacter() {
  var dictionary ="_$@*|!";

  var randomNo  =   Math.floor( Math.random() * 6);  

  var randomCharacter = dictionary.charAt(randomNo);
  return randomCharacter;
}

//generate password
function generatePassword(length,lowercase,uppercase,numeric,specialCharacter) {
  var generatedPassword = "";

  var userChoices = [lowercase,uppercase,numeric,specialCharacter];

  var position =0;

  

  while(position < length) {
     // condition to check whether we have generated all characers or not
    var randomNo = Math.floor( Math.random() * 4);  // 0-3

    if(userChoices[randomNo]) {
      var nextCharacter = "";
      if(randomNo == 0) { // lowercase
        nextCharacter = getRandomLowercaseCharacter();
      } else if(randomNo == 1) { // uppercase
        nextCharacter = getRandomUppercaseCharacter();
      } else if(randomNo == 2) { // numeric
        nextCharacter = getRandomNumeric();
      } else if(randomNo == 3) { // specialCharacter
        nextCharacter = getRandomSpecialCharacter();
      }

      generatedPassword =generatedPassword + nextCharacter;
      
      position++;

    }
  }

  return generatedPassword;

}

// Write password to the #password input
function writePassword() {
  
  var length = 0;
  var userInputLength = prompt("Enter length between 8 to 128 characters");
  length = +userInputLength; // + converts string to a number


  if(length < 8 || length > 128) { // invalid condition
    alert("Invalid length entered. Try again");
    return; // halt this function, STOP
  }

  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var specialCharacter = false;

  lowercase = confirm("Do you want lower case characters? ");
  uppercase = confirm("Do you want upper case characters? ");
  numeric = confirm("Do you want numeric characters? ");
  specialCharacter = confirm("Do you want special characters? ");


  // user did not chose one of the options and therefore...
  if(!lowercase && !uppercase && !specialCharacter && !numeric) {
    alert("you have to select at least 1 character type. Try again");
    return; // halt this function
  }

  // here -> where everything is valid
  // alert("Everything is valid, let's go!");

  // Start generating the password

  var generatedPassword = generatePassword(length,lowercase,uppercase,numeric,specialCharacter);

  textArea.innerHTML=""+generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// as soon as u click generate button, writePassword function is called
