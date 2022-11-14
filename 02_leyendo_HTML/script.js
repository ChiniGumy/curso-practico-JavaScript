console.log('ola mundo');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('.parrafito' );
const input = document.querySelector('input');


// getElementsByClass : Selecciona todos los elementos de una clase.

// getElementById : Selecciona un elemento por su ID.

// querySelectorAll : Selecciona todos los elementos.

// querySelector : Selecciona el primer elemento encontrado.



// Cuando imprimes el h1, nos muestra cual es el elemento que renderiza. Pero si lo imprimimos desde un obejeto nos saldra los atributos.

// console.log(h1)

console.log({
	h1,
	p,
	parrafito,
	pid,
	input,
});