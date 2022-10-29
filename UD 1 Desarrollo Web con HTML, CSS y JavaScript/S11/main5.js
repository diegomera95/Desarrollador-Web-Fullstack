/* JS Document */
function mayor(xvendedor,xventa1,xventa2,xventa3,xventa4,xventa5){
    var xmayor,venta1,venta2,venta3,venta4,venta5;
    xmayor=0;
    vendedor=xvendedor;
    venta1=parseInt(xventa1);
    venta2=parseInt(xventa2);
    venta3=parseInt(xventa3);
    venta4=parseInt(xventa4);
    venta5=parseInt(xventa5);

    if(venta1>xmayor){
        xmayor=venta1;
    }
    if(venta2>xmayor){
        xmayor=venta2;
    }
    if(venta3>xmayor){
        xmayor=venta3;
    }
    if(venta4>xmayor){
        xmayor=venta4;
    }
    if(venta5>xmayor){
        xmayor=venta5;
    }
    document.write("<h1>"+"Registro de Ventas"+"</h1>");
    document.write("<hr>");
    document.write("<h3>"+"Vendedor: "+vendedor+"</h3>");
    document.write("Venta 1: "+venta1+"<br>");
    document.write("Venta 2: "+venta2+"<br>");
    document.write("Venta 3: "+venta3+"<br>");
    document.write("Venta 4: "+venta4+"<br>");
    document.write("Venta 5: "+venta5+"<br>");
    document.write("<br>");
    document.write("Venta Mayor: "+xmayor);

}