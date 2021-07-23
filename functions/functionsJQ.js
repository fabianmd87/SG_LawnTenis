
//Muestra en un alert el turno cargado //
$(document).ready(() => {
    
    alert($("listaTuro").attr());
});


//BOTON GUARDAR CON  JQUERY //
$(".bt1").click((e) => {
const turno = document.getElementById('turno').value;
  const cancha= document.querySelector('#cancha').value;
  const fecha=document.getElementById('date').value;


  const turnos= new Turno(turno,cancha,fecha);

  const usarMetodo=  new Metodo;

  usarMetodo.agregarTurno(turnos);

  usarMetodo.resetearFormulario();
  e.preventDefault()
});