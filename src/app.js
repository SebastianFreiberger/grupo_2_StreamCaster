const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routes/mainRouter');

app.use(express.static('public'));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('./registro', mainRouter);
app.use('./login', mainRouter);
app.use('./detalleProducto', mainRouter);
app.use('./listadorProductos', mainRouter);
app.use('./carrito', mainRouter);
app.use('./creacion', mainRouter);

app.listen(3000, ()=>console.log("Servidor en puerto 3000 corriendo"));
