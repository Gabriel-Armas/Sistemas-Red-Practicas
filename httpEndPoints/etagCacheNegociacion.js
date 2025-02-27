const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

app.get('/info', (request, response) => {
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

app.get('/preferencia', (request, response) => {
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

app.get('/cache', (request, response) => {
    response.set({
        'Cache-Control': 'public, max-age=30',
        'Expires': new Date(Date.now() + 30000).toUTCString(),
        'Pragma': 'no-cache'
    });
    response.json({mensaje: "Esta respuesta se puede cachear por 30 segundos"});
});

app.get('/etag', (request, response) => {
    const content = {mensaje: "Contenido con Etag"};
    const jsonContent = JSON.stringify(content);
    const etag = crypto.createHash('md5').update(jsonContent).digest('hex');
    if (request.header['if-none-match'] == etag) {
        return response.status(304).send('Not Modified');
    }
    response.set('Etag', etag);
    response.json(content);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})