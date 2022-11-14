function nombreCompleto(nombre, apellido){
	return nombre + ' ' + apellido;
}

//  =====================================

function presentacion(nombre, apellido, nick){
	const completeName = nombreCompleto(nombre, apellido);
	
	console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nick}`)
}

presentacion('David','Sanchez', 'ChiniGumy')	