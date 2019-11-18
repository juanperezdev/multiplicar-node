const { crearArchivo } = require('./multiplicar/multiplicar');
const colors = require('colors');

let base = 5;




crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));