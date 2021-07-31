class Turno {
  constructor(turno, cancha, fecha) {
    this.turno = turno;
    this.cancha = cancha;
    this.fecha = fecha;
  }
}

class Metodo {
  agregarTurno(turno) {
    const listaTurno = document.getElementById("listaTurno");
    const elemento = document.createElement("div");
    elemento.innerHTML = `
      <div class="card text-center mt-5">
        <div class="card-body d-flex justify-content-around">
          <strong>Turno: ${turno.turno}</strong>
          <strong>Cancha: ${turno.cancha}</strong>
          <strong>Fecha: ${turno.fecha}</strong>
        </div>
      </div>  
    `;
    console.log(turno.turno);
    listaTurno.appendChild(elemento); //insertar el elemento en una lista con los turnos
  }

  resetearFormulario() {
    document.getElementById("formularioTurno").reset();
  }
}

var archivo = document.getElementById("formularioTurno");

if (archivo) {
  archivo.addEventListener("submit", function (e) {
    //Tratar de tomar los valores de los input del formularia
    const turno = document.getElementById("turno").value;
    const cancha = document.querySelector("#cancha").value;
    const fecha = document.getElementById("date").value;

    console.log(turno);
    const turnos = new Turno(turno, cancha, fecha);

    const usarMetodo = new Metodo();

    usarMetodo.agregarTurno(turnos);

    usarMetodo.resetearFormulario();
    e.preventDefault();
  });
}

//const cargaTurnos =(usuarioActual) => {
//    while (true) {
//        let turnoElegido = prompt("Ingresa el turno a comprar:");
//
//        //Ya no desea comprar mas turnos entonces detenemos la ejecucion
//        if (accionElegida == "") break;
//
//        //Usamos la funcion Find de array
//        let turnoEncontrado = turnosDisponible.find(
//          (a) => t.nombre == turnoElegido
//        );

//        usuarioActual.turnos.push(turnoEncontrado);
//      }

//}
