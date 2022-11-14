const valor1 = document.getElementById('calculo1');
const valor2 = document.getElementById('calculo2');
const boton = document.getElementById('botonCalcular');
const resultado = document.getElementById('resultado');
const form = document.getElementById('formulario');

// Cuando usemos addEventListener no debemos de usar los parentesis de nuestra funcion.

// addEventListener se usa mas ya que ayuda la legibilidad de codigo y pulcritud del HTML.

// [variable].addEventListener([evento], [funcion]);

boton.addEventListener('click', calcular);

function calcular(){
	let suma = parseInt(valor1.value) + parseInt(valor2.value);
	resultado.innerText = 'Resultado: ' + suma;
}

// ======================================================

// Cuando metemos los inputs y botones en un <form>, y le damos click al boton de calcular se hace refresh, por que? Porque intepretan que el ultimo boton de nuestro formulario lo tomara como un boton de tipo submit, este boton cambia la URL.

const valor1Form = document.getElementById('valor1');
const valor2Form = document.getElementById('valor2');
const resultadoSubmit = document.getElementById('resultadoSubmit');
const botonSubmit = document.getElementById('botonSubmit');

form.addEventListener('submit', submitForm);

function submitForm(event){
	console.log({event});
	event.preventDefault();	// Con esto ya no se va a hacer el refresh

	let suma = parseInt(valor1Form.value) + parseInt(valor2Form.value);
	resultadoSubmit.innerText = 'Resultado: ' + suma;
}