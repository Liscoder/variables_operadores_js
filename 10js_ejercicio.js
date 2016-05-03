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
	document.write("<br>"+"la matriz ingresada es"+"<br>"+matriz[i][1]+
					"\t"+matriz[i][2]
		);
}

}
