//**********PREGUNTA #2
var anio=Number(prompt("Ingrese anio de nacimiento"));	
var mes=Number(prompt("Ingrese el mes de nacimiento"));
var dia=Number(prompt("Ingrese el dia de nacimiento"));
var hoy = 2016+04*30+27;
var numero_dias=0;
var nacimiento= anio+mes*30+dia;

numero_dias=hoy-nacimiento;
document.write("<br>"+"El numero de dias que ha vivido: "+numero_dias);