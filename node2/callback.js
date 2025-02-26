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