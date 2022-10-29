/* primera version

var value1 = prompt('Ingrese el primer valor');
var value2 = prompt('Ingrese el segundo valor');

document.write('La suma es: ' ,'');
document.write(value1 + value2);
document.write(', la resta es: ' ,'');
document.write(value1 - value2);
document.write(', el producto es: ' ,'');
document.write(value1 * value2);
document.write(', la división es: ' ,'');
document.write(value1 / value2);
*/

// Definicion de variables
var value1;
var value2;

value1 = prompt('Ingrese el primer valor', '');
value2 = prompt('Ingrese el segundo valor', '');

//suma
var result1 = parseInt(value1) + parseInt(value2);
document.write('La suma es: ' + result1);

//resta
var result2 = value1 - value2;
document.write(', la diferencia es: ' + result2);

//producto
var result3 = value1 * value2;
document.write(', el producto es: ' + result3);

//cociente
var result4 = value1 / value2;
document.write(', el cociente es: ' + result4);
