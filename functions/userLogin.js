var usuarioActual;
<script src="./functions/init.js"></script> 
const cargarUsuario = (event) => {
    let nombre = document.getElementById("txtUserName");
    /*let apellido = prompt("ingrese apellido");
    let dni = prompt("ingrese DNI");
    let peso = parseInt(prompt("Ingrese su peso en KG"));
    let altura = parseFloat(prompt("Ingrese su altura en CM"));
    persona = new Persona(nombre, apellido, dni, peso, altura);
    listaPersonas.push(persona);
    console.table(persona);*/
    let nombreDeUsuario = event.target.value;
  usuarioActual = new Usuario(nombreDeUsuario, []);

  //2) debemos cargar el usuario que usara el sistema
  mostrarNombreUsuario(usuarioActual);
};