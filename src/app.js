const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');

app.use(express.static('public'));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/user', userRouter);

app.listen(3000, ()=>console.log("Servidor en puerto 3000 corriendo"));
