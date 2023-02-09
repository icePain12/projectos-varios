function calcular(){
    var num= document.getElementById("txtN").value;
    
    if(!esEntero(num) || (num <=0)){

        document.getElementById("texto_resultado").innerHTML = "Error: el número debe ser entero y mayor o igual a 1";
        event.preventDefault();
        
    }
    else if(num == 1){
        document.getElementById("texto_resultado").innerHTML = "El número 1 no es primo.";
        event.preventDefault();
    }
    else if(num == 2){
        document.getElementById("texto_resultado").innerHTML = "El número 2 es primo.";
        event.preventDefault();
    }
    else{
      if(esPrimo(num)){
        document.getElementById("texto_resultado").innerHTML = "El número "+num +" es primo.";
        event.preventDefault();
      }
      else{
          document.getElementById("texto_resultado").innerHTML = "El número "+num +" no es primo.";
          event.preventDefault();
      }
    }
}

function esPrimo(n){
    if(n<=0 || !esEntero(n)) return "Error: el número debe ser entero y mayor o igual a 1";
    if(n==1) return false;
    else if(n==2) return true;
    for(i=2;i<n;i++){
        if(n % i == 0) return false;
    }
    return true;
}

function esEntero(numero){
    if (isNaN(numero)){
        return false
    } else {
        if (numero % 1 == 0) {
            return true;
        } else {
            return false;
        }
    }
}