const mostrarNombreUsuario = (usuarioActual) =>
  (document.getElementById(
    "usuario"
  ).innerHTML = `Welcome usuario: ${usuarioActual.nombre}`);