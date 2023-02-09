var a = 1;
var b = -5;
var c = 6;


if(a == 0){
    console.log("Error: datos incorrectos favor de checar");
}
else if(Math.pow(b,2) < 4*a*c ){
    console.log("La solucion es imaginaria");
}
else{
    let res = cuadratica(a,b,c);
    let {res1,res2} = res;
    console.log("x1 = "+res1);
    console.log("x2 = "+res2);
}
function cuadratica(a,b,c){
   var raiz = Math.pow(b,2) - 4*a*c;
   if(a == 0){
       var res1="datos incorrectos favor de checar";
       var res2 ="datos incorrectos favor de checar";
       let res = {res1,res2};
      // console.log(res);
       return res;
   }
   if(raiz == 0){
       var res1= (-b)/2*a;
       var res2 =(-b)/2*a;
       let res = {res1,res2};
      // console.log(res);
       return res;
   }
       
   else if(raiz > 0){
       var res1=(-b+Math.sqrt(raiz))/2*a;
       var res2 = (-b-Math.sqrt(raiz))/2*a;
       let res = {res1,res2};
      // console.log(res);
       return res;
   }
       var res1="La solucion es imaginaria";
       var res2 ="La solucion es imaginaria";
       let res = {res1,res2};
      // console.log(res);
       return res;
}