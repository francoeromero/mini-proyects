function mostrar()
{
	//pido espacio de memoria 

	

	//asigno al id input
	let edad = parseInt(document.getElementById("txtIdEdad").value);
    let resultado;

	//hago las sentencias

	if(edad <= 5){
        resultado = "Eres un bebé";
        document.getElementById("txtIdResultado").value = resultado;
	}
        else if (edad < 13){
            resultado = "Eres un niño o niña";
            document.getElementById("txtIdResultado").value = resultado;
        }
		else if (edad < 18){
            resultado = "Eres un Joven";
            document.getElementById("txtIdResultado").value = resultado;
		}

		else if (edad < 65){
            resultado = "Eres un Adulto";
            document.getElementById("txtIdResultado").value = resultado;
		}
	
		else if (edad < 100) {
            resultado = "Usted es un jubilado o jubilada";
            document.getElementById("txtIdResultado").value = resultado;
		}

        else{
            resultado = "No ha ingresado un número o edad correcta";
            document.getElementById("txtIdResultado").value = resultado;
        }

        document.getElementById("txtIdEdad").value = "";
        
}
