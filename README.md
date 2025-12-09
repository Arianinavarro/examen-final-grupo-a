# 🎂 **Repostería ARI-ANA **

##  *Descripción del Proyecto*
 Creamos un sistema web completo para gestionar una repostería, donde puedes administrar usuarios, productos y ver el catálogo. Todo hecho con Vue.js 3, Bootstrap 5 y usando MockAPI para simular un backend real.

---

##  *¿Qué logramos hacer?*

###  *1. Login Seguro*
- Formulario de ingreso que valida usuarios en MockAPI
- Los datos de usuarios están almacenados en /usuarios
- Usamos localStorage para guardar la sesión (como un token simulado)
- Botón para cerrar sesión siempre disponible en el menú lateral

###  *2. Rutas Protegidas*
- Las páginas de Usuarios y Productos *solo son accesibles si estás logueado*
- Si intentas entrar sin sesión, te redirigimos automáticamente al login
- Implementamos Vue Router Guards para esta protección

###  *3. Gestión de Usuarios (CRUD Completo)*
- *Ver todos* los usuarios en una tabla ordenada
- *Crear nuevos* usuarios con un modal bonito
- *Editar* usuarios existentes (modal que se pre-llena con sus datos)
- *Eliminar* usuarios con confirmación (para evitar errores)
- *Alertas* que te avisan si todo salió bien o si hubo algún problema
- Todo se guarda en MockAPI en el recurso /usuarios

###  *4. Gestión de Productos (CRUD Completo)*
- *Ver productos* en tarjetas (cards) con imagen y descripción
- *Crear productos* con formulario completo (nombre, precio, imagen, etc.)
- *Editar productos* manteniendo sus datos originales
- *Eliminar productos* mostrando su imagen para confirmar
- *Íconos intuitivos* en cada acción (lápiz para editar, basurero para eliminar)
- *Alertas visuales* después de cada operación
- Todo guardado en MockAPI en /productos

###  *5. Diseño con Bootstrap 5*
- *Diseño responsivo* que se ve bien en celular, tablet y computadora
- *Formularios estilizados* con validaciones
- *Modales elegantes* para todas las operaciones
- *Alertas coloridas* según el tipo de mensaje (éxito=verde, error=rojo, etc.)
- *Íconos de Bootstrap Icons* por toda la aplicación

---

##  *Tecnologías que usamos*

### *Frontend Principal*
- *Vue.js 3* - El corazón de nuestra aplicación
- *Vue Router 4* - Para la navegación entre páginas
- *Bootstrap 5.3* - Para hacer todo bonito y responsivo
- *Bootstrap Icons* - Los íconos que ves en botones y menús

### *Para comunicarnos con la API*
- *Axios* - Para hacer peticiones HTTP (GET, POST, PUT, DELETE)
- *MockAPI* - Nuestra API falsa que simula un backend real

### *Control de versiones*
- *Git* - Para guardar nuestros cambios
- *GitHub* - Donde está alojado nuestro código

### *Herramientas de desarrollo*
- *Vue CLI* - Para crear la estructura del proyecto
- *npm* - Para instalar todas las dependencias
- *Visual Studio Code* - Nuestro editor favorito

---

##  *Cómo está organizado nuestro proyecto*


examen-final-grupo-a/
├── src/
│   ├── components/           # Componentes que usamos en varias partes
│   │   ├── NavbarComponent.vue      # La barra de navegación de arriba
│   │   ├── SidebarComponent.vue     # El menú lateral
│   │   ├── FooterComponent.vue      # El pie de página
│   │   ├── ProductCardComponent.vue # Tarjeta para cada producto
│   │   └── UserCardComponent.vue    # Tarjeta para cada usuario
│   ├── views/                # Las páginas principales
│   │   ├── LoginView.vue            # Página de inicio de sesión
│   │   ├── DashboardView.vue        # Layout principal con sidebar
│   │   ├── DashboardHome.vue        # Inicio del dashboard
│   │   ├── ProductView.vue          # Página para gestionar productos
│   │   ├── UserView.vue             # Página para gestionar usuarios
│   │   └── CatalogoView.vue         # Catálogo para ver productos (solo lectura)
│   ├── router/              # Configuración de rutas
│   │   └── index.js                 # Definimos todas las rutas aquí
│   ├── services/            # Servicios para comunicarnos con la API
│   │   ├── api.js                   # Configuración de Axios
│   │   ├── userService.js           # Funciones para usuarios
│   │   └── productService.js        # Funciones para productos
│   ├── assets/              # Imágenes y recursos
│   │   └── logo.png                 # Logo de nuestra repostería
│   ├── App.vue              # Componente principal
│   └── main.js              # Punto de entrada
├── public/                  # Archivos públicos
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo


---

##  *Cómo funciona la aplicación*

### *1. Para iniciar sesión*

Tú entras a la app → Te llevamos al login → Validamos en MockAPI → 
Guardamos tu sesión → Te redirigimos al dashboard


### *2. Para gestionar usuarios*

Dashboard → Menú Usuarios → Vemos tabla de usuarios → 
[Crear|Editar|Eliminar] con modales → Se actualiza MockAPI → Te mostramos alerta


### *3. Para gestionar productos*

Dashboard → Menú Productos → Vemos tarjetas de productos → 
[Crear|Editar|Eliminar|Ver] con modales → Se actualiza MockAPI → Te mostramos alerta


### *4. Para ver el catálogo*

Dashboard → Menú Catálogo → Solo vemos los productos → 
Si queremos modificar, vamos a la gestión de productos


