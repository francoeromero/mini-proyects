function mostrar()
{
	//pido espacio de memoria 

	let edad;

	//asigno al id input
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//hago las sentencias

	if(edad <= 5){
		alert("bebé");
	}
        else if (edad < 13){
            alert("niño");
        }
		else if (edad < 18){
			alert("adolescente");
		}

		else if (edad < 65){
			alert("Adulto")
		}
	
		else {
			alert("Anciano");
		}
}
