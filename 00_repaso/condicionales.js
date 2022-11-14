const tipoDeSuscripcion = 'Basic';

if (tipoDeSuscripcion === 'Free'){
	console.log('Solo puedes tomar los cursos gratis');

} else if (tipoDeSuscripcion === 'Basic') {
	console.log('Puedes tomar casi todos los cursos de Platzi por un mes');

} else if (tipoDeSuscripcion === 'Expert') {
	console.log('Puedes tomar casi todos los cursos de Platzi por un año');

} else if (tipoDeSuscripcion === 'ExpertDuo') {
	console.log('Puedes tomar todos los cursos de platzi tu y una persona mas durante un año ');
}