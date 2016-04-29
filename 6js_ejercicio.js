//**********PREGUNTA #6
function medio(){
var xuno=Number(prompt("Ingrese coordenada1 11" ));
var yuno=Number(prompt("Ingrese coordenada1 12 "));
var xdos=Number(prompt("Ingrese coordenada2 11"));
var ydos=Number(prompt("Ingrese coordenada2 12"));
	var cordenadau=[];

	var medio1=0;
	var medio2=0;
	var mediou = [];
	mediou[1]=xuno;
	mediou[2]=yuno;
	var mediov =[];
	mediov[1]=xdos;
	mediov[2]=ydos;

	medior=[];
	medio1=(xuno+xdos)/2;
	medio2=(yuno+ydos)/2;
	medior[0]=medio1;
	medior[1]=medio2;


alert("El punto medio del segmento de extermos,los puntos:"+"\n"+"("+mediou+")"+" y " + "("+mediov+")"+" es "+"("+medior+")")
}