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

var turnos = [];

$(document).ready(() => {
  if (JSON.parse(localStorage.getItem("turnos")) != null) {
    turnos = JSON.parse(localStorage.getItem("turnos"));
    turnos.forEach((turno) => {
      let htmlBody = $("#tablaTurnos-body").html();
      htmlBody += ` <tr class="table-danger">
                      <td>${turno.turno}</td>
                      <td>${turno.cancha}</td>
                      <td>${turno.fecha}</td>
                    </tr>`;
      $("#tablaTurnos-body").html(htmlBody);
    });
  }
});

$("#btnGuardar").click((e) => {
  if (JSON.parse(localStorage.getItem("turnos")) != null) {
    turnos = JSON.parse(localStorage.getItem("turnos"));
  }
  const nombreTurno = document.getElementById("nombreTurno").value;
  const cancha = document.querySelector("#cancha").value;
  const fecha = document.getElementById("date").value;
  const turno = new Turno(nombreTurno, cancha, fecha);
  turnos.push(turno);
  localStorage.setItem("turnos", JSON.stringify(turnos));

  let htmlBody = $("#tablaTurnos-body").html();
  htmlBody += ` <tr class="table-danger">
                    <td>${nombreTurno}</td>
                    <td>${cancha}</td>
                    <td>${fecha}</td>
                  </tr>`;
  $("#tablaTurnos-body").html(htmlBody);
});
