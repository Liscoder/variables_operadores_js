//**********PREGUNTA #3
function secuencia(){

var primer_contador=0;
var segundo_contador=0;
var tercer_contador=0;
var numero = Number(prompt("Escriba numero"));

primer_contador=5+numero;
segundo_contador=primer_contador+21;
tercer_contador=segundo_contador-4;
alert("\n"+"Numero introducido: "+numero+
	"\n"+" Contadores: "+primer_contador+" "+segundo_contador+" "+tercer_contador);

}
