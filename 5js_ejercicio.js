//**********PREGUNTA #3
function producto(){
var uuno=Number(prompt("Ingrese vector1 11" ));
var udos=Number(prompt("Ingrese vector1 12 "));
var vuno=Number(prompt("Ingrese vector2 11"));
var vdos=Number(prompt("Ingrese vector2 12"));

	var producto=0;
	var vectoru = [];
	var vectorv = [];
	vectoru[0]=uuno;
	vectoru[1]=udos;
	vectorv[0]=vuno;
	vectorv[1]=vdos;
	producto=(uuno*vuno+udos*vdos);

alert("El producto escalar de los vectores:"+"\n"+"("+vectoru+")"+" y " + "("+vectorv+")"+" es "+producto)
}