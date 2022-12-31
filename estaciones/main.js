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
            elemento.style.backgroundImage = "url(https://www.yatecuento.com.ar/storage/Noticias/11653/5ed809ad4aa1aOTONO.jpg)"
            elemento.style.backgroundPosition = "center center";
            elemento.style.backgroundRepeat = "no-repeat";
            elemento.style.backgroundSize = "cover";
            elemento.style.backgroundAttachment = "fixed";
            elemento.style.transition = "3s";
			break;

		case "Junio":
		case "Julio":
		case "Agosto":
			// alert("Hace mucho frio!!");
            elemento.style.backgroundImage = "url(https://la100.cienradios.com/resizer/E4xOFUAHd90dtBIrA0J4XoBrxgI=/arc-photo-radiomitre/arc2-prod/public/HLYFZFJEENFRXNZB4V7ZEOWSH4.jpg)"
            elemento.style.backgroundPosition = "center center";
            elemento.style.backgroundRepeat = "no-repeat";
            elemento.style.backgroundSize = "cover";
            elemento.style.backgroundAttachment = "fixed";
            elemento.style.transition = "3s";
			break;

		case "Septiembre" :
		case "Octubre" :
		case "Noviembre" :
	
        elemento.style.backgroundImage = "url(https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/dsc_0136.jpg)"
        elemento.style.backgroundPosition = "center center";
        elemento.style.backgroundRepeat = "no-repeat";
        elemento.style.backgroundSize = "cover";
        elemento.style.backgroundAttachment = "fixed";
        elemento.style.transition = "3s";
            break;

        case "Diciembre" :
		case "Enero":
		case "Febrero":
            elemento.style.backgroundImage = "url(https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/baplaya-pdn-27_1_0.jpg)"
            elemento.style.backgroundPosition = "center center";
            elemento.style.backgroundRepeat = "no-repeat";
            elemento.style.backgroundSize = "cover";
            elemento.style.backgroundAttachment = "fixed";
            elemento.style.transition = "3s";
			break;
	}
}

