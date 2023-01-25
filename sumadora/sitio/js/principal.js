function sumar(){
    var num1 = document.getElementById("txtN1").value;
    var num2 = document.getElementById("txtN2").value;
    var res = parseInt(num1) + parseInt(num2);
    document.getElementById("resp").innerHTML = "La suma es: "+ res;

}