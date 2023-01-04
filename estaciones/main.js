function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value; // var mesDelAño =txtIdMes.value;
	
//background 
let elemento = document.getElementById("background");

	switch (mes){
        case "Marzo" :
            case "Abril":
            case "Mayo" :
    
                elemento.style.backgroundImage = "url(https://fotografias.antena3.com/clipping/cmsimages02/2020/09/21/F89CE2C4-A2AA-4B24-8D4F-C87DE9073002/98.jpg?crop=1920,1080,x0,y98&width=1900&height=1069&optimize=low&format=webply)";
                elemento.style.backgroundPosition = "center center";
                elemento.style.backgroundRepeat = "no-repeat";
                elemento.style.backgroundSize = "cover";
                elemento.style.backgroundAttachment = "fixed";
                elemento.style.transition = "3s";
                break;
    
            case "Junio":
            case "Julio":
            case "Agosto":
               
                elemento.style.backgroundImage = "url(https://okdiario.com/img/2021/12/17/cuando-empieza-el-invierno.jpg)"
                elemento.style.backgroundPosition = "center center";
                elemento.style.backgroundRepeat = "no-repeat";
                elemento.style.backgroundSize = "cover";
                elemento.style.backgroundAttachment = "fixed";
                elemento.style.transition = "3s";
                break;
    
            case "Septiembre" :
            case "Octubre" :
            case "Noviembre" :
        
            elemento.style.backgroundImage = "url(https://estaticos.muyinteresante.es/uploads/images/gallery/5e665a6b5bafe8e5f60ee7b8/primavera10.jpg)"
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
