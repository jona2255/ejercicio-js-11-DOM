const listaNodos = document.querySelectorAll(".palabra");
const listaDerecha = document.querySelector(".resultado");

for (const nodo of listaNodos) {
  nodo.addEventListener("click", () => {
    console.log(nodo);
    const nodoCopiar = nodo.cloneNode(true);
    listaDerecha.append(nodoCopiar);
  });
}

for (const nodo of listaDerecha) {
  nodo.addEventListener("click", () => {
    console.log(nodo);
    const nodoBorrar = nodo.removeNode(true);
    nodo.append(nodoBorrar);
  });
}

const numPalabras = document.querySelector(".numero-palabras");
const numCaracteres = document.querySelector(".numero-caracteres");
const mediaPalabras = document.querySelector(".media-palabras");
