var os = require('os');

var messageUser = 'Espacio Vacio Inicial '+os.freemem()/1024;
var vector = [];

for (var i = 0; i<= 1000000; i++){
    vector.push(i);
}

messageUser += 'Espacio vacio al Final '+os.freemem()/1024;

console.log(messageUser);