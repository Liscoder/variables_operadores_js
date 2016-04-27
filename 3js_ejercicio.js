//**********PREGUNTA #3
function presentar(){  


var nombre = prompt("Escriba su nombre");
var apellido=prompt("Escriba su apellido");
var poblacion=prompt("Escriba su poblacion");
if (confirm("Seguro que su nombre es "+nombre+"...")) {

alert("Hola "+nombre+" "+apellido);
alert("Adios habitante de "+poblacion);
}
}