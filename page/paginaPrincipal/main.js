// inicializo con la libreria MUURI, y seleccionamos a la clase grid del html #5 https://github.com/haltu/muuri
const grid = new Muuri('.grid', {
	//el layout se encuentra en el  link, y elegimos rounding de todas las formas que se puede trabajar
	layout: {
		rounding: false //para trabajar con medidas exactas
	}
});

// INICIO configuracion para que aparescan las imagenes juntas en opacidad CSS Linea 91
window.addEventListener('load', () => {
	grid.refreshItems().layout(); //esto es de la libreria MUURI, el refreshItems calcula las dimensiones de las imagenes con respecto al viewport de la web o del dispositivo 
	document.getElementById('grid').classList.add('imagenes-cargadas');//seleccionamos a grid de HTML y a imagenes-cargadas de CSS
//FIN configuracion de las imagenes que aparescan juntas y en opacidad



	// INICIO de los enlaces de las categorias de la galeria de imagen
	const enlaces = document.querySelectorAll('#categorias a'); 
	enlaces.forEach((elemento) => {
		
		elemento.addEventListener('click', (evento) => { 
			evento.preventDefault(); 
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

	
			const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// INICIO BUSCADOR es algo similar al de los enlaces de las categorias
		// accedemos al id barra-busqueda que tiene alojado el buscador y creamos una funcion en el input
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value; // el valor que escriba el usuario lo colocamos en la variable "busqueda"
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) ); //accedemos alas etiquetas del data que pusimos en html y si coincide aparece
	});

	
});