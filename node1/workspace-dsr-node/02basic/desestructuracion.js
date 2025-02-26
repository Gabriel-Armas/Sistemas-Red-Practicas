const personaje = {
    nombre: "Peter",
    apellido: "Parker",
    poder : "Agilidad",
    getNombre(){
        return `${this.nombre} ${this.apellido}`;
    }
}

// DESESTRUCTURACION
// Debe de coincidir con lo dictado en el objeto
const {nombre, apellido, poder, edad = 20} = personaje;

// console.log(nombre, apellido, poder, edad);

console.log(personaje.getNombre());