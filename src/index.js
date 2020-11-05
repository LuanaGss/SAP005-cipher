import cipher from './cipher.js';


// botão criptografar ok
   const toEncript = document.getElementById("toEncript")
   toEncript.addEventListener("click", cipher.encode) 


// botão descriptografar ok   
   const decrypt = document.getElementById("decrypt")
   decrypt.addEventListener("click", cipher.decode) 



