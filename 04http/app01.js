const express = require('express');
const app = express();

//Middleware para parsear JSON en la peticion
//Middleware en nodejs solamente es un componente que se va a estar mandando a llamar cuando se ejecute la aplicacion
app.use(express.json());

//endpoint
app.get('/data', (request, response) => {
    const data = {mensaje: "Desarrollo de sistemas en red"}
    const accept = request.accepts(['json', 'xml', 'html']);

    if (accept === 'json') {
        response.json(data);
    } else if (accept === 'xml') {
        response.type('application/xml');
        response.send(`<mensaje>${data.mensaje}</mensaje>`);
    } else if (accept === 'html') {
        response.type('text/html');
        response.send(`<h1>${data.mensaje}</h1>`);
    } else {
        response.status(406).send('Not Acceptable');
    }
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})