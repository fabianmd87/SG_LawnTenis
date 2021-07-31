// var usuarioBD = "admin";
// var passBD = 1234;

// const ingresar = () => {
//   let usuario = document.getElementById("usuario").value;
//   let pass = document.getElementById("pass").value;
//   let mensajeValidacion = document.querySelector("#mensaje-validacion");

//   if (usuario == usuarioBD && pass == passBD) {
//     mensajeValidacion.className = "text-success";
//     mensajeValidacion.innerHTML = `Bienvenido ${usuario}`;

//     setTimeout(() => {
//       window.location = "./home.html";
//     }, 2000);
//   } else {
//     mensajeValidacion.className = "text-danger";
//     mensajeValidacion.innerHTML = "Usuario o contraseña incorrecta";
//     setTimeout(() => {
//       window.location = "./login.html";
//     }, 1000);
//   }
// };

$("#btnLogin").click((e) => {
  $.getJSON("./json/usuarios.json", function (data) {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    let mensajeValidacion = document.querySelector("#mensaje-validacion");

    let usuarios = data.usuarios;

    usuarios.forEach((u) => {
      if (u.nombre === usuario && u.password === pass) {
        mensajeValidacion.className = "text-success";
        mensajeValidacion.innerHTML = `Bienvenido ${usuario}`;
        setTimeout(() => {
          window.location = "./home.html";
        }, 2000);
      }
    });
  });
});

var usuarioActual;

const cargarUsuario = (event) => {
  let nombre = document.getElementById("txtUserName");

  let nombreDeUsuario = event.target.value;
  usuarioActual = new Usuario(nombreDeUsuario, []);

  //2) debemos cargar el usuario que usara el sistema
  mostrarNombreUsuario(usuarioActual);
};

const mostrarNombreUsuario = (usuarioActual) =>
  (document.getElementById(
    "usuario"
  ).innerHTML = `Welcome usuario: ${usuarioActual.nombre}`);
