
function condicionesIniciales(){
  document.getElementById("mensajeInicial").value = "";
  document.getElementById("desencriptar").disabled = true;
}

function encriptar(){
  let texto = document.getElementById("mensajeInicial").value;
  let textoCifrado = texto
    .replace(/a/gi, "al")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("mensajeFinal").value = textoCifrado;
      document.getElementById("mensajeInicial").value = "";
      document.getElementById("ocultar").style.display= "none";
      document.getElementById("mensajeFinal").style.display= "block";
      document.getElementById("copiar").style.display= "block";
      document.getElementById("desencriptar").disabled = false;
    } else {
      mensajeCampoVacio();
    }
}

function desencriptar(){
  let textoCifrado = document.getElementById("mensajeFinal").value;
  let texto = textoCifrado
    .replace(/al/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (textoCifrado.length != 0) {
      document.getElementById("mensajeInicial").value = texto;
      document.getElementById("mensajeFinal").value = "";
      document.getElementById("ocultar").style.display= "block";
      document.getElementById("mensajeFinal").style.display= "none";
      document.getElementById("copiar").style.display= "none";
      document.getElementById("desencriptar").disabled = true;
    } else {
      mensajeCampoVacio();
    }
}
  
function copiarTexto(){
  var resultado = document.getElementById("mensajeFinal").value; 
  if (resultado.length != 0) {
    navigator.clipboard.writeText(resultado);
    mensajeExitoCopiar();
  } else {
      mensajeCampoVacioCopiar();
  }
}

function mensajeCampoVacio(){
  var textareaValue = document.getElementById("mensajeInicial").value;
  var textareaValue2 = document.getElementById("mensajeInicial").value;
  if (textareaValue.trim() === "" || textareaValue2.trim() === "" ) {
    Swal.fire({
      html: '<p class="popup__texto">Ingresa el texto que desees encriptar o desencriptar</p>',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup:'popup__box',
        closeButton:'popup__closeButton',
        confirmButton:'popup__button', 
      },
      confirmButtonAriaLabel: 'Aceptar',
      buttonsStyling: false,
      showCloseButton: true,
      closeButtonArialLabel: 'cerrar alerta',
      imageUrl: 'assets/Exclamation.png',
      imageWidth: '80px',
      imageAlt: 'icono de exclamación o alerta',
    });
  }
}

function mensajeCampoVacioCopiar(){
  var textareaValue = document.getElementById("mensajeFinal").value;
  if (textareaValue.trim() === "") {
    Swal.fire({
      html: '<p class="popup__texto">No hay mensaje para copiar</p>',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup:'popup__box',
        closeButton:'popup__closeButton',
        confirmButton:'popup__button', 
      },
      confirmButtonAriaLabel: 'Aceptar',
      buttonsStyling: false,
      showCloseButton: true,
      closeButtonArialLabel: 'cerrar alerta',
      imageUrl: 'assets/Exclamation.png',
      imageWidth: '80px',
      imageAlt: 'icono de exclamación o alerta',
    });
  }
}
    
function mensajeExitoCopiar(){
  Swal.fire({
    html: '<p class="popup__texto">El mensaje encriptado se ha copiado en el portapapeles</p>',
    confirmButtonText: 'Aceptar',
    customClass: {
      popup:'popup__box',
      closeButton:'popup__closeButton',
      confirmButton:'popup__button', 
    },
    confirmButtonAriaLabel: 'Aceptar',
    buttonsStyling: false,
    showCloseButton: true,
    closeButtonArialLabel: 'cerrar alerta',
    imageUrl: 'assets/Check.png',
    imageWidth: '80px',
    imageAlt: 'icono de check o éxito',
  });
}

condicionesIniciales();