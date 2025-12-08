#  **README.md - EXAMEN FINAL DESARROLLO DE APLICACIONES WEB**

## 🎂 **Repostería ARI-ANA - Sistema de Gestión Web**

###  **Descripción del Proyecto**
Sistema web desarrollado como **Examen Final** del curso de Desarrollo de Aplicaciones Web, implementando Vue.js 3, Bootstrap 5 y MockAPI para la gestión completa de usuarios y productos de una repostería.



##  **Objetivos Cumplidos**

###  **Requisitos Funcionales Obligatorios (PDF)**

#### **5.1 Autenticación de Usuario** 
- Formulario de Login con validación en **MockAPI**
- Credenciales almacenadas en recurso `/usuarios`
- Token simulado guardado en `localStorage`
- Botón de Cerrar Sesión en sidebar

#### **5.2 Rutas Protegidas** 
- Implementación de **Navigation Guards** en Vue Router
- Redirección automática a `/login` si no autenticado
- Vistas de Usuarios y Productos accesibles solo con sesión activa

#### **5.3 CRUD de Usuarios** 
- **Listado** de usuarios desde MockAPI
- **Creación** mediante modal Bootstrap
- **Edición** mediante modal pre-llenado
- **Eliminación** con modal de confirmación
- **Alertas** visuales después de cada operación
- Consumo completo de API MockAPI (`/usuarios`)

#### **5.4 CRUD de Productos** 
- **Listado** de productos en vista de cards
- **Creación** con modal de formulario completo
- **Edición** con modal para modificación
- **Eliminación** con confirmación e imagen
- **Íconos** Bootstrap en botones de acción
- **Alertas** para feedback al usuario
- Consumo de MockAPI (`/productos`)

#### **5.5 Uso de Bootstrap 5** 
- **Sistema grid responsivo** en todas las vistas
- **Formularios estilizados** con validación
- **Modales** para todas las operaciones CRUD
- **Alertas** contextuales (éxito, error, info)
- **Íconos Bootstrap Icons** implementados:
  -  Lápiz para editar
  -  Bote de basura para eliminar
  -  Signo más para crear
  -  Iconos en login y navegación

---

##  **Tecnologías Implementadas**

### **Frontend**
- **Vue.js 3** - Framework principal con Composition API
- **Vue Router 4** - Navegación SPA y protección de rutas
- **Bootstrap 5.3** - Framework CSS para diseño responsivo
- **Bootstrap Icons** - Biblioteca completa de íconos

### **Comunicación con API**
- **Axios** - Cliente HTTP para peticiones REST
- **MockAPI** - API falsa para simulación de backend

### **Control de Versiones**
- **Git** - Sistema de control distribuido
- **GitHub** - Plataforma para repositorio remoto

### **Herramientas de Desarrollo**
- **Vue CLI** - Scaffolding y configuración del proyecto
- **npm** - Gestor de paquetes de Node.js
- **Visual Studio Code** - Editor principal



##  **Estructura del Proyecto**


