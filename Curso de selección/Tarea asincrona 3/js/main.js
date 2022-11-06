/*var value1;
var primo;

value1 = parseInt(prompt('Ingrese el número:', ''));
i=2;
primo = true;

do{
    if (value1 % i == 0){
        primo = false;
    }
    i++;
}while (i < value1-1);

if (primo == true){
        document.write(value1 + " es un número primo");  
} else{
    document.write(value1 + " no es un número primo");
}*/
    //decalracion de variables
    let num;
    let contador=0;
    let i=2;
    //entrada
    num=parseInt(prompt('Ingrese el número:', ''));
    //proceso
    if (num < 2){
        contador=0;
    }
    while (i<=num-1){
        if(num%i===0){
            contador=contador+1;
        }
        i++;
    }

    if (contador>0) {
        document.write(+num+" no es número primo");
    } else{
        document.write(+num+" es número primo");
    }
