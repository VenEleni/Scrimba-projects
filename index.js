const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let button = document.getElementById("button-El");
let firstPassword = document.getElementById("first-pass-El");
let secondPassword = document.getElementById("second-pass-El");
let randomIndex = "";
let passwordLengthInput = document.getElementById("password-length-input")
let passwordLength = passwordLengthInput.value;
let copyPassword = ""
let includeNumbers = false;
let includeSymbols = false;

console.log(document.getElementById("numbersCheckbox").checked)

function setPasswordLength() {
    passwordLength = passwordLengthInput.value;
}

function toggleNumbers() {
    if (document.getElementById("numbersCheckbox").checked) {
        includeNumbers = true;
    } else {
        includeNumbers = false;
    }
}

function toggleSymbols() {
    if (document.getElementById("symbolsCheckbox").checked) {
        includeSymbols = true;
    } else {
        includeSymbols = false;
    }
}

function generatePassword() {
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    for (let i = 0; i < passwordLength * 2 ; i++) {
        randomIndex = Math.floor(Math.random() * characters.length)
        if (i % 2 == 0) {
            firstPassword.textContent += characters[randomIndex];
        } else {
            secondPassword.textContent += characters[randomIndex];
        }
    }
}


function clickAndCopyFirstPassword(){
    copyPassword = document.getElementById("first-pass-El").textContent;
    console.log(copyPassword);
    navigator.clipboard.writeText(copyPassword)
}

function clickAndCopySecondPassword() {
     copyPassword = document.getElementById("second-pass-El").textContent;
    console.log(copyPassword);
    navigator.clipboard.writeText(copyPassword)
}