examen-final-grupo-a/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── NavbarComponent.vue      # Encabezado superior
│   │   ├── SidebarComponent.vue     # Menú lateral de navegación
│   │   ├── FooterComponent.vue      # Pie de página
│   │   ├── ProductCardComponent.vue # Tarjeta individual de producto
│   │   └── UserCardComponent.vue    # Tarjeta individual de usuario
│   ├── views/                # Vistas principales de la aplicación
│   │   ├── LoginView.vue            # Vista de autenticación
│   │   ├── DashboardView.vue        # Layout principal del dashboard
│   │   ├── DashboardHome.vue        # Página de inicio del dashboard
│   │   ├── ProductView.vue          # Gestión CRUD de productos
│   │   ├── UserView.vue             # Gestión CRUD de usuarios
│   │   └── CatalogoView.vue         # Vista de catálogo (solo lectura)
│   ├── router/              # Configuración de rutas
│   │   └── index.js                 # Definición de rutas y guards
│   ├── services/            # Servicios para comunicación con API
│   │   ├── api.js                   # Configuración de Axios para MockAPI
│   │   ├── userService.js           # Operaciones CRUD para usuarios
│   │   └── productService.js        # Operaciones CRUD para productos
│   ├── assets/              # Recursos estáticos
│   │   └── logo.png                 # Logo de la repostería
│   ├── App.vue              # Componente raíz de la aplicación
│   └── main.js              # Punto de entrada de Vue
├── public/                  # Archivos públicos
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto
```



##  **Flujo de la Aplicación**

### **1. Autenticación**
```
Usuario ingresa → Redirige a /login → Valida en MockAPI → 
Guarda token → Redirige a /dashboard
```

### **2. Gestión de Usuarios**
```
Dashboard → Usuarios → Lista tabla → 
[Crear|Editar|Eliminar] con modales → Actualiza MockAPI → Muestra alerta
```

### **3. Gestión de Productos**
```
Dashboard → Productos → Vista cards → 
[Crear|Editar|Eliminar|Ver] con modales → Actualiza MockAPI → Muestra alerta
```

### **4. Catálogo (Vista de solo lectura)**
```
Dashboard → Catálogo → Cards con imágenes → Solo visualización → 
Enlace a gestión para modificar
```



##  **Endpoints MockAPI Implementados**

### **Base URL:** `https://6935db68fa8e704dafbf13da.mockapi.io`

### **Recurso Usuarios**
- `GET /usuarios` - Listar todos los usuarios
- `GET /usuarios/:id` - Obtener usuario específico
- `POST /usuarios` - Crear nuevo usuario
- `PUT /usuarios/:id` - Actualizar usuario
- `DELETE /usuarios/:id` - Eliminar usuario

### **Recurso Productos**
- `GET /productos` - Listar todos los productos
- `GET /productos/:id` - Obtener producto específico
- `POST /productos` - Crear nuevo producto
- `PUT /productos/:id` - Actualizar producto
- `DELETE /productos/:id` - Eliminar producto



##  **Características Adicionales Implementadas**

### **1. Sistema de Alertas Inteligente**
- Alertas contextuales (éxito, error, advertencia)
- Auto-cierre después de 4 segundos
- Íconos representativos según tipo de mensaje
- Posicionamiento fijo para no interrumpir flujo

### **2. Diseño Responsivo Avanzado**
- Adaptación a móviles, tablets y desktop
- Cards con efectos hover y transiciones
- Imágenes optimizadas con manejo de errores
- Sidebar colapsable en dispositivos pequeños

### **3. Mejoras en Experiencia de Usuario**
- **Pre-llenado** de credenciales para testing
- **Placeholders** informativos en formularios
- **Validación** en tiempo real de campos
- **Feedback visual** inmediato en acciones
- **Doble confirmación** en eliminaciones

### **4. Sistema de Debug Integrado**
- Console logs detallados para desarrollo
- Interceptores de Axios para monitoreo
- Mensajes descriptivos de errores
- Verificación automática de conexión a API



##  **Características Técnicas Destacadas**

### **Arquitectura Modular**
- Separación clara de responsabilidades
- Componentes reutilizables
- Servicios desacoplados
- Rutas organizadas jerárquicamente

### **Manejo de Estado**
- Estado local en componentes Vue
- Persistencia en `localStorage` para autenticación
- Reactividad automática con Vue 3
- Comunicación entre componentes via props/events

### **Manejo de Errores**
- Try/catch en todas las operaciones async
- Fallbacks para imágenes rotas
- Mensajes de error amigables al usuario
- Registro en consola para debugging

### **Seguridad Implementada**
- Protection de rutas con navigation guards
- Token de autenticación simulado
- Validación de sesión en cada navegación
- Limpieza de datos sensibles al logout



##  **Instalación y Ejecución**

### **Prerrequisitos**
- Node.js 16+ y npm 8+
- Vue CLI instalado globalmente
- Conexión a internet para MockAPI

### **Pasos de Instalación**
```bash
# 1. Clonar repositorio
git clone https://github.com/Arianinavarro/examen-final-grupo-a.git
cd examen-final-grupo-a

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run serve

# 4. Abrir en navegador
# http://localhost:8080
```

### **Credenciales de Prueba**
```
Usuario: admin
Contraseña: 123

Usuario: ana  
Contraseña: 123
```



