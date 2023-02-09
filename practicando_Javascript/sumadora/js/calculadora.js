var n1 = 25;
var n2 = 0;
var opc = 4;
var res;
if(opc==1)
  res = sumar(parseInt(n1),parseInt(n2));
else if(opc==2){
    res = restar(parseInt(n1),parseInt(n2));
}
else if(opc==3){
   res = multiplicar(parseInt(n1),parseInt(n2));
}
else if(opc==4){
    res = dividir(parseInt(n1),parseInt(n2));
}

if(res == "no es posible dividir entre cero")
  console.log("Error: "+ res);
else
 console.log("el resultado es "+res);



function sumar(n1,n2){
  return n1 + n2;
}
function restar(n1,n2){
    return n1 - n2;
}
function multiplicar(n1,n2){
    return n1 * n2;
}
function dividir(n1,n2){
    if(n2 == 0)
      return "no es posible dividir entre cero";
    return n1 / n2;  
}