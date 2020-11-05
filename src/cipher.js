const cipher = {
    encode:function () {
 
    
    let text = document.getElementById("text").value.toUpperCase() //uma var. para guardar minha mensagem e deixar as letras maiúsculas
    let offset = Number(document.getElementById("offset").value) //uma var. offset number para meu deslocamento.
    let result = ""; //uma var vazia 
    const space = 32;

  for(let i = 0; i < text.length; i++) { //um loop for para pegar toda a mensagem do usuário.
    let codeAsc = text.charCodeAt(i) 

    if (codeAsc === space){
      result += String.fromCharCode(space)
    } else { const movement =((codeAsc - 65 + offset) % 26) + 65;
 result += String.fromCharCode(movement)

    }

 }

document.getElementById("reply").innerHTML = result;


},
 decode: function () {

    let text2 = document.getElementById("text2").value.toUpperCase()
    let offset2 = Number(document.getElementById("offset2").value)
    let resultTwo = "";
    const spaceTwo = 32;

  for(let i = 0; i < text2.length; i++) {
        let codeAsc = text2.charCodeAt(i)

        if (codeAsc === spaceTwo) {
        resultTwo += String.fromCharCode(spaceTwo)

        } else {const movementTwo =((codeAsc + 65 - offset2) % 26) + 65;
        resultTwo += String.fromCharCode(movementTwo)

        }

        
    }

    document.getElementById("reply2").innerHTML = resultTwo;

 }


}

export default cipher;



  
