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

function generatePassword() {
  const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const numbersArray = ['0','1','2','3','4','5','6','7','8','9']
  const specialCharactersArray = ['!','@','#','$','%','^','&','*','(',')']
  var passwordArray = []
  var finalPass = []
  var lengthPass = prompt('How long do you want the password?(between 8 and 128 characters)')
  // Fisher Yates shuffle algorithm on StackOverflow
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }
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
    var iterator = lowercaseArray.values();
    for (let elements of iterator){
    
    for (i = 0; i < lengthPass; i++){
      passwordArray.push(elements)
    }
    }
  }

  if (uppercaseQuestion === true){
    var iterator = uppercaseArray.values();
    for (let elements of iterator){
    
    for (i = 0; i < lengthPass; i++){
      passwordArray.push(elements)
    }
    }
  }

  if (numericQuestion === true){
    var iterator = numbersArray.values();
    for (let elements of iterator){
    
    for (i = 0; i < lengthPass; i++){
      passwordArray.push(elements)
    }
    }
  }
  if (specialQuestion === true){
    var iterator = specialCharactersArray.values();
    for (let elements of iterator){
    
    for (i = 0; i < lengthPass; i++){
      passwordArray.push(elements)
    }
    }
  }
  if (lowercaseQuestion === false && uppercaseQuestion === false && numericQuestion === false && specialQuestion === false){
    alert('you need to pick one type of character')
  }

  shuffle(passwordArray) 
  for (i = 0; i < lengthPass; i++){
    finalPass.push(passwordArray[i])
  }
    
return finalPass.join('')
}
