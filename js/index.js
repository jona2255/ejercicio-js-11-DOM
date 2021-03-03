let listaNodos = document.querySelectorAll(".palabra");
const listaDerecha = document.querySelector(".resultado");

const numPalabras = document.querySelector(".numero-palabras");
const totalCaracteres = document.querySelector(".numero-caracteres");
const mediaPalabras = document.querySelector(".media-palabras");
const listaPalabras = document.querySelector(".lista-palabras");
const textoForm = document.querySelector("input[type='text']");
const botonCrear = document.querySelector("button");
const menuDesplegable = document.querySelector("select");
const resultados = document.querySelector(".resultado");
const caracter = document.querySelector(".numero-caracteres").textContent;

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
  let palabraRepetida;

  for (const nodo of listaNodos) {
    if (nodo.textContent === palabraTextForm) {
      palabraRepetida = true;
    }
  }
  if (palabraRepetida || palabraTextForm.includes(" ")) {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert("La palabra está repetida o no es válida, escribe otra por favor");
  } else {
    const palabraForm = document.createElement("li");
    palabraForm.classList.add("palabra");
    palabraForm.value = menuDesplegable.value;
    palabraForm.textContent = palabraTextForm;
    listaPalabras.append(palabraForm);
    event.preventDefault();
    listaNodos = document.querySelectorAll(".palabra");
    copiarNodo();
  }
});
function copiarNodo() {
  for (const nodo of listaNodos) {
    nodo.addEventListener("click", () => {
      if (nodo.value >= 0 || nodo.value === null) {
        const nodoCopiar = nodo.cloneNode(true);
        nodoCopiar.addEventListener("click", () => {
          nodoCopiar.remove();
        });
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

const mayusculas = palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1);
letrasMayus(mayusculas);
function letrasMayus(cb) {
  listaNodos[0].textContent = cb(listaNodos[0].textContent);
}

function numCaracteres() {
  const sumatorio = resultados.textContent.length;
  caracter.textContent = sumatorio - 5;
  console.log(numCaracteres());
}
