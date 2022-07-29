function cantidad(){
    var numero = parseInt(document.form1.a1.value);

	if (numero>=0 & numero<=9){
	document.write("primer numero");
    }// ESTAS SON LAS OPCIONES QUE SE MOSTRARAN POR PANTALLA 
	if (numero>=10 & numero<=99){
	document.write("tiene dos dijitos");// ESTAS SON LAS OPCIONES QUE SE MOSTRARAN POR PANTALLA 
}
if (numero>=100 & numero<=999){
document.write("tiene tres dijitos");// ESTAS SON LAS OPCIONES QUE SE MOSTRARAN POR PANTALLA 
}
if (numero>=1000 & numero<=9999){
document.write("tiene cuatro dijitos");// ESTAS SON LAS OPCIONES QUE SE MOSTRARAN POR PANTALLA 
}
if (numero>=10000 & numero<=99999){
document.write("tiene cinco dijitos");// ESTAS SON LAS OPCIONES QUE SE MOSTRARAN POR PANTALLA 
}
if(numero>=100000 & numero<=999999){
document.write("tiene seis dijitos");// ESTAS SON LAS OPCIONES QUE SE MOSTRARAN POR PANTALLA 
}
if(numero>=1000000){
document.write("tiene 7 dijitos ");// ESTAS SON LAS OPCIONES QUE SE MOSTRARAN POR PANTALLA 
}
}