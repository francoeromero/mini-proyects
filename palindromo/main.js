function palindromo() {
    let cadena = document.getElementById("frase").value.toLowerCase();
    //elimino los caracteres que no son alfanumericos
    cadena = cadena.match(/[a-z0-9]/g);
    //comparo la cadena original con su version invertida
    let esPalindromo = cadena.join('') === cadena.reverse().join('');

    if(esPalindromo === true){
    esPalindromo = "es palindromo";
    } else if (esPalindromo === false){
        esPalindromo = "no es palindromo";
    }
    document.getElementById("resultado").innerHTML = esPalindromo;

  }


