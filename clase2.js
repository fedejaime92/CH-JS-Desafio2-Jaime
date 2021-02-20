let nombreAlumno = prompt('Ingrese el nombre del alumno');
let nombreTrabajo = prompt('Descripción de la instancia de evaluación');
let notaTrabajo = prompt('Ingrese la nota obtenida');
const E = " ";

if (notaTrabajo >=6) {
    alert(nombreAlumno + E + 'ha aprobado el trabajo con la nota' + E + notaTrabajo)
} 
else if (notaTrabajo <=5) {
    alert(nombreAlumno + E + 'ha desaprobado el trabajo');
}

let aviso = prompt('¿Desea enviar el resultado a la familia? S / N');

if (aviso =="S") {
    alert('La familia de' + E + 'ha recibido la nota');
}
else if (aviso =="N") {
    console.log('La familia de' + E + nombreAlumno + E + 'no recibirá la nota');
}