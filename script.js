const characters = ["A","B","C","D","E","F","G",
"H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
"6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const btn = document.getElementById('gen-btn');
const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');
const lessBtn = document.getElementById('lessBtn');
const moreBtn = document.getElementById('moreBtn');
const numInput = document.getElementById('num-input');
const message = document.getElementById('message');
//Password length
let passWordLength = 5;
//Events
btn.addEventListener("click",render);
moreBtn.addEventListener("click", addOne);
lessBtn.addEventListener("click",minusOne);
inputOne.addEventListener("click", copy);
inputOne.addEventListener("focusout", copy);
inputTwo.addEventListener("click", copy);
inputTwo.addEventListener("focusout", copy);

//Increment password
function addOne() {
 passWordLength++;
 numInput.value = passWordLength;
 if (passWordLength >= 12) {
      numInput.value = 12;
      passWordLength = 12;
   }
}
//Decrement password
function minusOne() {
   passWordLength--;
   numInput.value = passWordLength;
    if (passWordLength <= 5) {
 numInput.value = 5;
 passWordLength = 5
 }
}

//Generate password string
function pass() {
let index = characters[Math.floor(Math.random() * characters.length)]
return index
}
function generatePass() {
message.style.opacity = 0;
 let newPass = ''
 for (let i = 0; i < passWordLength;i++){
     newPass += pass()
}
    return newPass
}
function render() {
  message.style.opacity = 0;
   inputOne.value = "";
   inputTwo.value = "";
   inputOne.value = generatePass()
   inputTwo.value = generatePass()
}
function copy() {
if (this.value === "") {
  btn.style.backgroundColor = 'white';
  btn.style.color = '#10B981';
} 
else {
this.select();
navigator.clipboard.writeText(this.value);
  message.style.opacity = 1;
}
setTimeout(() => {
    inputOne.value = '';
    inputTwo.value = '';
    btn.style.backgroundColor = '#10B981';
    btn.style.color = 'white';
  }, 5000);

  setTimeout(() => {
    message.style.opacity = 0
  }, 3000)
}
