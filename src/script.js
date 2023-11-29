const passwordBox = document.getElementById("password");
const length = 12;
const genBtn = document.getElementById("genBtn");
const copyelement = document.getElementById("copy");


const upperCase = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols ="!@#$%^&*){}[]|\/?<>"; 

const allChars = upperCase + lowerCase+numbers+symbols;


function createPassword(params) {
    let password = "";
    password = password+upperCase[Math.floor(Math.random()*upperCase.length)];
    password = password+lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password = password+numbers[Math.floor(Math.random()*numbers.length)];
    password = password+symbols[Math.floor(Math.random()*symbols.length)];
   while(length>password.length){
    password = password+allChars[Math.floor(Math.random()*allChars.length)];
   }

   passwordBox.value = password;

}


genBtn.addEventListener("click",()=>{
    createPassword();
})


function copyPassword(params) {
    passwordBox.ariaSelected();
    document.execCommand("copy");
}

copyelement.addEventListener("click",()=>{
    copyPassword();
})