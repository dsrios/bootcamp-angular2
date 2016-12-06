var PI = 3.1416;

function sumar(x1, x2) {return x1+x2;}

function restar(x1, x2){return x1-x2;}

function div (x1, x2){
    if (x2==0){
        mostrarDivision();
    }else{
        return x1/x2;
    }
}

function mostrarDivision(){
    console.log('No se puede dividir por cero');
}

exports.sumar=sumar;
exports.restar=restar;
exports.div=div;
exports.PI=PI;
exports.mostrarDivision=mostrarDivision;


