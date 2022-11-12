var input = document.querySelector(".input");
let btnAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

btnAgregar.addEventListener("click", function() {
  chequearInput();
});

class Item {
  constructor (nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }
   
  crearDiv (tarea) {
    let inputItem = document.createElement("input");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = tarea;

    let divItem = document.createElement("div");
    divItem.classList.add("item");

    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
    botonEditar.classList.add("boton-editar");
    botonEditar.addEventListener("click", function() {
      if(!inputItem.disabled) {
        inputItem.disabled = true;
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
        
      } else {
        inputItem.disabled = false;
        botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
      }
    });
    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");
    botonRemover.addEventListener("click", function() {
      container.removeChild(divItem);
    });

    divItem.appendChild(inputItem);
    divItem.appendChild(botonEditar);
    divItem.appendChild(botonRemover);

    container.appendChild(divItem);
  }
}

function chequearInput() {
  if(input.value === "") {
     alert("Ingrese el nombre de la actividad");
  } else {
    const actividad = new Item(input.value);
    input.value = "";
  }
}