var readlineSync = require('readline-sync');


const tareas =[{
		"id": 1,
		"descripcion": "dormir",
		"estado": false

	},
	{
		"id": 2,
		"descripcion": "salir",
		"estado": true

	}]



do {
	var op = readlineSync.question('Opciones \n 1) Mostrar \n 2) agregar \n 3) borra  \n 4) Completar tarea \n');

	switch (op) {

		case '1':
			//imprimir el arreglo
			function imprimir() {

				for (let i = 0; i < tareas.length; i++) {
					console.log(tareas[i]);

				}

			}
			console.log(imprimir());

			//console.log('El usuario es de ot');

			break;


		case '2':
			var id = readlineSync.question('Digite id \n');

			var des = readlineSync.question('Digite descripcion \n');
			var estado = readlineSync.question('Digite estado  \n');
            
			


			//agregamos otro objeto
			let tarea = {
				"id": id,
				"descripcion": des,
				"estado": estado,

			}
			tareas.push(tarea);
			
            
			//tareas.push(id, des, estado);

			//console.log('El usuario es de otro pais');
			//imprimir el arreglo
			function imprimir() {

				for (let i = 0; i < tareas.length; i++) {
					console.log(tareas[i]);

				}

			}
			console.log(imprimir());
              
			break;

		case '3':


			//funcion borra
			function borra(a) {
				for (const key in tareas) {
					if (tareas[key].id == a) {
						//console.log('contacto ${carros[key].nombre} ${xxx[key].apellido} eliminado');
						console.log("eliminado " + tareas[key].descripcion);

						tareas.splice(key, 1);
					}
					//carros.pop();
				}
			}

			//console.log('programa cerrado');
			var nombre = readlineSync.question('Digite id a borrar \n');

			console.log(borra(nombre));

			function imprimir() {

				for (let i = 0; i < tareas.length; i++) {
					console.log(tareas[i]);

				}

			}
			console.log(imprimir());


			break;
		case '4':
			function imprimir() {

				for (let i = 0; i < tareas.length; i++) {
					console.log(tareas[i]);

				}

			}

			console.log(imprimir());

			var id = readlineSync.question('Digite el  id editar \n');

			var est = readlineSync.question('Digite estado \n');
             
			actualizar(id, est);
			
			//funcio actualizar
			function actualizar(a, b) {
 
				tareas[a].estado = b;
				console.log("Actualizamos ");

			}

			//console.log('programa cerrado');


			break;
		case '5':

			console.log('programa cerrado');


			break;


	}
} while (op != 5);


console.log('Hi ' + op + '!');





/*var readlineSync = require('readline-sync'),
  animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
  index = readlineSync.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');*/