// Ejercicio 1
let age1 = parseInt(prompt("Ejercicio 1: Ingresa tu edad:"));

if (age1 >= 18) {
    console.log("Eres lo suficientemente mayor para conducir.");
} else {
    let yearsToWait = 18 - age1;
    console.log("Tienes que esperar " + yearsToWait + " años para poder conducir.");
}

// Ejercicio 2
let myAge2 = parseInt(prompt("Ejercicio 2: Ingresa tu edad:"));
let yourAge2 = parseInt(prompt("Ingresa la edad de la otra persona:"));

if (myAge2 > yourAge2) {
    console.log("Eres " + (myAge2 - yourAge2) + " años mayor que la otra persona.");
} else if (yourAge2 > myAge2) {
    console.log("La otra persona es " + (yourAge2 - myAge2) + " años mayor que tú.");
} else {
    console.log("Tienen la misma edad.");
}

// Ejercicio 3
let a3 = parseInt(prompt("Ejercicio 3: Ingresa el valor de a:"));
let b3 = parseInt(prompt("Ingresa el valor de b:"));

if (a3 > b3) {
    console.log("a es mayor que b.");
} else {
    console.log("a es menor o igual que b.");
}

// Ejercicio 4
let month4 = prompt("Ejercicio 4: Ingresa un mes:").toLowerCase();

if (month4 === "septiembre" || month4 === "octubre" || month4 === "noviembre") {
    console.log("La temporada es Otoño.");
} else if (month4 === "diciembre" || month4 === "enero" || month4 === "febrero") {
    console.log("La temporada es Invierno.");
} else if (month4 === "marzo" || month4 === "abril" || month4 === "mayo") {
    console.log("La temporada es Primavera.");
} else if (month4 === "junio" || month4 === "julio" || month4 === "agosto") {
    console.log("La temporada es Verano.");
} else {
    console.log("Mes no válido.");
}

// Ejercicio 5
let score5 = parseInt(prompt("Ejercicio 5: Ingresa tu puntuación:"));

if (score5 >= 80 && score5 <= 100) {
    console.log("Tu calificación es A.");
} else if (score5 >= 70 && score5 <= 89) {
    console.log("Tu calificación es B.");
} else if (score5 >= 60 && score5 <= 69) {
    console.log("Tu calificación es C.");
} else if (score5 >= 50 && score5 <= 59) {
    console.log("Tu calificación es D.");
} else if (score5 >= 0 && score5 <= 49) {
    console.log("Tu calificación es F.");
} else {
    console.log("Puntuación no válida.");
}
