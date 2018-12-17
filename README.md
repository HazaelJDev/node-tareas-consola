## Lista de Tareas Console App
Esta es una aplicación para la creación de una Lista de Tareas desde consola.
El usuario puede crear sus tareas por hacer y despues modificar el estatus de las tareas o eliminarlas como tambien puede visualizarlas.

Despues de descargar el repositorio ejecutar el siguiente comando:
```
npm install
```

Una vez descargadas las dependencias ejecutar el siguiente comando dentro del proyecto
```
node app --help
```
nos indicara cuales son los comandos existentes de la aplicación y como usarla.
### Los comandos son:
    * crear
        * Sirve para crear tareas
    * actualizar
        * Nos ayuda a actualizar el estatus de una tarea ya creada
    * borrar
        * Nos ayuda a borrar tareas que ya fueron realizadas o no, y solo ya no nos sirven
    * listar
        * Nos muestra todas las tareas que existen y su estatus

**Para información mas detallada de los comandos de la aplicación** ejecutar el siguiente comando por ejemplo con el comando _crear_:
```
node app crear --help
```
así podemos observar cuales son los parametros que utiliza cada comando de la aplicación.
