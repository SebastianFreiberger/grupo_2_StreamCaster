const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const cookies = require('cookie-parser');
const session = require('express-session');

const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(express.static('public'));

app.use(cookies());
app.use(userLoggedMiddleware);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);

app.get('*', function(req, res){
	res.render('error404');
  });

app.listen(3000, ()=>console.log("Servidor en puerto 3000 corriendo"));
