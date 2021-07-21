class Turno{
  constructor(turno,cancha,fecha){
    this.turno=turno;
    this.cancha=cancha;
    this.fecha=fecha;
    }
}

class Metodo{

}

document.getElementById('formularioTurno').addEventListener('submit', function(e){
  //Tratar de tomar los valores de los input del formularia
  const turno = document.getElementById('turno').value;
  e.preventDefault();
})
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