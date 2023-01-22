const comenzar = () =>{

    numSecreto = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //ambito global sin let o const
    
  }
  
  const verificar = () =>{
    let i = 0;
    let a = 0;
    let seguir; 
    let num;
    let resultado;
    
    do {
    
    num = parseInt(prompt("Ingrese un numero del 1 al 100"));
    
    if(num === numSecreto){
        alert("GANASTE!!! ")
        resultado = `su numero es ${num} y el numero secreto es ${numSecreto} USTED ES EL GANADOR`;
    }
    else{
        alert("PERDISTE")
      resultado = `su numero es  ${num} y el numero secreto es ${numSecreto} PERDIÓ`;
    }
    a = a + i;
    i++;
    comenzar();
    
    seguir = prompt("Presiona 's' si quieres seguir, 'n' si no quieres");
    }while(seguir == 's');
  
    document.getElementById("txtIdIntentos").value = i;
    document.getElementById("txtIdNumero").value = num;
    document.getElementById("resultado").value = resultado;

  }
  