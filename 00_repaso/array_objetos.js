// Arrays => cuando lo que haremos en un elemento es lo mismo que en todos los demas

// Objeto => cuando los nombres de cada elemento son importantes para nuestro algoritmo

let array = ['a', 'b', 'c'];

function imprimirPrimerElemento(arreglo){
	console.log([0]);
}

imprimirPrimerElemento(array);


function imprimirElementos(arreglo){
	for (let i = 0; i < arreglo.length; i++){
		console.log(arreglo[i]);
	}
}

imprimirElementos(array)


let objeto = {
	nombre: 'David',
	edad: 16,
	comidaFavorita: ['Carne', 'Atun', 'Arroz']
}

console.log(Object.values(objeto))