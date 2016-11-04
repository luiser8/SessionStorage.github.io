function checkSession(){
	if(sessionStorage.key('session_start')){
		console.log('si hay una session ' + sessionStorage.getItem('session_start'));
	}else{
		console.log('no hay una session');
	}
}

function idleLogout(){
	var t;
	window.onload = resetTimer;
	window.onmousemove = resetTimer;
	window.onkeypress = resetTimer;

	function logout(){
		if(sessionStorage.key('session_start')){
			alert('se acabo tu sesion');
			removeSessionT();
			window.location.replace('index.html');
			console.log('cerrando');
		}
	}

	function resetTimer(){
		clearTimeout(t);
		t = setTimeout(logout, 500000);
	}
}

function removeSessionT(){
	if(sessionStorage.key('session_start')){
			sessionStorage.removeItem('session_start');
			location.replace('./');
	}else{
		console.log('No hay session para cerrar');
	}
}

idleLogout();