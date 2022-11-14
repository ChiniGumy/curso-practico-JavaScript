var antiguo;	 			// forma antigua de JS puede dar errores en el futuro (scope)
let nuevo; 					// forma nueva, nos permite cambiar el valor de la variable
const constante = 'ola';	// no se puede cambiar el valor a una constante

let variable;				// Declarar variable
variable = 'variable';		// Inicializar variable

let sumarStrings = 'ola ' + 'David';
console.log(sumarStrings)


let nombre = 'David';
let apellido = 'Sanchez Romero';
let nombreUsuario = 'ChiniGumy';
let edad = 16;
let correo = 'dsebastiansr@hotmail.com';
let isMayorEdad = false;
let dineroAhorrado = 200;
let deudas = 10;

let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;

console.log(nombreCompleto);
console.log(dineroReal);