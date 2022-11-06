function calcular(){
    //decalracion de variables
    var juguete,cant,precio,n;
    var subt,total,dsct,igv,total;
    //entrada
    n=document.getElementById("juguetes").selectedIndex;
    juguete=n;
    cant=parseInt(document.getElementById("cantidad").value);
    //proceso
    switch(n){
        case 1:
            precio=70.99;
            break;
        case 2:
            precio=78.99;
            break;
        case 3:
            precio=100.99;
            break;
        case 4:
            precio=58.50;
            break;
        case 5:
            precio=35.00;
            break;
        default:
            alert("Numero fuera del intervalo");
    }
    //invocar funciones
    subt=cant*precio;
    dsct=descuento(cant)*subt;
    igv=subt*0.18;
    total=subt-dsct-igv;
    //salida
    document.getElementById('subtotal').value=subt.toFixed(2);
    document.getElementById('descuento').value=dsct.toFixed(2);
    document.getElementById('igv').value=igv.toFixed(2);
    document.getElementById('total').value=total.toFixed(2);
}
//declarar funciones con parametros y retornando de valores
function descuento(xcant){
    let descuento;
    if (xcant<10){
        descuento=0.035;
    } 
    if (xcant>=10 && xcant<=20){
        descuento=0.07;
    } 
    if (xcant>20){
        descuento=0.095;
    }
    return(descuento);
}