##  **Pantallazos Obligatorios (PDF)**

1.  **Vista de Login** - Formulario de autenticación
2.  **Listado de Usuarios** - Tabla con CRUD
3.  **Modal Crear Usuario** - Formulario de creación
4.  **Modal Editar Usuario** - Formulario de edición
5.  **Modal Eliminar Usuario** - Confirmación de eliminación
6.  **Listado de Productos** - Cards con imágenes
7.  **Modal Crear Producto** - Formulario completo
8.  **Modal Editar Producto** - Formulario de modificación
9.  **Modal Eliminar Producto** - Confirmación con imagen
10.  **Alertas en funcionamiento** - Feedback visual



##  **Logros y Aprendizajes**

### **Competencias Desarrolladas**
1.  **Desarrollo SPA con Vue.js 3** - Arquitectura modular y reactiva
2.  **Consumo de APIs REST** - Axios con MockAPI, manejo async/await
3.  **Autenticación y protección de rutas** - Vue Router Navigation Guards
4.  **Diseño responsivo con Bootstrap 5** - Grid system, componentes, utilidades
5.  **Implementación de CRUD completos** - Create, Read, Update, Delete
6.  **Uso de modales y alertas** - Bootstrap Modals y Toasts
7.  **Control de versiones con Git/GitHub** - Commits, branches, colaboración
8.  **Documentación formal** - PDF con evidencias y descripción técnica

### **Desafíos Superados**
- Configuración correcta de **MockAPI** y manejo de **CORS**
- Implementación de **Navigation Guards** para protección de rutas
- Diseño de **interfaces responsivas** que funcionen en todos los dispositivos
- Manejo de **estados asíncronos** y loading states
- **Comunicación entre componentes** Vue de manera eficiente
- **Manejo de errores** y feedback al usuario

### **Buenas Prácticas Implementadas**
-  **Código modular** y reutilizable
-  **Comentarios descriptivos** en código
-  **Manejo apropiado de errores**
-  **Validación de formularios**
-  **Optimización de imágenes**
-  **Diseño accesible**
-  **Performance considerations**


### **Metodología de Trabajo:**
- **Pair programming** en componentes complejos
- **Code reviews** mediante pull requests
- **Commits semánticos** con mensajes descriptivos
- **División de tareas** por módulos funcionales



##  **Posibles Mejoras Futuras**

1. **Implementar Vuex/Pinia** para gestión de estado global
2. **Agregar testing** con Jest/Vitest para componentes
3. **Implementar paginación** para listados grandes
4. **Agregar filtros y búsqueda** en tablas
5. **Implementar tema oscuro/claro**
6. **Agregar gráficos** para dashboard con Chart.js
7. **Implementar exportación** de datos a Excel/PDF
8. **Agregar validaciones** más robustas en formularios



##  **Documentación Adicional**

### **Repositorio GitHub:**
 **https://github.com/Arianinavarro/examen-final-grupo-a.git**

### **MockAPI:**
 **https://6935db68fa8e704dafbf13da.mockapi.io**
- Usuarios: `/usuarios`
- Productos: `/productos`

### **Tecnologías Oficiales:**
- [Vue.js 3 Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/)
- [Axios Documentation](https://axios-http.com/)
- [MockAPI Documentation](https://mockapi.io/docs)



##  **Conclusión**

Este proyecto demuestra la aplicación exitosa de los conceptos aprendidos durante el curso de Desarrollo de Aplicaciones Web, integrando tecnologías modernas como Vue.js 3, Bootstrap 5 y consumo de APIs REST mediante MockAPI. Se cumplieron **todos los requisitos funcionales y no funcionales** especificados en el PDF del examen, desarrollando una aplicación **completa, funcional y profesional** para la gestión de una repostería.

La aplicación es **escalable, mantenible y sigue las mejores prácticas** de desarrollo web moderno, siendo un ejemplo concreto de cómo las tecnologías frontend actuales pueden resolver problemas reales de negocio mediante interfaces intuitivas y sistemas robustos.



**Desarrollado por Ariani Navarro y Ana Jaime**  
**Examen Final - Desarrollo de Aplicaciones Web**  
**Diciembre 2025**