function sumar(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var res = parseInt(n1) + parseInt(n2);   
    document.getElementById("res").innerHTML = "la suma es: "+res;
    event.preventDefault();
}