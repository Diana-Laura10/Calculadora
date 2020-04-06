window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
}
var x="0"; //número en pantalla
var xi=1; //iniciar número en pantalla: 1=si; 0=no;
var ni=0; //número oculto o en espera.
var op="no"; //operación en curso; "no" =  sin operación.

function binario(){
	convertir_binario(x);
	}

function octal(){
	convertir_octal(x);
	}

function hexadecimal(){
	convertir_hexadecimal(x);
	}

function convertir_binario(valor){
		var resul_div = [];
		var entradas = 0;
		var resultado_binario = '';
		while(valor > 0){
			residuo = parseInt(valor % 2);
			valor = parseInt(valor/2);
			resul_div[entradas] = residuo;
			entradas++;
		}
		for (var i = resul_div.length - 1; i >= 0; i--) {
			resultado_binario += resul_div[i];
		}
		pantalla.innerHTML=resultado_binario;
		x=resultado_binario;
        op="no";
        xi=1;
}

function convertir_octal(valor){
		var resul_div = [];
		var entradas = 0;
		var resultado_octal = '';
		while(valor > 0){
			residuo = parseInt(valor % 8);
			valor = parseInt(valor/8);
			resul_div[entradas] = residuo;
			entradas++;
		}
		for (var i = resul_div.length - 1; i >= 0; i--) {
			resultado_octal += resul_div[i];
		}
		pantalla.innerHTML=resultado_octal;
		x=resultado_octal;
        op="no";
        xi=1;
}

function convertir_hexadecimal(valor){
		var resul_div = [];
		var entradas = 0;
		var resultado_hexadecimal = '';
		while(valor > 0){
			residuo = parseInt(valor %16);
			valor = parseInt(valor/16);
			resul_div[entradas] = residuo;
			entradas++;
		}
		for (var i = resul_div.length - 1; i >= 0; i--) {
			resultado_hexadecimal += resul_div[i];
		}
		pantalla.innerHTML=resultado_hexadecimal;
		x=resultado_hexadecimal;
        op="no";
        xi=1;
}