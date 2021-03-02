const listaNodos = document.querySelectorAll(".palabra");
copiarNodo();
function copiarNodo() {
  for (const nodo of listaNodos) {
    nodo.addEventListener("click", () => {
      console.log(nodo);
      const nodoCopiar = nodo.cloneNode(true);
      const resultados = document.querySelector(".resultado");
      resultados.append(nodoCopiar);
    });
  }
}

const mayusculas = palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1);
letrasMayus(mayusculas);
function letrasMayus(cb) {
  listaNodos[0].textContent = cb(listaNodos[0].textContent);
}
