import cipher from './cipher.js';



const toEncript = document.getElementById("toEncript")
toEncript.addEventListener("click", (reset) => {
   reset.preventDefault()
   const text = document.getElementById("text").value.toUpperCase()
   const offset = Number(document.getElementById("offset").value)

   document.getElementById("reply").innerHTML = cipher.encode(offset, text);

})



const decrypt = document.getElementById("decrypt")
decrypt.addEventListener("click", (reset) => {
   reset.preventDefault()
   const textTwo = document.getElementById("textTwo").value.toUpperCase()
   const offsetTwo = Number(document.getElementById("offsetTwo").value)

   document.getElementById("replyTwo").innerHTML = cipher.decode(offsetTwo, textTwo);

})




