const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const {argv} = require('yargs')
    .command('crear','Crea una tarea',{descripcion})
    .command('actualizar','Actualiza el estado completado de una tarea',{descripcion,completado})
    .command('borrar', 'Borra una tarea',{descripcion})
    .command('listar','Lista una tarea')
    .help();

module.exports = {
    argv
}