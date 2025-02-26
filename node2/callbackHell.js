const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callack) => {
const salario = salarios.find(s => s.id === id)?.salario;
    if (salario) {
        callack(null, salario);
    } else {
        callack(`No existe salario para el id ${id}`);
    }
}

//Cambiar el id
let id = 3;
getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if (err) {
            console.log('ERROR!');
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
    });
});

/*
const getUsuarioByID = (id, callback) => {
    
    const user = {
        id,
        nombre: 'Lord Farquaad'
    }

    callback(user);
}

//PERMITE RECIBIR FUCIONES COMO ARGUMENTO, REALIZA SU OPERACION Y EL RESULTADO REGRESA AL MISMO LUGAR DONDE SE LLAMO
//CALLBACKS SON FUNCIONES QUE SE PASAN COMO ARGUMENTO A OTRAS FUNCIONES
getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre);
})
*/