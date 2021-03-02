let listaNodos = document.querySelectorAll(".palabra");
const listaPalabras = document.querySelector(".lista-palabras");
const textoForm = document.querySelector("input[type='text']");
const botonCrear = document.querySelector("button");
const menuDesplegable = document.querySelector("select");

let palabraTextForm = "";

textoForm.addEventListener("change", () => {
  if (textoForm.value.length > 0) {
    botonCrear.disabled = false;
    palabraTextForm = textoForm.value;
  } else {
    botonCrear.disabled = true;
  }
});
botonCrear.addEventListener("click", (event) => {
  const palabraForm = document.createElement("li");
  palabraForm.classList.add("palabra");
  palabraForm.value = menuDesplegable.value;
  palabraForm.textContent = palabraTextForm;
  listaPalabras.append(palabraForm);
  event.preventDefault();
  listaNodos = document.querySelectorAll(".palabra");
  copiarNodo();
});
function copiarNodo() {
  for (const nodo of listaNodos) {
    nodo.addEventListener("click", () => {
      console.log(nodo);
      if (nodo.value >= 0 || nodo.value === null) {
        const nodoCopiar = nodo.cloneNode(true);
        const resultados = document.querySelector(".resultado");
        resultados.append(nodoCopiar);
        if (nodo.value === 1) {
          nodo.value = -1;
        } else if (nodo.value > 1) {
          nodo.value--;
        }
      }
    });
  }
}
copiarNodo();
