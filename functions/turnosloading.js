const cargaTurnos =(usuarioActual) => {
    while (true) {
        let turnoElegido = prompt("Ingresa el turno a comprar:");
      
        //Ya no desea comprar mas turnos entonces detenemos la ejecucion
        if (accionElegida == "") break;
      
        //Usamos la funcion Find de array
        let turnoEncontrado = turnosDisponible.find(
          (a) => t.nombre == turnoElegido
        );
      
        usuarioActual.turnos.push(turnoEncontrado);
      }

}