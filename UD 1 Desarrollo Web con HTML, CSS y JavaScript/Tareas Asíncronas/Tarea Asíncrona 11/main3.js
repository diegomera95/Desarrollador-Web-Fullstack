/* JS Document */
function factorial(xnum){
    var num=parseFloat(xnum);
    var r=1;

    for(var i=1; i<=num; i++){
        r=r*i;
    }
    alert("El factorial del número "+num+" es: "+r);
}