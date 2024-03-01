function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 5);
console.log("El resultado es", resultado);


let global1=6;
let global2=4;

function resta(){
    return global1-global2;
}

let resultadoResta = resta()
console.log("El resultado es", resultadoResta);


let global3=12;
let global4=2;

function restaPrueba(){
    let local=10;
    console.log(local,"variable local");
    console.log(global3,"variable global");
    local=global3;
    console.log(local,"nueva variable local");
    console.log(global4,"variable global 2");
    global4=global3;
    console.log(global4,"nueva variable global 2");
}

let prueba= restaPrueba();
/*console.log(prueba);*/

let global5=10;

function sumaPrueba(){
    let local=2
    return 6+local;
}

let resultadoSumaPrueba = sumaPrueba()
console.log("El resultado de la suma es", resultadoSumaPrueba);

