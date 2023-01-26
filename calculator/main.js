

        

	//primer input
	const searchBtn = document.querySelector(".search-btn");
   
	const searchBox = document.querySelector(".search-box");
	searchBtn.onclick = () =>{
		searchBox.classList.add("active");

	}  
	//segundo input
	const searchBtnbox = document.querySelector(".search-btn-box");
   
	const box = document.querySelector(".box");
	searchBtnbox.onclick = () =>{
		box.classList.add("active");

	}




	//operaciones 

	function sumar()
	{	
		//pido espacio de memoria
		let num1;
		let num2;
		let resultado;
		let mostrar;
	
		//asigno el valor alas variables y transformo de string a number
		num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
		//Ahora hago la operacion y asigno el valor a la variable resultado
		resultado = num1 + num2;
	
		//muestro el valor en pantalla
	
		mostrar = ("El resultado es " + resultado);
		document.getElementById("mostrar").value = mostrar;
	
		//limpio las entradas para una nueva operacion
		document.getElementById("txtIdNumeroUno").value = "";
		document.getElementById("txtIdNumeroDos").value = "";
	
	
	}
	
	function restar()
	{
		//pido espacio de memoria
		let num1;
		let num2;
		let resultado;
	
		//Asigno el valor de las entradas alas variables y cambio de string a number
		num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
		//operacion
		resultado = num1 - num2;
	
		//muestro en resultado en la pantalla
		mostrar = ("El resultado es " + resultado);
		document.getElementById("mostrar").value = mostrar;
	
		//limpio las entradas para una nueva operacion
		document.getElementById("txtIdNumeroUno").value = "";
		document.getElementById("txtIdNumeroDos").value = "";
	
	}
	
	function multiplicar()
	{ 
		let num1;
		let num2;
		let resultado;
	
		//Asigno el valor de las entradas alas variables y cambio de string a number
		num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
		//operacion
		resultado = num1 * num2;
	
		//muestro en resultado en la pantalla
		mostrar = ("El resultado es " + resultado);
		document.getElementById("mostrar").value = mostrar;
		//limpio las entradas para una nueva operacion
		document.getElementById("txtIdNumeroUno").value = "";
		document.getElementById("txtIdNumeroDos").value = "";
		
	}
	
	function dividir()
	{
		let num1;
		let num2;
		let resultado;
	
		//Asigno el valor de las entradas alas variables y cambio de string a number
		num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
		//operacion
		resultado = num1 / num2;
	
		//muestro en resultado en la pantalla
		mostrar = ("El resultado es " + resultado);
		document.getElementById("mostrar").value = mostrar;
		//limpio las entradas para una nueva operacion
		document.getElementById("txtIdNumeroUno").value = "";
		document.getElementById("txtIdNumeroDos").value = "";
		
	}
	