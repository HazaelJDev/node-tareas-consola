const fs = require('fs');
const colors = require('colors/safe');
let listaTareas;

const cargarDB = () =>{
    try {
        listaTareas = require('../db/data.json');
    } catch (error) {
        listaTareas = [];
    }
};

const guardarDB = () => {
    let data = JSON.stringify(listaTareas, null, '\t');
    fs.writeFile('db/data.json',data,err => {
        if (err) throw new Error('No se pudo grabar la informacion',err);
        console.log(colors.blue('¡Datos guardados!'));
    });
};

const crearTarea = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listaTareas.push(porHacer);
    guardarDB();
    return porHacer;
};

const actualizarTarea = (descripcion,completado) => {
    cargarDB();
    let index = listaTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listaTareas[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}
const mostrarLista = () => {
    cargarDB();
    return listaTareas;
};

const borrarTarea = (descripcion) => {
    cargarDB();
    let index = listaTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listaTareas.splice (index,1);
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crearTarea,
    mostrarLista,
    actualizarTarea,
    borrarTarea
}