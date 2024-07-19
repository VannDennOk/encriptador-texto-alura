// VARIABLES
const caracteresEsp = /[\u0022-\u002B\u002F\u0030-\u0039\u003C-\u003E\u0040-\u0060\u007B-\u007E\u00A2-\u00BF\u00C0-\u00FF\u0100-\u017F\u0180-\u024F]/g;
          // caracteresEsp: excluye elementos del latín básico, latín suplemento, latín extendido A y B (uso UNICODE). Sí se permite: !¡,.:;-¿?

// ESTADO DE LA PAGINA AL INICIO
function condicionesIniciales(){
  document.getElementById("mensajeInicial").value = "";
  document.getElementById("ocultar").style.display= "block";
  document.getElementById("mensajeFinal").style.display= "none";
  document.getElementById("copiar").style.display= "none";
}

// FUNCION PARA ENCRIPTAR TEXTO
function encriptar(){
  let texto = document.getElementById("mensajeInicial").value;
  let textoCifrado = texto
    .replace(/a/gi, "al")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.match(caracteresEsp)){     //Valida que no haya caracteres especiales
      mensajeError();
    } else if (texto.length != "" && !texto.match(caracteresEsp)) {     //solo encripta si no hay caracteres especiales
      document.getElementById("mensajeFinal").value = textoCifrado;
      cambioDisplay();
      } else {
        mensajeCampoVacio();
      }
  }

// FUNCION PARA DESENCRIPTAR TEXTO
function desencriptar(){
  let textoCifrado = document.getElementById("mensajeInicial").value;
  let texto = textoCifrado
    .replace(/al/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (textoCifrado.match(caracteresEsp)){     //Valida que no haya caracteres especiales
      mensajeError();
    } else if (textoCifrado.length != "" && !texto.match(caracteresEsp)) {     //solo desencripta si no hay caracteres especiales
      document.getElementById("mensajeFinal").value = texto;
      cambioDisplay();
      } else {
        mensajeCampoVacio();
      }
  }

// OCULTA LA IMAGEN Y MUESTRA EL TEXTO ENCRIPTADO/DESENCRIPTADO
function cambioDisplay(){
  document.getElementById("mensajeInicial").value = "";
  document.getElementById("ocultar").style.display= "none";
  document.getElementById("mensajeFinal").style.display= "block";
  document.getElementById("copiar").style.display= "block";
}

// COPIA EL TEXTO ENCRIPTADO/DESENCRIPTADO EN EL PORTAPAPELES
function copiarTexto(){
  var resultado = document.getElementById("mensajeFinal").value; 
  if (resultado.length != 0) {
    navigator.clipboard.writeText(resultado);
    mensajeExitoCopiar();
  } else {
      mensajeCampoVacioCopiar();
  }
}

// MENSAJES POPUP//
function mensajeCampoVacio(){
  var textarea = document.getElementById("mensajeInicial").value;
  var textarea2 = document.getElementById("mensajeInicial").value;
  if (textarea === "" || textarea2 === "") {
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

function mensajeError(){
  Swal.fire({
    html: '<p class="popup__texto">No acepta mayúsculas, acentos o carácteres especiales.<br>Sí se pueden usar signos de puntuación como: , . : ; - ¿? !¡</p>',
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