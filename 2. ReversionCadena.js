// Primero creamos la función para invertir el orden de las palabras en una frase

function invertirFrase(frase) {

    // dividimos la frase en un array de palabras
     let palabras = frase.split(" ");

     // Invertimos el array de palabras

     let palabrasInvertidas = palabras.reverse();

     // Unimos el array de palabras en una frase
     let fraseInvertida = palabrasInvertidas.join(" ");

     // Imprimimos la frase invertida
     console.log(fraseInvertida);
}

// Ejemplo de uso
let frase = "¿Hola cómo estas?";
invertirFrase(frase);

// La frase invertida es "estas? cómo ¿Hola"