const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();


//Middlewares
//El next hace que continuo el el codigo luego del use
/*app.use((req,res, next) => {
    console.log('request url: ' + req.url);
    next();
});*/

//Middlewares para loguear los request
app.use(morgan('combined'));


//Archivos
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

//Hbs
hbs.registerPartials(__dirname + '/views/includes');
app.set('view engine','hbs');

//Rutas
app.get('/', (req, res) => { 
    
    res.render('home',{
        nombre: 'Santiago'
    });
});


app.get('/about', (req, res) => { 
    
    res.render('about',{
        nombre: 'Santiago'
    });
});

app.get('*', (req, res) => { 
    res.end('Archivo no encontrado');
});


//Servidor escuchando
app.listen(3000, function() {
    console.log('Servidor Online');
});
