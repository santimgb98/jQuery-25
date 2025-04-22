// Esperamos a que el documento esté listo
$(document).ready(function () {
  // 1. SELECTORES
  // Seleccionar por clase
  $("#btn-selector-clase").click(function () {
    // Primero, restauramos todos los elementos
    $(".elementos-ejemplo *").css("background-color", "")

    // Luego aplicamos el estilo a los elementos con la clase "especial"
    $(".especial").css("background-color", "#ffecb3")

    // Mostramos un mensaje temporal
    mostrarMensaje("Elementos con clase 'especial' resaltados")
  })

  // Seleccionar por ID
  $("#btn-selector-id").click(function () {
    // Primero, restauramos todos los elementos
    $(".elementos-ejemplo *").css("background-color", "")

    // Luego aplicamos el estilo al elemento con ID "unico"
    $("#unico").css("background-color", "#bbdefb")

    // Mostramos un mensaje temporal
    mostrarMensaje("Elemento con ID 'unico' resaltado")
  })

  // Seleccionar todos los párrafos
  $("#btn-selector-elemento").click(function () {
    // Primero, restauramos todos los elementos
    $(".elementos-ejemplo *").css("background-color", "")

    // Luego aplicamos el estilo a todos los párrafos dentro del contenedor
    $(".elementos-ejemplo p").css("background-color", "#c8e6c9")

    // Mostramos un mensaje temporal
    mostrarMensaje("Todos los párrafos resaltados")
  })

  // 2. EVENTOS
  // Evento mouseenter (hover)
  $("#cuadro-eventos").mouseenter(function () {
    $("#resultado-evento-texto").text(
      "Mouse encima del cuadro (evento mouseenter)"
    )
  })

  // Evento mouseleave
  $("#cuadro-eventos").mouseleave(function () {
    $("#resultado-evento-texto").text(
      "Mouse fuera del cuadro (evento mouseleave)"
    )
  })

  // Evento click
  $("#cuadro-eventos").click(function () {
    $("#resultado-evento-texto").text("Clic en el cuadro (evento click)")
    $(this).addClass("pulso")

    // Quitamos la clase después de una animación
    setTimeout(function () {
      $("#cuadro-eventos").removeClass("pulso")
    }, 1000)
  })

  // Evento keyup (tecla liberada)
  $("#campo-texto").keyup(function () {
    $("#resultado-evento-texto").text(
      "Texto escrito: " + $(this).val() + " (evento keyup)"
    )
  })

  // 3. MANIPULACIÓN DEL DOM
  // Cambiar texto
  $("#btn-cambiar-texto").click(function () {
    $("#contenido-manipulable").text("¡El texto ha sido cambiado con jQuery!")
  })

  // Agregar/quitar clase
  $("#btn-agregar-clase").click(function () {
    // Toggle añade la clase si no existe o la quita si existe
    $("#contenido-manipulable").toggleClass("destacado")

    // Actualizamos el texto del botón según el estado
    if ($("#contenido-manipulable").hasClass("destacado")) {
      $(this).text("Quitar clase")
    } else {
      $(this).text("Agregar clase")
    }
  })

  // Agregar elemento
  $("#btn-agregar-elemento").click(function () {
    // Creamos un nuevo párrafo
    var nuevoElemento = $("<p>").text(
      "Este es un nuevo párrafo añadido dinámicamente"
    )
    nuevoElemento.css({
      color: "#3f51b5",
      "font-weight": "bold",
      "margin-top": "10px",
    })

    // Lo añadimos al contenido manipulable
    $("#contenido-manipulable").append(nuevoElemento)
  })

  // Ocultar/mostrar
  $("#btn-ocultar-mostrar").click(function () {
    // Si está visible, lo ocultamos. Si está oculto, lo mostramos
    if ($("#contenido-manipulable").is(":visible")) {
      $("#contenido-manipulable").hide()
      $(this).text("Mostrar")
    } else {
      $("#contenido-manipulable").show()
      $(this).text("Ocultar")
    }
  })

  // 4. ANIMACIONES
  // Fade Out
  $("#btn-fadeout").click(function () {
    $("#elemento-animado").fadeOut(1000) // 1000ms = 1 segundo
  })

  // Fade In
  $("#btn-fadein").click(function () {
    $("#elemento-animado").fadeIn(1000)
  })

  // Slide Toggle
  $("#btn-slide").click(function () {
    $("#elemento-animado").slideToggle(500)
  })

  // Animate (animación personalizada)
  $("#btn-animar").click(function () {
    $("#elemento-animado").animate(
      {
        width: "+=50px",
        height: "+=30px",
        opacity: 0.7,
      },
      500,
      function () {
        // Callback cuando termina la animación
        setTimeout(function () {
          // Volvemos al tamaño original después de 2 segundos
          $("#elemento-animado").animate(
            {
              width: "200px",
              height: "100px",
              opacity: 1,
            },
            500
          )
        }, 2000)
      }
    )
  })

  // 5. AJAX
  $("#btn-cargar-datos").click(function () {
    // Mostramos texto de carga
    $("#resultado-ajax").html("<p>Cargando datos...</p>")

    // Simulamos una carga AJAX con setTimeout (en un proyecto real usaríamos $.ajax o $.getJSON)
    setTimeout(function () {
      /*// Los datos que normalmente vendrían de un servidor
      var datos = {
        usuarios: [
          { nombre: "María García", edad: 28, rol: "Administrador" },
          { nombre: "Juan Pérez", edad: 32, rol: "Editor" },
          { nombre: "Ana Martínez", edad: 25, rol: "Usuario" },
        ],
      }*/

      // Datos parseados desde archivo JSON
      const fs = require('fs');
      const data = JSON.parse(fs.readFileSync('./datos.json', 'utf8'));

      // Creamos HTML para mostrar los datos
      var html = "<h3>Datos cargados:</h3><ul>"

      // Iteramos por los datos con $.each
      $.each(data.usuarios, function (index, usuario) {
        html +=
          "<li><strong>" +
          usuario.nombre +
          "</strong> - " +
          usuario.edad +
          " años - " +
          usuario.rol +
          "</li>"
      })

      html += "</ul>"

      // Insertamos el HTML en el contenedor
      $("#resultado-ajax").html(html)
    }, 1500) // Simulamos una demora de 1.5 segundos
  })

  // Función auxiliar para mostrar mensajes temporales
  function mostrarMensaje(texto) {
    // Creamos un elemento para el mensaje
    var mensaje = $("<div>").addClass("mensaje-temporal").text(texto)
    mensaje.css({
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      "background-color": "#323232",
      color: "white",
      padding: "10px 20px",
      "border-radius": "5px",
      "z-index": "1000",
      "box-shadow": "0 2px 10px rgba(0,0,0,0.2)",
    })

    // Añadimos el mensaje al body
    $("body").append(mensaje)

    // Lo eliminamos después de 3 segundos
    setTimeout(function () {
      mensaje.fadeOut(300, function () {
        $(this).remove()
      })
    }, 3000)
  }
})
