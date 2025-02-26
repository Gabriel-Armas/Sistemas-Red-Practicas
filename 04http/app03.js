const express = require('express');
const app = express();

//Middleware para parsear JSON en la peticion
//Middleware en nodejs solamente es un componente que se va a estar mandando a llamar cuando se ejecute la aplicacion
app.use(express.json());

//endpoint
app.get('/cache', (request, response) => {
    response.set({
        'Cache-Control': 'public, max-age=60',
        'Expires': new Date(Date.now() + 60000).toUTCString(),
        'Pragma': 'no-cache'
    });
    response.json({mensaje: "Esta respuesta se puede cachear por 60 segundos"});
});

app.listen(3002, () => {
    console.log('Server running at http://localhost:3002/');
})