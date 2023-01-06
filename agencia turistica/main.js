function mostrar()
{
	const PRECIO = 15000;
	let preciofinal;

	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				preciofinal = (PRECIO * 0.2) + PRECIO;
				alert("El precio es " + preciofinal + " con su aumento del 20% Bariloche SWITCH");
			} 
			else if (destino == "Cataratas" || destino == "Cordoba"){
				preciofinal = (PRECIO * 0.1) + PRECIO;
				alert("El precio es " + preciofinal + " con su aumento del 10% Cataratas Cordoba  SWITCH");
			}
			else {
				preciofinal = PRECIO - (PRECIO * 0.2) ;
				alert("El precio es " + preciofinal + " con su descuento del 20% incluido Mar del plata  SWITCH");
			}
		break;

		case "Verano":
			if(destino == "Bariloche"){
				preciofinal = PRECIO - (PRECIO * 0.2);
				alert("El precio es " + preciofinal + " con su descuento del 20%  SWITCH");
			}
			else if (destino == "Cataratas" || destino == "Cordoba"){
				preciofinal = PRECIO - (PRECIO * 0.1);
				alert("El precio es " + preciofinal + " con su descuento del 10%  SWITCH")
			}
			else{
				preciofinal = PRECIO + (PRECIO * 0.2);
				alert("El precio es " + preciofinal + " con su aumento del 20%  SWITCH");
			}

		break;

		case "Otoño":
		case "Primavera":
			if(destino == "Cataratas" || destino == "Mar del plata"){
				preciofinal = PRECIO + (PRECIO * 0.1);
				alert("El precio es " + preciofinal + " con su aumento del 10%  SWITCH");
			}
			else {
				alert("El precio es " + PRECIO +  " sin descuento  SWITCH");
			}
		break;
		}
}