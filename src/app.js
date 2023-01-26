const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');

const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);

app.listen(3000, ()=>console.log("Servidor en puerto 3000 corriendo"));