---

##  *Nuestra API en MockAPI*

### *URL Base:* https://6935db68fa8e704dafbf13da.mockapi.io

### *Para Usuarios*
- GET /usuarios - Ver todos los usuarios
- GET /usuarios/:id - Ver un usuario específico
- POST /usuarios - Crear un nuevo usuario
- PUT /usuarios/:id - Actualizar un usuario
- DELETE /usuarios/:id - Eliminar un usuario

### *Para Productos*
- GET /productos - Ver todos los productos
- GET /productos/:id - Ver un producto específico
- POST /productos - Crear un nuevo producto
- PUT /productos/:id - Actualizar un producto
- DELETE /productos/:id - Eliminar un producto

---

##  *Extras que implementamos*

### *1. Sistema de Alertas Inteligente*
- Alertas que se auto-cierran después de 4 segundos
- Diferentes colores según el tipo de mensaje
- Íconos que representan la acción
- Posicionadas para no molestar tu flujo de trabajo

### *2. Diseño que se ve bien en todos lados*
- Se adapta a celulares, tablets y computadoras
- Tarjetas con efectos al pasar el mouse
- Imágenes que se cargan bien incluso si hay error
- Menú lateral que se esconde en celulares

### *3. Mejoras para ti (el usuario)*
- Credenciales pre-llenadas para probar rápido
- Placeholders que te guían en los formularios
- Validación mientras escribes
- Confirmación doble cuando eliminas algo importante

### *4. Herramientas para desarrolladores*
- Console logs detallados (solo en desarrollo)
- Monitoreo de peticiones a la API
- Mensajes de error entendibles
- Verificación de conexión a internet

---

##  *Detalles técnicos importantes*

### *Arquitectura Modular*
- Cada parte hace una cosa específica
- Componentes que podemos reusar
- Servicios separados por funcionalidad
- Rutas organizadas lógicamente

### *Manejo de Estado*
- Estado local en cada componente
- localStorage para recordar tu sesión
- Reactividad automática (Vue 3 es mágico)
- Comunicación clara entre componentes

### *Manejo de Errores*
- Try/catch en todas las operaciones async
- Imágenes de respaldo si una no carga
- Mensajes de error que entiende cualquier persona
- Logs en consola para que podamos debuggear

### *Seguridad*
- Rutas protegidas (no puedes entrar sin login)
- Token de autenticación simulado
- Validación de sesión en cada navegación
- Limpieza de datos al cerrar sesión

---

##  *Cómo instalar y ejecutar*

### *Lo que necesitas tener:*
- Node.js 16 o superior
- npm 8 o superior
- Conexión a internet (para MockAPI)

### *Pasos para ejecutarlo:*
bash
# 1. Clonar el repositorio
git clone https://github.com/Arianinavarro/examen-final-grupo-a.git
cd examen-final-grupo-a

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run serve

# 4. Abrir en tu navegador
# Ve a: http://localhost:8080


### *Usuarios de prueba:*

Usuario: ariani
Contraseña: 123

Usuario: ana  
Contraseña: 123


##  *Lo que aprendimos haciendo este proyecto*

### *Habilidades que desarrollamos:*
1.  *Vue.js 3* - Aprendimos la Composition API y reactividad
2.  *Consumo de APIs REST* - Cómo comunicarnos con MockAPI usando Axios
3.  *Autenticación* - Cómo proteger rutas y manejar sesiones
4.  *Bootstrap 5* - Cómo hacer diseños responsivos y bonitos
5.  *CRUD completos* - Create, Read, Update, Delete en ambos módulos
6.  *Modales y alertas* - Cómo mejorar la experiencia de usuario
7.  *Git y GitHub* - Trabajo colaborativo y control de versiones
8.  *Documentación* - Cómo explicar lo que hicimos

### *Desafíos que superamos:*
- Configurar *MockAPI* correctamente
- Implementar *protección de rutas* con Vue Router
- Hacer que todo se vea bien en *celulares y tablets*
- Manejar *estados de carga* y errores
- Hacer que los *componentes se comuniquen* bien
- Dar *buen feedback* al usuario en cada acción

### *Buenas prácticas que seguimos:*
- Código organizado y comentado
- Manejo apropiado de errores
- Validación de formularios
- Imágenes optimizadas
- Diseño accesible
- Consideraciones de performance

### *Cómo trabajamos en equipo:*
- *Programación en pareja* para partes difíciles
- *Revisión de código* entre nosotras
- *Commits descriptivos* para saber qué cambió
- *División de tareas* por funcionalidad


##  *Enlaces importantes*

### *Nuestra API en MockAPI:*
 *https://6935db68fa8e704dafbf13da.mockapi.io*
- Usuarios: /usuarios
- Productos: /productos

### *Documentación oficial:*
- [Vue.js 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
- [MockAPI](https://mockapi.io/docs)

##  *Conclusión*

Este proyecto representa todo lo que aprendimos durante el curso de Desarrollo de Aplicaciones Web. Logramos crear nuestro proyecto *completo, funcional y profesional* para gestionar una repostería, cumpliendo todos los requisitos del examen.

La aplicación es fácil de usar, se ve bien en cualquier dispositivo y sigue buenas prácticas de desarrollo. Demuestra cómo con tecnologías modernas como Vue.js y Bootstrap podemos crear soluciones reales para problemas reales.



*Desarrollado por Ariani Navarro y Ana Jaime*  
*Examen Final - Desarrollo de Aplicaciones Web*  
*Diciembre 2025*   