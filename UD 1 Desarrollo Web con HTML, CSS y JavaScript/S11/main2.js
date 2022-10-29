/* JS Document */
function mayor(xnum1,xnum2,xnum3,){
    var xmayor,num1,num2,num3;
    xmayor=0;
    num1=parseInt(xnum1);
    num2=parseInt(xnum2);
    num3=parseInt(xnum3);

    if(num1>xmayor){
        xmayor=num1;
    }
    if(num2>xmayor){
        xmayor=num2;
    }
    if(num3>xmayor){
        xmayor=num3;
    }
    alert("El número mayor es: "+xmayor);

}