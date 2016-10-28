/*  Todos los campos son obligatorios, excepto los dos últimos. hecho
    Los campos nombre y apellido sólo deben permitir caracteres de la A-Z.  hecho
    Para los campos nombre y apellido la primera letra debe ser mayúscula.  hecho
    Validar que el campo email tenga un formato válido. Ej: name@domain.com  hecho
    El campo password debe tener al menos 6 caracteres (me faltaaaa)
    El campo password no puede ser igual a "password" ó "123456" ó "098754"-
    El valor seleccionado de bicis, debe ser una de las opciones presentadas hecho

    Si algún campo presenta error debe informarse al usuario por medio de un alert.*/

// Variables de los campos, o sea, cada valor de cada campo va a quedar guardado en una variable.


function validateForm(){
  var nombre = document.getElementById('name').value;
  var apellido = document.getElementById('lastname').value;
  var correo = document.getElementById('input-email').value;
  var contrasena = document.getElementById('input-password').value; 
  var listaBici = document.getElementsByTagName('select')[0].selectedIndex;

//Campos obligatorios desde nombre hasta listaBici.
  function obligatoria (){
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
      alert("Campo obligatorio nombre");
      return false;
    }
    else if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
      alert("Campo obligatorio apellido");
      return false; 
    }
    else if( correo == null || correo.length == 0 || /^\s+$/.test(correo) ) {
      alert("Campo obligatorio correo");
      return false; 
    }
    else if( contrasena == null || contrasena.length == 0 || /^\s+$/.test(contrasena) ) {
      alert("Campo obligatorio contraseña");
      return false; 
    }
    else if( listaBici == null || listaBici == 0) {
      alert("Campo obligatorio lista");
      return false; 
    }
    else{
      return true;
    }
  }obligatoria();


  function letras (nombre){
    var pasoDos = /^[a-zA-Z]*$/;
    if (!nombre.search(pasoDos)){
      return true;
    }else {
      alert("El campo nombre sólo debe permitir caracteres de la A-Z");
      return false;
    }
  }letras(nombre);

    function letras (apellido){
      var pasoDos = /^[a-zA-Z]*$/;
      if (!apellido.search(pasoDos)) {
        return true;
      }else {
        alert("El campo apellido sólo debe permitir caracteres de la A-Z");
        return false;
      }
    }letras(apellido);

      function mayusculaN (nombre) {
        var nomMinus = document.getElementById('name').value.toLowerCase();
        document.getElementById('name').value = nomMinus; //esto transforma a minusculas todo

        var nomPriMayus = nombre.substr(0,1).toUpperCase();//convierte la primera letra en mayuscula
        var nombrecito = document.getElementById('name').value;//esto es para llamar de a la primera var
        var arrNom = nombrecito.split("");//esto pasa nombrecito en un array
        var quitarN = arrNom.shift();//quita la primera letra del array
        var agragarN = arrNom.unshift(nomPriMayus);//agrega la letra mayuscula
        var nomFinal = arrNom.join("");//esto junta el strin que se habia transformado en un array con sus tipicos espacios commilas y todo
        document.getElementById('name').value = nomFinal;//cambia de array a string
      } mayusculaN(nombre); //llama a la funtion

      function mayusculaA (apellido) {
        var apeMinus = document.getElementById('lastname').value.toLowerCase();
        document.getElementById('lastname').value = apeMinus;
        var apePriMayus = apellido.substr(0,1).toUpperCase();
        var apellidito = document.getElementById('lastname').value;
        var arrApe = apellidito.split(""); 
        var quitarA = arrApe.shift(apePriMayus);
        var agregarA = arrApe.unshift("");
        var apeFinal = arrApe.join("");
        document.getElementById('lastname').value = apeFinal;
      }mayusculaA(apellido);

    function contrasenaNula (contrasena) {
      var valor = document.getElementById('password   ').value;
        if( isNaN(valor) ) {
          return false;
        }
    }contrasenaNula(contrasena);
    
    function validarCorreo(correo) {
      var confirma = document.getElementById('input-email').value;
      if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(confirma)) ) {
        return false;
      }
    }validarCorreo(correo);

    function lista (listaBici){
      var indice = document.getElementById("select").selectedIndex;
      if( indice == null || indice == 0 ) {
        return false;
      }
    }lista(listaBici);
}validateForm();

/*

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

