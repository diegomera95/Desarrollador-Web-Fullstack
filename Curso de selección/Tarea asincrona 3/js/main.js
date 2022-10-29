var value1;
var primo;

value1 = parseInt(prompt('Ingrese el número:', ''));
i=2;
primo = true;


do{
    if (value1 % i == 0){
        primo = false;
    }
    i++;
}while (i < value1);

if (primo == true){
        document.write(value1 + " es un número primo");  
} else{
    document.write(value1 + " no es un número primo");
}