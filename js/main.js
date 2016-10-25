/*  Todos los campos son obligatorios, excepto los dos últimos.
    Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
    Para los campos nombre y apellido la primera letra debe ser mayúscula
    Validar que el campo email tenga un formato válido. Ej: name@domain.com
    El campo password debe tener al menos 6 caracteres
    El campo password no puede ser igual a "password" ó "123456" ó "098754"
    El valor seleccionado de bicis, debe ser una de las opciones presentadas

Si algún campo presenta error debe informarse al usuario por medio de un alert.*/

// Variables de los campos, o sea, cada valor de cada campo va a quedar guardado en una variable.

var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var correo = document.getElementById("input-email").value;
var contrasena = document.getElementById("input-password").value; 
var listaBici = document.getElementsByTagName('form-control').value;
function validateForm(){

//Campos obligatorios desde nombre hasta listaBici.
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
	 	alert("Campo obligatorio");
  		return false;
}
	if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
	 	alert("Campo obligatorio");
  		return false; 
}
	if( correo == null || correo.length == 0 || /^\s+$/.test(correo) ) {
	 	alert("Campo obligatorio");
  		return false; 
}
	if( input-password == null || input-password.length == 0 || /^\s+$/.test(input-password) ) {
	 	alert("Campo obligatorio");
  		return false; 
}
	if( form-control == null || form-control.length == 0 || /^\s+$/.test(form-control) ) {
	 	alert("Campo obligatorio");
  		return false; 
}// fin de campos obligatorios


} 
/*
//Es para obligar al usuario a llenar el campo
valor = document.getElementById("name").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  return false;
}

//Valida un campo de texto con valores numéricos
valor = document.getElementById("campo").value;
if( isNaN(valor) ) {
  return false;
}

//Valida que se seleccione una opción
indice = document.getElementById("opciones").selectedIndex;
if( indice == null || indice == 0 ) {
  return false;
}


// valida un correo electronico
valor = document.getElementById("campo").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  return false;
}

//Restringe los caracteres permitidos
function permite(elEvento, permitidos) {
  // Variables que definen los caracteres permitidos
  var numeros = "0123456789";
  var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var numeros_caracteres = numeros + caracteres;
  var teclas_especiales = [8, 37, 39, 46];







*/

