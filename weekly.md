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

SPRINT 5
https://trello.com/b/9IImGN54/sprint-5
17-2
Login de usuarios:
1. Toma la información en el JSON del usuario que va a logearse y checkeamos si el mail del usuario existe y si la contraseña es la correcta, en caso de que las credenciales sean las correctas permite logear y mantener la sesion iniciada, de lo contrario, avisa que las credenciales o la contraseña son incorrectas.
2. Una vez logeado, el usuario es redirigido a su perfil mostrando su nombre y foto elegida, asi como tambien las opciones de registro y login desaparecen, dejando solo en vista la opcion de perfil(profile)
3. Agregamos boton de cerrar sesion para la destruccion de la cookie que mantiene la sesion iniciada.


20-2
Registro de usuarios:
1. Guarda la información en el JSON (ya funcionaba, se sumó la posibilidad de adjuntar imagen de acuerdo a requisito del SPRINT)
2. Todos los campos tienen validación. 
    Nombre, apellido y contraseña: solo que no esté vacío el campo
    Email: que no esté vacío y que sea un email válido
    Imagen: Originalmente pensaba que sea optativo este campo. Sin embargo quedó obligatorio ya que si cargaba un nuevo usuario sin imagen, me tiraba un error por filename. Si alguno lo puede ver genial. Quedo con dos validaciones: que no este vacio y que sea una extensión permitida

    
SPRINT 6
https://trello.com/b/VNecPDpB/sprint-6
27-02
1. Compartimos del DER de nuestro proyecto para su revisón.
2. Se genera el SPRINT 6 en el Trello

02-03
Aprobación del SQL para empezar a implementar los modelos en el proyecto.

13-03
Generación de modelos de Usuaarios y Productos

20-03
Modificacion del Controller y Routers para Usuarios y sus validaciones

27-03
Modificacion del Controller y Routers para Productos y sus validaciones

SPRINT 7
https://trello.com/b/XeqoSi71/sprint-7
03/04
Terminaciones de SPRINT actual
Pendientes del SPRINT anterior

10/04
Aun resolviendo pendientes del SPRINT anterior
Listado de productos operativo
Edición de productos operativo
