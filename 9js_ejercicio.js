//**********PREGUNTA #9
function determinante(){
var matriz=[];

var i=0;
var j=0;
var det=0;

for(i=1;i<=2;i++){
	matriz[i]=[];

	for(j=1;j<=2;j++){
		matriz[i][j]=parseInt(prompt("Ingresa el numero de la matriz"+i+j));

	}
	
}
det=matriz[1][1]*matriz[2][2]-matriz[2][1]*matriz[1][2];
document.write("La determinante es "+ det); 
}
