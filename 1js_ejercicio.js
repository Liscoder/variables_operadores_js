//**********PREGUNTA #1
var numero_uno=Number(prompt("	Ingrese el dividendo: "));
var numero_dos=Number(prompt("Ingrese el divisor: "));
function division(uno,dos){
	var resultado=0;
	resultado=uno/dos;
	return resultado;

}
document.write("<br>"+"La division de estos numeros sera: "+division(numero_uno,numero_dos));