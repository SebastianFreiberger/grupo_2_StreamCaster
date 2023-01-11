const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, ()=>console.log("Servidor en puerto 3000 corriendo"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/registro.html')
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
});

app.get('/detalleProducto', (req, res) => {
    res.sendFile(__dirname + '/views/detalleProducto.html')
});

app.get('/listadorProductos', (req, res) => {
    res.sendFile(__dirname + '/views/listadorProductos.html')
});

app.get('/carrito', (req, res) => {
    res.sendFile(__dirname + '/views/carrito.html')
});


