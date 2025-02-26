const datosClima = [    
    { 
        ciudad: 'Ciudad de México', temperatura: 25 
    },    
    { 
        ciudad: 'Bogotá', temperatura: 16 
    },   
    { 
        ciudad: 'Buenos Aires', temperatura: 20 
    },    
    { 
        ciudad: 'Madrid', temperatura: 30 
    },    
    { 
        ciudad: 'Lima', temperatura: 22 
    } 
];

const getClima = (ciudad) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const clima = datosClima.find(c => c.ciudad === ciudad)?.temperatura;
        (clima)
            ? resolve(clima)
            : reject(`No hay información para la ciudad ${ciudad}`);
        }, 2000);
    });
}

const getClimaAsyncAwait = async (ciudad) => {
    try {
        const clima = await getClima(ciudad);
        return `La temperatura en ${ciudad} es de ${clima}°C`;
    }
    catch (err) {
        throw err;
    }
}

const getClimaThenCatch = (ciudad) => {
    return getClima(ciudad)
    .then(clima => `La temperatura en ${ciudad} es de ${clima}°C`)
    .catch(err => {throw err});
}

const obtenerClima = (funcion, ciudad) => {
    funcion(ciudad)
        .then(mensaje => console.log(mensaje))
        .catch(err => console.log(err.message || err));
};

obtenerClima(getClimaAsyncAwait, 'Bogotá');
obtenerClima(getClimaThenCatch, 'Madrid');
obtenerClima(getClimaAsyncAwait, 'Ciudad de México');
obtenerClima(getClimaThenCatch, 'Lima');
obtenerClima(getClimaAsyncAwait, 'No existe');
obtenerClima(getClimaThenCatch, 'No existe');