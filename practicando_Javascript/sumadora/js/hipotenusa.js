var a = 1;
var b = 1;

var h = pitagoras_h(parseInt(a),parseInt(b));

console.log("la hipotenusa mide "+h);

function pitagoras_h(a,b){
    return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
}