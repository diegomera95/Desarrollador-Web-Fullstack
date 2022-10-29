function saludo() {
    alert("Hola mundo");
}

function capturar() {
    var numero = document.getElementById("numero").value;
    if(numero % 2 == 0){
        console.log(numero);
        alert("El numero es par");
    } else{
    console.log(numero);
    alert("El numero es impar");
    }
}