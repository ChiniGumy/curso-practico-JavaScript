const valor1 = document.getElementById('calculo1');
const valor2 = document.getElementById('calculo2');
const boton = document.getElementById('botonCalcular');
const resultado = document.getElementById('resultado');

// Todo lo que se ingresa a un input se guarda como un string.

function calcular(){
	const suma = parseInt(valor1.value) + parseInt(valor2.value);
	resultado.innerText = 'Resultado: ' + suma;
}