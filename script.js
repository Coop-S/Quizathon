// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My attempt at a prompt
// var passCrit = prompt('What city were you born in?', 'text')
// var typeOfCrit = prompt()
function generatePassword() {
  const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y',',z']
  const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const numbersArray = ['0','1','2','3','4','5','6','7','8','9']
  const specialCharactersArray = ['!','@','#','$','%','^','&','*','(',')']
  var passwordArray = []
  var lengthPass = prompt('How long do you want the password?(between 8 and 128 characters)')
  
  if (lengthPass < 8 || lengthPass > 128 || isNaN(lengthPass)){
    alert('needs to be a number between 8 and 128')
  }
  else {
  var lowercaseQuestion = confirm('Do you want to use lowercase characters?')
  var uppercaseQuestion = confirm('Do you want to use uppercase characters?')
  var numericQuestion = confirm('Do you want to use number characters?')
  var specialQuestion = confirm('Do you want to use special characters?')
  }
  if (lowercaseQuestion === true){
    console.log('lowercase letters accepted')
  }
  else {
    console.log('lowercase letters denied')
  }
  if (uppercaseQuestion === true){
    console.log('Uppercase letters accepted')
  }
  else {
    console.log('Uppercase letters denied')
  }
  if (numericQuestion === true){
    console.log('Numbers accepted')
  }
  else {
    console.log('Numbers denied')
  }
  if (specialQuestion === true){
    console.log('Special characters accepted')
  }
  else {
    console.log('Special characters denied')
  }

  if (lowercaseQuestion === false && uppercaseQuestion === false && numericQuestion === false && specialQuestion === false){
    alert('you need to pick one type of character')
  }
}
