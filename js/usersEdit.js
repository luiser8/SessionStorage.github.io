//Muestra la session
var data2 = sessionStorage.getItem('session_start');
document.getElementById('session').innerHTML = data2.toUpperCase();
document.getElementById('userName').innerHTML = data2.toUpperCase();