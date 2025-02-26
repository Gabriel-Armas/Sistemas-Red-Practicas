const express = require('express');
const app = express();
const crypto = require('crypto');

//Middleware para parsear JSON en la peticion
//Middleware en nodejs solamente es un componente que se va a estar mandando a llamar cuando se ejecute la aplicacion
app.use(express.json());

//endpoint
app.get('/etag', (request, response) => {
    const content = {mensaje: "Contenido con Etag2"}; //Si lo cambio y vuelvo a salicitar, me manda el nuevo contenido
    const jsonContent = JSON.stringify(content);
    const etag = crypto.createHash('md5').update(jsonContent).digest('hex');
    if (request.header['if-none-match'] == etag) {
        return response.status(304).end();
    }
    response.set('Etag', etag);
    response.json(content);
});

app.listen(3003, () => {
    console.log('Server running at http://localhost:3003');
})