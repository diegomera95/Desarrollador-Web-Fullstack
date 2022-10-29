/* JS Document */
function final(xnum){
    var r,num;
    
    num=parseFloat(xnum);

    if(num>500){
        r=num*1.18;
        alert("El resultado final es de: "+r.toFixed(2));
    }else{
        r=num;
        alert("El valor "+num+" no supera los 500");
    }
}