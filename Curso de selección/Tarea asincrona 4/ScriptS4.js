function es_par(){
    var numero = document.getElementById("numero").value;
    var text ="";
    for(let x = 2; x <= numero; x+=2){
        text += x +" ";
    }
    document.getElementById("res").innerHTML = text;
}