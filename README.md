# Lista de Deseos Ligera

### 🚀 Descripción del Proyecto

Este es un sistema de lista de deseos diseñado específicamente para ser **ligero, rápido y eficiente**. Utiliza tecnologías con un bajo consumo de recursos para garantizar un rendimiento óptimo en dispositivos antiguos como laptops y celulares viejos. La aplicación permite a los usuarios crear, ver y gestionar sus listas de deseos de manera sencilla.

### ✨ Características Destacadas

* **Optimizado para Dispositivos Antiguos:** Uso de un framework CSS ligero (Bulma) y una base de datos local y eficiente (SQLite).
* **Exportar Lista de Deseos:** Descarga todos tus deseos en un simple archivo de texto plano con un solo clic.
* **UI/UX Limpia:** Interfaz de usuario intuitiva con un diseño minimalista.
* **Paginación sin Recarga:** Navega entre tus deseos sin tener que recargar la página, lo que mejora la velocidad.
* **Modo Oscuro:** Reduce la fatiga visual con un elegante tema oscuro.
* **Seguridad Esencial:** Incluye validaciones básicas y protección contra ataques comunes como Rate Limiting, XSS y SQL Injection.

### 🛠️ Tecnologías Utilizadas

* **Backend:** `Node.js` y `Express`
* **Base de Datos:** `SQLite3`
* **Frontend:** HTML, JavaScript y `Bulma CSS`
* **Seguridad:** `express-rate-limit`

### ⚙️ Cómo Empezar

Sigue estos pasos para tener la aplicación funcionando en tu máquina local.

#### Requisitos

* Node.js (versión 14 o superior)
* Un editor de código como Visual Studio Code.

#### Instalación

1.  Clona el repositorio en tu máquina:
    `git clone [https://github.com/santiagourdaneta/Lista-de-Deseos-Ligera]`

2.  Navega a la carpeta del proyecto:
    `cd Lista-de-Deseos-Ligera`

3.  Instala las dependencias necesarias:
    `npm install`

#### Uso

1.  Inicia el servidor local:
    `node index.js`

2.  Abre tu navegador y ve a la siguiente dirección para ver la aplicación:
    `http://localhost:3000`

### 📄 Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.