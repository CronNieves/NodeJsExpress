const express = require('express');
const morgan = require('morgan');
const app = express();

//Middlewares
//El next hace que continuo el el codigo luego del use
/*app.use((req,res, next) => {
    console.log('request url: ' + req.url);
    next();
});*/
//Middlewares para loguear los request
app.use(morgan('combined'));


app.get('/', (req, res) => { 
    res.end('Hellow World');
});

app.get('/obtenerHola', (req, res) => { 
    res.end('Hola');
});

app.get('*', (req, res) => { 
    res.end('Archivo no encontrado');
});

app.listen(3000, function() {
    console.log('Servidor Online');
});
