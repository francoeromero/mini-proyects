function mostrar()
{
	const PRECIO = 15000;
	let preciofinal;
    let resultado;

	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				preciofinal = (PRECIO * 0.2) + PRECIO;
                resultado = ("El precio es " + preciofinal + " con su aumento del 20% Bariloche SWITCH");
                document.getElementById("resultado").value = resultado;
			} 

			else if (destino == "Cataratas" || destino == "Cordoba"){
				preciofinal = (PRECIO * 0.1) + PRECIO;
                resultado = ("El precio es " + preciofinal + " con su aumento del 10% Cataratas Cordoba  SWITCH");
                document.getElementById("resultado").value = resultado;

			}
			else {
				preciofinal = PRECIO - (PRECIO * 0.2) ;
				resultado = ("El precio es " + preciofinal + " con su descuento del 20% incluido Mar del plata  SWITCH");
                document.getElementById("resultado").value = resultado;
			}
		break;

		case "Verano":
			if(destino == "Bariloche"){
				preciofinal = PRECIO - (PRECIO * 0.2);
				resultado = ("El precio es " + preciofinal + " con su descuento del 20%  SWITCH");
                document.getElementById("resultado").value = resultado;

			}
			else if (destino == "Cataratas" || destino == "Cordoba"){
				preciofinal = PRECIO - (PRECIO * 0.1);
				resultado = ("El precio es " + preciofinal + " con su descuento del 10%  SWITCH")
                document.getElementById("resultado").value = resultado;

			}
			else{
				preciofinal = PRECIO + (PRECIO * 0.2);
				resultado = ("El precio es " + preciofinal + " con su aumento del 20%  SWITCH");
                document.getElementById("resultado").value = resultado;

			}

		break;

		case "Otoño":
		case "Primavera":
			if(destino == "Cataratas" || destino == "Mar del plata"){
				preciofinal = PRECIO + (PRECIO * 0.1);
				resultado = ("El precio es " + preciofinal + " con su aumento del 10%  SWITCH");
                document.getElementById("resultado").value = resultado;

			}
			else {
				resultado = ("El precio es " + PRECIO +  " sin descuento  SWITCH");
                document.getElementById("resultado").value = resultado;

			}
		break;
		}
}