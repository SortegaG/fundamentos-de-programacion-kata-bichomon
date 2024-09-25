console.log(document.title);

// 1.Cambio de título 

document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon";

// 2. Cambia el color de fondo de la primera generación de Pokimon.

document.querySelector(".infocard-list.infocard-list-pkmn-lg").style.backgroundColor = "yellow";

// 3. Imprime por consola la URL de la página.

console.log(location.href);

// 4. Imprime por consola el dominio de la página.

console.log(window.location.hostname);

// 5. Imprime todos los nodos de imagen.



// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

// Seleccionamos todas las imágenes dentro de los enlaces dentro de las infocard
let imagenes = document.querySelectorAll(".infocard-lg-img > a > img");
    for (let i = 0; i <= imagenes.length; i++) {
        imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    }

// 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
