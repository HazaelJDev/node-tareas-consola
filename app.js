const {argv} = require('./config/yargs');
const colors = require('colors/safe');
const { crearTarea, mostrarLista, actualizarTarea, borrarTarea } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearTarea(argv.descripcion);
    break;
    case 'listar':
        let listado = mostrarLista();
        for (let tarea of listado) {
            console.log(colors.blue('############## Tarea ##############'));
            console.log(`  Descripcion: ${tarea.descripcion}`);
            console.log(`  Estado: ${tarea.completado}`);
            console.log(colors.blue('###################################'));
        }
        break;
    case 'actualizar':
        let actualizado = actualizarTarea(argv.descripcion, argv.completado);
        (actualizado) ? console.log(colors.blue('¡Tarea actualizada!')) : console.log(colors.red('¡Hubo un error al actualizar tarea!'));
    break;
    case 'borrar':
        let borrado = borrarTarea(argv.descripcion);
        (borrado) ? console.log(colors.green('¡Tarea borrada!')) : console.log(colors.red('¡Hubo un error al actualizar tarea!'));
    break;
    default:
        console.log(colors.red(`¡Comando no reconocido: ${comando}!`));
    break;
}