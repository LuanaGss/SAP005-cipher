const cipher = {
  encode(offset, text) {

    let result = "";
    const space = 32;

    if (text == null || text == "" || offset == null || offset == "") {
      throw new TypeError("É necessário inserir um texto", "cipher.js", 10);

    } else {
      for (let i = 0; i < text.length; i++) {
        let codeAsc = text.charCodeAt(i)

        if (codeAsc === space) {
          result += String.fromCharCode(space)

        } else {
          const movement = ((codeAsc - 65 + offset) % 26) + 65;
          result += String.fromCharCode(movement)

        }

      }
      return (result)


    }


  },
  decode: function (offsetTwo, textTwo) {

    let resultTwo = "";
    const spaceTwo = 32;


    if (textTwo == null || textTwo == "" || offsetTwo === null || offsetTwo === "") {
      throw new TypeError("É necessário inserir um texto", "cipher.js", 10);

    } else {
      for (let i = 0; i < textTwo.length; i++) {
        let codeAsc = textTwo.charCodeAt(i)

        if (codeAsc === spaceTwo) {
          resultTwo += String.fromCharCode(spaceTwo)

        } else {
          const movementTwo = ((codeAsc + 65 - offsetTwo) % 26) + 65;
          resultTwo += String.fromCharCode(movementTwo)

        }


      }
      return (resultTwo)


    }


  }


}

export default cipher;




