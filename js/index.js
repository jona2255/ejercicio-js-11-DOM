const listaNodos = document.querySelectorAll(".palabra");

for (const nodo of listaNodos) {
  nodo.addEventListener("click", () => {
    console.log(nodo);
    const nodoCopiar = nodo.cloneNode(true);
    const resultados = document.querySelector(".resultado");
    resultados.append(nodoCopiar);
  });
}
