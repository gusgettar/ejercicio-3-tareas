const arrayTareas = [];
const agregarTarea = () => {
  const inputTarea = document.querySelector("#tarea").value;
  const seccion = document.querySelectorAll("tbody");
  arrayTareas.push(inputTarea);

  for (let i = 0; i < arrayTareas.length; i++) {
    const crearTr = document.createElement("tr");

    const nuevaTarea = document.createElement("td");
    const numero = document.createElement("td");
    seccion[i].appendChild(crearTr);

    seccion[i].appendChild(numero);
    seccion[i].appendChild(nuevaTarea);

    numero.innerHTML = arrayTareas.length;
    nuevaTarea.innerText = inputTarea;
    inputTarea.value = "";
  }
};

const borrarInput = () => {
  const inputTarea = document.querySelector("#tarea");
  inputTarea.value = "";
  inputTarea.focus();
};

const focus = () => {
  const inputTarea = document.querySelector("#tarea");
  setInterval(() => {
    inputTarea.focus();
  }, 500);
};

const btnAgregarTarea = document.querySelector("#btnAgregarTarea");
btnAgregarTarea.addEventListener("click", focus);

const btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregarTarea);
btnAgregar.addEventListener("click", borrarInput);
