const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, ()=>console.log("Servidor en puerto 3000 corriendo"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/registro.html', (req, res) => {
    res.sendFile(__dirname + '/views/registro.html')
});

app.get('/loggin.html', (req, res) => {
    res.sendFile(__dirname + '/views/loggin.html')
});

app.get('/detalleProducto.html', (req, res) => {
    res.sendFile(__dirname + '/views/detalleProducto.html')
});

app.get('/listadorProducto.html', (req, res) => {
    res.sendFile(__dirname + '/views/listadorProducto.html')
});

app.get('/carrito.html', (req, res) => {
    res.sendFile(__dirname + '/views/carrito.html')
});