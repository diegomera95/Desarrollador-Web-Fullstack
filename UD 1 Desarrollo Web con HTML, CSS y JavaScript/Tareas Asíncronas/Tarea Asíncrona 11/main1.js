/* JS Document */
function final(xnom,xsb,xnh,){
    var xbon,sf,nom,sb,nh;
    
    nom=parseInt(xnom);
    sb=parseInt(xsb);
    nh=parseInt(xnh);

    if(nh>0){
        xbon=sb*0.07;
    }else{
        xbon=0;
    }

    sf=sb+xbon;

    alert("La bonificación es de: "+xbon.toFixed(2)+
    " y el sueldo final es de: "+sf.toFixed(2));

}