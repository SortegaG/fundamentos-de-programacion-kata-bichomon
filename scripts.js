console.log(document.title);

// 1.Cambio de título 

document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon";

// 2. Cambia el color de fondo de la primera generación de Pokimon.

document.querySelector(".infocard-list.infocard-list-pkmn-lg").style.backgroundColor = "yellow";

// 3. Imprime por consola la URL de la página.

console.log(window.location.href);

// 4. Imprime por consola el dominio de la página.

console.log(window.location.hostname);

// 5. Imprime todos los nodos de imagen.

console.log(document.querySelectorAll("img"));

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

// Seleccionamos todas las imágenes dentro de los enlaces dentro de las infocard
let imagenes = document.querySelectorAll("img");

imagenes.forEach(imagen => {    // Bucle que pasa por cada una de las imagenes 
    imagen.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";  // imagen.src cambia el source de todas las imágenes
})
/*for (let i = 0; i <= imagenes.length; i++) { // Otra forma de hacerlo con un bucle
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}*/

// 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

    let padre;
    // Seleccionamos todos los nodos de pokemon con class='itype flying'
    
    let selectorVoladores = document.querySelectorAll("main > div span.infocard-lg-data.text-muted small a[class='itype flying']");

    for (let i = 0; i < selectorVoladores.length; i++) {
        padre = selectorVoladores[i].parentNode.parentNode;
        padre.setAttribute('style', 'background-color:black;')
    }
    




