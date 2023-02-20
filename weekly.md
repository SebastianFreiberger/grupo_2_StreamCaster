<!-- ARCHIVO PARA ENTREGAR RESUMIENDO TAREAS COMPLETADAS, IMPEDIMENTOS Y SOLUCIONES PROPUESTAS INDICANDO LOS INTEGRANTES -->
SPRINT 3
Link de trello para organizar el sprint numero 3:
https://trello.com/b/C1rY1w3L/sprint-3

Tareas completadas:

- Se realizo el encarpetado
- Se realizo la separacion de rutas entre user y contenido principal del sitio web
- Se crearon los controladores necesarios para users y para contenido principal
- Se crearon las vistas correspondientes para crear y editar un producto ya subido.

Impedimentos:

- Uno de los impedimentos mayores, es la modalidad en la que el usuario que pueda modificar un producto, o editar un producto, acceda a esa funcionalidad.

Soluciones: 

- Pensamos en agregar un lapiz de editar (icono) en el listador de productos, que solo podra ver el usuario, con el objetivo de ir a la vista de edicion.


SPRINT 4
https://trello.com/b/ZKWWpFqh/sprint-4

23/01
Repaso lo que conversamos recién. 
1. Matías toma el tablero. 
2. Yo voy a estar llevando unos archivos JSON para la clase de mañana 
3. Para todo lo de CRUD nos vamos a volver a juntar, probablemente el miércoles, ya que consideramos que hacerlo juntos es mejor.

25/01
Hernan preparó el JSON de productos
Armado en equipo del CRUD, solo falta el DELETE

30/01
Finalización en equipo del DELETE. Solo falta revisar el CRUD
Incorporar el JSON de usuarios

20-2
Registro de usuarios:
1. Guarda la información en el JSON (ya funcionaba, se sumó la posibilidad de adjuntar imagen de acuerdo a requisito del SPRINT)
2. Todos los campos tienen validación. 
    Nombre, apellido y contraseña: solo que no esté vacío el campo
    Email: que no esté vacío y que sea un email válido
    Imagen: Originalmente pensaba que sea optativo este campo. Sin embargo quedó obligatorio ya que si cargaba un nuevo usuario sin imagen, me tiraba un error por filename. Si alguno lo puede ver genial. Quedo con dos validaciones: que no este vacio y que sea una extensión permitida