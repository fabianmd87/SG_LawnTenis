//Tenemos el listado total de turnos que se pueden comprar

const cargarTurnos = () =>{
    
    var turnouno = new Turnos("17", 100);
    var turnodos = new Turnos("18", 150);
    var turnotres = new Turnos("19", 200);
    return [turnouno, turnodos, turnotres];
}