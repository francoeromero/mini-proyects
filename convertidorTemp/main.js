
function FahrenheitCentigrados() 
{
    //pido espacio de memoria declarando variables
    let fahrenheitIngresado;
    let fahrenheit;
    let centigrados;
    fahrenheitIngresado = document.getElementById("txtIdTemperatura").value;
    //paso a valor numerico flotante porque se trabaja en decimales
    fahrenheit = parseFloat(fahrenheitIngresado);
    //hago el calculo del valor x con el dato que me da el usuario, en este caso seria fahrenheit
    centigrados = (fahrenheit - 32) * 5 / 9;    
    //muestro el resultado redondeando con 2 decimales
    alert(`La temperatura de ${fahrenheit} °F en centigrados son ${centigrados.toFixed(2)} °C`);
    document.getElementById("txtIdResultado").value = centigrados;
    //limpio la entrada para una nueva operacion
    document.getElementById("txtIdTemperatura").value = "";
}

function CentigradosFahrenheit() 
{
      //resevo espacio declarando variables
      let fahrenheit;
      let centigradosIngresado;
      let centigrados;
      //asigno el id a la variable    
      centigradosIngresado = document.getElementById("txtIdTemperatura").value;
      //paso el valor a decimales 
      centigrados = parseFloat(centigradosIngresado);
      //calculo 
      fahrenheit = (centigrados * 1.8) + 32;
      //muestro el resultado en la alerta
      alert(`La temperatura de ${centigrados} °C en centigrados son ${fahrenheit.toFixed(2)} °F`);
      document.getElementById("txtIdResultado").value  = fahrenheit;
      
}
