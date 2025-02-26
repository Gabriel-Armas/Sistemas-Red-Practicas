console.log("Inicio del programa");

setTimeout(() => {
    console.log("Primer Timeout");
}, 3000);

setTimeout(function(){
    console.log("Segundo Timeout");
}, 0);

setTimeout(() => {
    console.log("Tercer Timeout");
}, 0);

console.log("Fin del programa");