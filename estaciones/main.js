function mostrar()
{
	
	let mes = document.getElementById("txtIdMes").value;

    //background 
    let elemento = document.getElementById("miElemento");
	
	switch (mes){

        case "Marzo" :
		case "Abril":
		case "Mayo" :
			// alert("Arrancamos con el frio");
            // elemento.style.backgroundColor = "red";
            elemento.style.backgroundImage = "url(https://www.dzoom.org.es/wp-content/uploads/2018/10/foto-otono-1.jpg)";
            elemento.style.backgroundPosition = "center center";
			break;

		case "Junio":
		case "Julio":
		case "Agosto":
			// alert("Hace mucho frio!!");
            elemento.style.backgroundImage = "url(https://media.istockphoto.com/id/1140829787/es/foto/sunset-en-savannah-plains.jpg?b=1&s=612x612&w=0&k=20&c=Xii4-SeUmyDUcJbnCeB1NycueCtnSkzqDd1AUB1Zxoo=)"
			break;

		case "Septiembre" :
		case "Octubre" :
		case "Noviembre" :
	
            alert("Comienzan a nacer las flores, Primavera!!")
            break;

        case "Diciembre" :
		case "Enero":
		case "Febrero":
			alert("Ya pasamos el frio, ahora hace calor!!!.");
            
			break;
	}
}

