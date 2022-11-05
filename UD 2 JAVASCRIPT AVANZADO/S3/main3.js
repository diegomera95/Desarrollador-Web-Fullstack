//declaracion de funciones con parametros y retornando de valroes
function finvertir(cant){
    var ci=0;
    while (cant>0){
        d=cant%10 //digito de la cantidad (residuo)
        ci=(ci*10)+d;
        cant=parseInt(cant/10);
    }
    return(ci);
}