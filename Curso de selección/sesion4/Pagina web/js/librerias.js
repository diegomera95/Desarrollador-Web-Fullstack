// 0,1,2,3,4,...,9 = 10 veces
/* for(var i =0; i <= 9; i++){
    console.log("i=" + i);

}
*/

for(var i =0; i <= 9; i++){
   pintar(i);

}


var n = 0
while(n <= 9){
    pintar(n);
    n++;
}


var n1 = 10
do {
    n1++;
    pintar(n1);
}while(n1 <= 9);

function pintar(valor) {
    console.log("i="+ valor)
    document.getElementById("contenido").append("valor=" + valor);
}

let elementos = ["azul", "blanco", "rojo", "amarillo"];


console.log("tamaño: " + elementos.length);
console.log("Primer Elemento: " + elementos[0]);
console.log("Ultimo elemento: " + elementos[elementos.length - 1]);

for(var i = 0; i < elementos.length; i++){
    console.log("elemento["+i+"] = " + elementos[i]);
}
