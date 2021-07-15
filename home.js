var nombre;
var apellido;
var dni;
var peso;
var altura;
var persona;
var listaPersonas = [];

var turnosDisponible = cargarTurnos();

var usuarioActual=cargarUsuario();

cargaTurnos(usuarioActual);

function Persona(pNombre, pApellido, pDni, pPeso, pAltura) {
  this.nombre = pNombre;
  this.apellido = pApellido;
  this.dni = pDni;
  this.peso = pPeso;
  this.altura = pAltura;

  this.mostrar = function () {
    alert(` ${persona.nombre} ${persona.apellido}`);
  }


}



function revisarDato() {
  if (persona.nombre == "") {
    persona.nombre = prompt("Debe ingresar su nombre");
  }
  if (persona.apellido == "") {
    persona.apellido = prompt("Debe ingresar su apellido");
  }
  if (persona.dni == "") {
    persona.dni = prompt("Debe ingresar su dni");
  }
}
