var calculadora = parseInt(prompt("Escoja la opcion que desee: \n" +
"1. Suma \n "+
	"2. Resta \n "+
	"3. Multiplicacion \n "+
	"4. Division \n "+
	"5. Mayor que \n "+
	"6. Menor que \n"+
	"7. Resto-Modulo \n "));

var num1 = parseInt(prompt("Ingresa el primer número"));
var num2 = parseInt(prompt("Ingresa el segundo número"));

switch(calculadora){
	case 1:
		var suma = num1 + num2;
		window.alert("Y su respuesta de la suma es:"+ suma);
		break;
	case 2:
		var resta = num1 - num2;
		window.alert("Y su respuesta de la resta es:" + resta);
		break;
	case 3:
		var multiplicacion = num1 * num2;
		window.alert("Y su respuesta de la multiplicacion es:" + multiplicacion);
		break;
	case 4:
		var division = num1 / num2;
		window.alert("Y su respuesta de la division es:" + division);
		break;
	case 5:
		var mayor = Math.max(num1, num2);
		window.alert("El mayor es:" + mayor);
		break;
	case 6:
		var menor = Math.min(num1, num2);
		window.alert("La menor es:" + menor);
		break;
	case 7:
		var residuo = (num1/100)*num2;
		window.alert("El residuo es:" + residuo);
		break;
		
	default:
		window.alert("error");
		break;
	
}