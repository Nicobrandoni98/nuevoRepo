<!-- Crea un diagrama similar que describa la situación en la que el usuario crea una nueva nota en la página https://studies.cs.helsinki.fi/exampleapp/notes escribiendo algo en el campo de texto y haciendo clic en el botón Save.

Si es necesario, muestra las operaciones en el navegador o en el servidor como comentarios en el diagrama. -->

1- Al ingresar los datos, se hace una solicitud HTTP POST al servidor new_note. 
2- Se realiza una redireccion de URL en la que el servidor realiza una solicitud HTTP GET a la direccion notes. 
3- Se vuelve a cargar la pagina notas y esto provoca tres solicitudes mas. 
4- Se obtiene el main.css, main.js y los datos 'data.json'
