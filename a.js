const fs = require('fs');


const data = JSON.parse(fs.readFileSync('./datos.json', 'utf8'));
console.log(data.usuarios);
console.log(usuario.nombre);
