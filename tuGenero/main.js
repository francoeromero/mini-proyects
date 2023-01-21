const mostrar = () =>{
	let sexo ;

	do{
	sexo = prompt("Cual es tu sexo? f como femenino y m como masculino");

	if(sexo == 'f'){
        sexo = "FEMENINA";
		alert("FEMENINA");
	}
	else if (sexo == 'm'){
        sexo = "MASCULINO";
        alert("MASCULINO");
	}
	else{
        sexo ="sexo indefinido";
		alert("sexo indefinido");
	}

	seguir = prompt("Quieres seguir ? (escribe 's' para seguir o escribe 'n' para no seguir)");

	} while(seguir == 's');

	 document.getElementById("txtIdSexo").value = sexo; 

}

