# Ejemplos Básicos de jQuery

![jQuery Logo](https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg)

## 📋 Descripción del Proyecto

Este proyecto es una guía visual interactiva que muestra los conceptos fundamentales de jQuery, la popular biblioteca de JavaScript. Está diseñado como recurso educativo para estudiantes y desarrolladores que quieran aprender jQuery de forma práctica.

## 🚀 Características Principales

El proyecto demuestra visualmente cinco conceptos clave de jQuery:

### 1. Selectores

![Selectores jQuery](img/selectores.png)

- Selección por clase
- Selección por ID
- Selección por tipo de elemento

### 2. Eventos

![Eventos jQuery](img/eventos.png)

- Eventos de ratón (click, hover)
- Eventos de teclado
- Manejo de interacciones de usuario

### 3. Manipulación del DOM

![Manipulación DOM](img/manipulacion.png)

- Cambiar texto y contenido
- Agregar y quitar clases
- Añadir elementos dinámicamente
- Ocultar y mostrar elementos

### 4. Animaciones

![Animaciones jQuery](img/animaciones.png)

- Efectos de desvanecimiento (fade)
- Efectos de deslizamiento (slide)
- Animaciones personalizadas

### 5. AJAX

![AJAX jQuery](img/ajax.png)

- Cargar datos desde archivos externos
- Procesamiento de datos JSON
- Presentación dinámica de información

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del contenido
- **CSS3**: Diseño responsive con unidades relativas (rem, %)
- **jQuery 3.7.1**: Manipulación del DOM y funcionalidades
- **JSON**: Almacenamiento de datos de ejemplo

## 📱 Diseño Responsive

La aplicación está diseñada para funcionar en dispositivos de diferentes tamaños:

|           Desktop           |          Tablet           |          Mobile           |
| :-------------------------: | :-----------------------: | :-----------------------: |
| ![Desktop](img/desktop.png) | ![Tablet](img/tablet.png) | ![Mobile](img/mobile.png) |

## 📄 Estructura del Proyecto

```
ejemploJQuery/
├── index.html          # Archivo principal HTML
├── css/
│   └── style.css       # Estilos CSS responsive
├── js/
│   └── script.js       # Código jQuery
├── datos.json          # Datos de ejemplo para AJAX
└── img/                # Imágenes para documentación
```

## 🔧 Instalación y Uso

1. Clona este repositorio:

```
git clone https://github.com/tu-usuario/ejemploJQuery.git
```

2. Abre el archivo `index.html` en tu navegador web.

3. Interactúa con los diferentes ejemplos para ver jQuery en acción.

## 📚 Datos de Muestra

El proyecto utiliza un archivo JSON con datos de ejemplo para las demostraciones de AJAX:

```json
{
  "usuarios": [
    {
      "nombre": "María García",
      "edad": 28,
      "rol": "Administrador",
      "email": "maria@ejemplo.com"
    },
    {
      "nombre": "Juan Pérez",
      "edad": 32,
      "rol": "Editor",
      "email": "juan@ejemplo.com"
    }
    // ...más usuarios
  ],
  "configuracion": {
    "idioma": "es",
    "tema": "claro",
    "notificaciones": true
  }
}
```

## 🤝 Contribuir

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu funcionalidad: `git checkout -b nueva-funcionalidad`
3. Haz commit de tus cambios: `git commit -m 'Añadir nueva funcionalidad'`
4. Envía tus cambios: `git push origin nueva-funcionalidad`
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## ✉️ Contacto

Para cualquier consulta sobre este proyecto educativo, por favor contacta a:
profesor@ejemplo.com

---

Creado con ❤️ para la enseñanza de jQuery - 2025
