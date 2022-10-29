var user;
var password;

user = prompt('Ingrese usuario', '');
password = prompt('Ingrese contraseña', '');

/*
if (user == 'admin') {
    document.querySelector('body').innerHTML("<h2>Bienvenido!<h2>");
} else{
document.querySelector('body').innerHTML("<h1>Acceso Denegado<h1>");
}
*/

var isUserValid = user =='admin' || user ==='ADMIN';
var isPasswordValid = password == 'admin'

if (isUserValid && isPasswordValid){
    document.write("<h2>Bienvenido!<h2>");  
} else{
    document.write("<h1>Acceso Denegado<h1>");
}