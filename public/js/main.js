additionner(5, 10);


function additionner(x, y) {
    console.log(x + y);
}


// exo2
function soustraction(x, y) {
    console.log(x - y);
}
soustraction(5, 10);


// exo3
function multiplication(x, y) {
    console.log(x * y);
}
multiplication(5, 10);


// exo4
function division(x, y) {
    console.log(x / y);
}
division(5, 10);


// exo5
function modulo(x, y) {
    console.log(x % y);
}
modulo(5, 10);


// exo6
function carée(x) {
    return x * x;
}
console.log(carée(5));


// exo7
function exposant(x, y) {
    return Math.pow(x, y);
}
console.log(exposant(5, 2));


// exo8
function capitalize(mot) {
    return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
}
console.log(capitalize("bonjour à tous"));


// exo9
function calcul(nbr1, operator, nbr2) {
    switch (operator) {
      case "+":
        return nbr1 + nbr2;
      case "-":
        return nbr1 - nbr2;
      case "*":
        return nbr1 * nbr2;
      case "/":
        return nbr1 / nbr2;
      default:
        return "oprérattion non valide";
    }
}
console.log(calcul(5, "+", 10));
console.log(calcul(5, "*", 10));