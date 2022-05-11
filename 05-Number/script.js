//Sesion 05- Numbers
//Declaracion de variables numéricas(enteros y con decimales)
//let a = 5;

console.log(a);

//Flotante
//let b = 0.1;
console.log(b); 

//Precision
//let c = 0.2;

console.log(b+c)
//truco
console.log(Math.round((0.1 +  0.2) * 100)/100);

//2do Video

//Principales Operaciones
//Representacion de numeros en cadena de texto
//Redondear numeros decimales

//let a =  3.5;
//let b = 4.8;

//Suma (+)
console.log(a + b)

//Resta 
console.log(a - b)

//multiplicacion
console.log(a * b)

console.log(a/b)

//Representacion de los numeros
console.log(typeof a);
let a_s = a.toString()

console.log(a_s);
console.log(typeof a_s)

//Redonde de numeros decimales

//let c = 3.3;
//let d = c * 3;

console.log(d)

// .tofixed convierte el numero en cadena de texto

console.log(d.toFixed(4))

// limitar el numero de  decimles al valor x
let e = 1839.12324566565;
let f = 2213556153215;

console.log(e.toFixed(2))
cconsoleonsole.log(f.toPrecision(7))

//Operado.valueof() Obtener valores numericos a partir de literales
//Nan - infinity
//numeros hexadecimales

let  numHex = '0x3a5b7';

console.log(parseInt(numHex,16))





//como convertir los string a valores numericos con number  parseint 
//parsefloat

let numero = '5.89';
let  num2 = 17.2;

console.log(typeof numero); 
console.log(numero + num2)

console.log(Number(numero) + num2)

console.log(parseInt(numero))
console.log(parseFloat(numero))

let nume3 =  4;
console.log(parseInt(nume3))
console.log(parseFloat(3))



//Obtener los valores  maximo and  minimo en js

let max =  Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;


console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2**1024)
