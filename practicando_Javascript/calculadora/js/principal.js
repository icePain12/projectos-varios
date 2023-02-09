function calcular() {
  var n1 = document.getElementById("txtN1").value;
  var n2 = document.getElementById("txtN2").value;
  opc = document.getElementById("opcion").value;
  var res;
  if (opc == 1) {
    res = sumar(parseFloat(n1), parseFloat(n2));
    document.getElementById("res").innerHTML = "La suma es: " + res;
    event.preventDefault(); 
  } else if (opc == 2) {
    res = restar(parseFloat(n1), parseFloat(n2));
    document.getElementById("res").innerHTML = "La resta es: " + res;
    event.preventDefault();
  } else if (opc == 3) {
    res = multiplicar(parseFloat(n1), parseFloat(n2));
    document.getElementById("res").innerHTML = "La multiplicación es: " + res;
    event.preventDefault();
  } else if (opc == 4) {
    if (n2 == 0) {
      document.getElementById("res").innerHTML =
        "Error: no es posible dividir entre cero.";
        event.preventDefault();
    } else {
      res = dividir(parseFloat(n1), parseFloat(n2));
      document.getElementById("res").innerHTML = "La División es: " + res;
      event.preventDefault();
    }
    event.preventDefault();
  }
}
function sumar(n1, n2) {
  return n1 + n2;
}
function restar(n1, n2) {
  return n1 - n2;
}
function multiplicar(n1, n2) {
  return n1 * n2;
}
function dividir(n1, n2) {
  if (n2 == 0) return "no es posible dividir entre cero.";
  return n1 / n2;
}