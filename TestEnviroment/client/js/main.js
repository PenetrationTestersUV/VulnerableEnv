const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

function IniciarSesion(){
	var nombre = document.getElementById('inputLoginUser').value;
	var password = document.getElementById('inputLoginPassword').value;
	console.log(nombre, password);
	GetLogin(nombre,password);
}

function GetLogin() {
	console.log('que onda')
	fetch('https://reqres.in/api/users?page=2')
		.then(res => res.json())
		.then()
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
