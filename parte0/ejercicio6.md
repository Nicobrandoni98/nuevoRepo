<!-- Crea un diagrama que represente la situación en la que el usuario crea una nueva nota utilizando la versión de una sola página de la aplicación. -->

1- Al ingresar el contenido se hace una solicitud POST a la direccion new_note_spa que contiene la nota como datos JSON, el content type le dice al servidor que los datos estan representados en formato JSON.
2- El servidor responde con el codigo 201 Created. 
3- El servidor no solicita una redireccion (Esto es upor un controlador de eventos 'preventDefault()') y el navegador permanece en la misma pagina.
4- El controlador de eventos crea una nueva nota, la agrega a la lista con el comando notes.push(note),  vuelve a renderizar la lista de notas en la pagina y envia la nueva nota al servidor.