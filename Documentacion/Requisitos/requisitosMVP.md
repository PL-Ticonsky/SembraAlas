# 📘 Requerimientos Funcionales y Técnicos — MVP
Proyecto: Expedición Tabio  
Alcance: MVP sin sistema de usuarios (checkout como invitado)

---

## 📦 1. CATÁLOGO DE PRODUCTOS

### A) Exposición y obtención de productos (Backend / API)

- **REQ-CAT-01 (API, MVP)**  
  El backend debe exponer un endpoint que retorne la lista de todos los productos disponibles para venta.

- **REQ-CAT-02 (API, MVP)**  
  El backend debe utilizar un DTO para la respuesta del catálogo, incluyendo únicamente información necesaria para la vista de catálogo (id, nombre, precio, imagen principal y disponibilidad).

---

### B) Búsqueda de productos

- **REQ-CAT-03 (FUNC, MVP)**  
  El catálogo debe permitir buscar productos mediante texto ingresado por el usuario.

- **REQ-CAT-04 (UI, MVP)**  
  El catálogo debe incluir un campo de texto visible para ingresar términos de búsqueda.

- **REQ-CAT-05 (FUNC, MVP)**  
  El sistema debe ejecutar la búsqueda utilizando el contenido ingresado en el campo de texto.

---

### C) Filtrado de productos

- **REQ-CAT-06 (FUNC, MVP)**  
  El catálogo debe permitir filtrar productos según criterios definidos (categoría, precio, disponibilidad u otros).

- **REQ-CAT-07 (UI, MVP)**  
  El catálogo debe incluir un botón visible para acceder a las opciones de filtrado.

- **REQ-CAT-08 (UX, MVP-OPCIONAL)**  
  La interfaz de filtrado puede permitir selección mediante interacción *drag and drop*.

---

### D) Estados del catálogo

- **REQ-CAT-09 (UX, MVP)**  
  El sistema debe mostrar un mensaje informativo cuando no existan productos disponibles para mostrar.

---

### E) Acceso a ficha y detalle de producto

- **REQ-CAT-10 (NAV, MVP)**  
  El sistema debe permitir acceder a la ficha o vista de detalle de un producto desde el catálogo.

- **REQ-CAT-11 (UI, MVP)**  
  El catálogo debe incluir un botón visible para acceder a la vista de detalle del producto.

- **REQ-CAT-12 (FUNC, MVP)**  
  La ficha del producto debe permitir agregar el producto al carrito seleccionando cantidad y variantes disponibles.

---

## 🛒 2. CARRITO DE COMPRAS

### A) UI — Acceso y vista del carrito

- **REQ-CART-01 (UI, MVP)**  
  El sistema debe mostrar un acceso al carrito visible desde el header o navegación principal.

- **REQ-CART-02 (UI, MVP)**  
  El acceso al carrito debe mostrar un indicador de cantidad de ítems cuando haya productos.

- **REQ-CART-03 (UI, MVP)**  
  El sistema debe ofrecer una vista de carrito que liste los ítems agregados.

- **REQ-CART-04 (UI, MVP)**  
  Cada ítem debe mostrar: nombre, precio unitario, cantidad y subtotal.

- **REQ-CART-05 (UI, MVP)**  
  La vista del carrito debe mostrar subtotal general y total.

- **REQ-CART-06 (UI, MVP)**  
  El botón “Ir a pagar” debe estar deshabilitado si el carrito está vacío.

---

### B) Funcionalidad core

- **REQ-CART-07 (FR, MVP)**  
  El sistema debe permitir agregar productos al carrito desde el catálogo o ficha.

- **REQ-CART-08 (FR, MVP)**  
  Si el producto ya existe en el carrito, el sistema debe incrementar la cantidad.

- **REQ-CART-09 (FR, MVP)**  
  El sistema debe permitir aumentar o disminuir la cantidad desde el carrito.

- **REQ-CART-10 (FR, MVP)**  
  El sistema debe permitir eliminar un ítem del carrito.

- **REQ-CART-11 (FR, MVP)**  
  Si la cantidad de un ítem llega a 0, el sistema debe removerlo automáticamente.

- **REQ-CART-12 (FR, MVP)**  
  El sistema debe permitir vaciar el carrito completo con una sola acción.

- **REQ-CART-13 (FR, MVP)**  
  El sistema debe recalcular los totales de forma inmediata ante cualquier cambio.

---

### C) Reglas de negocio y validaciones

- **REQ-CART-14 (BR, MVP)**  
  El sistema debe impedir que la cantidad solicitada supere el stock disponible.

- **REQ-CART-15 (BR, MVP)**  
  Si un producto del carrito queda no disponible, el sistema debe notificarlo y bloquear el checkout.

- **REQ-CART-16 (SEC, MVP)**  
  El total del carrito debe calcularse usando precios vigentes validados en backend.

---

### D) Persistencia del carrito (decisión MVP)

- **REQ-CART-17 (DATA, MVP)**  
  El carrito debe persistir al recargar la página utilizando `localStorage`.

---

### E) Checkout (salida del carrito)

- **REQ-CHK-01 (FR, MVP)**  
  Al presionar “Ir a pagar”, el sistema debe validar que el carrito sea válido y crear una intención de checkout.

- **REQ-CHK-02 (BR, MVP)**  
  Al iniciar el checkout, el sistema debe congelar el estado del carrito asociado al `order_id`.

---

### F) Errores y mensajes

- **REQ-CART-18 (UX, MVP)**  
  El sistema debe mostrar mensajes claros ante errores de actualización del carrito.

- **REQ-CART-19 (UX, MVP)**  
  Al vaciar el carrito, el sistema debe solicitar confirmación al usuario.

---

### G) Seguridad mínima

- **REQ-CART-20 (SEC, MVP)**  
  El backend debe validar stock y totales antes del checkout.

- **REQ-CART-21 (SEC, MVP)**  
  Las operaciones del carrito deben protegerse contra requests inválidos.

---

### H) Analítica mínima

- **REQ-CART-22 (ANA, MVP)**  
  El sistema debe registrar eventos mínimos: `add_to_cart`, `remove_from_cart`, `begin_checkout`.

---

## 💳 3. PASARELA DE PAGO

### A) Datos mínimos

- **REQ-PAY-01 (DATA, MVP)**  
  El sistema debe capturar nombre, email y teléfono del pagador.

- **REQ-PAY-02 (DATA, MVP)**  
  Si hay envío, el sistema debe capturar dirección de entrega o delegarla a la pasarela.

- **REQ-PAY-03 (DATA, MVP)**  
  El sistema debe generar un `order_id` único por intento de compra.

---

### B) Creación de transacción

- **REQ-PAY-04 (INT, MVP)**  
  El backend debe crear una sesión de pago con `order_id`, monto, moneda, ítems y datos del pagador.

- **REQ-PAY-05 (FR, MVP)**  
  El sistema debe redirigir o abrir el widget de la pasarela sin manejar datos sensibles en el servidor.

---

### C) Retorno del usuario

- **REQ-PAY-06 (FR, MVP)**  
  El sistema debe contar con una URL de resultado que muestre el estado del pago.

- **REQ-PAY-07 (UX, MVP)**  
  La pantalla de resultado debe mostrar estado, referencia, valor, moneda y fecha.

---

### D) Confirmación backend (CRÍTICO)

- **REQ-PAY-08 (INT, MVP)**  
  El sistema debe recibir confirmación server-to-server mediante webhooks.

- **REQ-PAY-09 (SEC, MVP)**  
  El backend debe validar la autenticidad de la notificación recibida.

- **REQ-PAY-10 (SEC, MVP)**  
  El procesamiento de webhooks debe ser idempotente.

---

## 📑 4. PEDIDO INTERNO (sin usuarios)

### Estados posibles
- `PENDIENTE_PAGO`
- `PAGADO`
- `RECHAZADO`
- `EXPIRADO`

---

- **REQ-ORD-01 (DATA, MVP)**  
  El sistema debe crear un pedido interno con estado `PENDIENTE_PAGO` antes del pago.

- **REQ-ORD-02 (FR, MVP)**  
  Al recibir confirmación, el pedido debe actualizar su estado y almacenar el `transaction_id`.

- **REQ-ORD-03 (FR, MVP)**  
  El sistema debe permitir buscar pedidos por `order_id` para soporte.

- **REQ-ORD-04 (BR, MVP)**  
  Si un pedido permanece en `PENDIENTE_PAGO` por más de un tiempo definido, debe marcarse como `EXPIRADO`.

---

## 🌱 5. CONTENIDO Y CONTACTO (LANDING)

### Problemática ambiental

- **REQ-CUST-01 (UI, MVP)**  
  El sistema debe mostrar información descriptiva de la problemática ambiental al ingresar a la página.

- **REQ-CUST-02 (UI, MVP)**  
  El sistema debe mostrar contenido visual asociado a la problemática.

- **REQ-CUST-03 (UX, MVP)**  
  Las imágenes deben presentarse de forma fluida y optimizada.

---

### Logros del equipo

- **REQ-CUST-04 (UI, MVP)**  
  El sistema debe mostrar información sobre logros y reconocimientos del equipo.

- **REQ-CUST-05 (UX, MVP)**  
  Los logros deben presentarse de forma clara y ordenada.

---

### Medios de contacto

- **REQ-CUST-06 (UI, MVP)**  
  El sistema debe mostrar los medios de contacto disponibles.

- **REQ-CUST-07 (UI, MVP)**  
  El sistema debe mostrar enlaces funcionales a cada medio de contacto.

- **REQ-CUST-08 (UI, MVP)**  
  El sistema debe disponer de un botón específico por cada medio de contacto.

- **REQ-CUST-09 (INT, MVP)**  
  El sistema puede integrar los medios de contacto mediante APIs o esquemas externos cuando aplique.

---

## 🧪 6. REQUISITOS TÉCNICOS — FORMULARIO Y PASARELA

- **REQ-TECH-01 (UI, MVP)**  
  El sistema debe contar con una vista dedicada para el formulario de pago.

- **REQ-TECH-02 (SEC, MVP)**  
  El formulario debe operar bajo HTTPS.

- **REQ-TECH-03 (INT, MVP)**  
  El sistema debe conectarse de forma segura con la API de la pasarela seleccionada.

- **REQ-TECH-04 (INT, MVP)**  
  El sistema debe enviar los datos requeridos a la pasarela para crear la transacción.

- **REQ-TECH-05 (INT, MVP)**  
  El sistema debe recibir el estado de la transacción desde la pasarela.

- **REQ-TECH-06 (INT, MVP)**  
  El sistema debe notificar el estado del pago a un correo de soporte.

- **REQ-TECH-07 (SEC, MVP)**  
  El sistema debe evitar duplicación o eliminación accidental de pagos.

- **REQ-TECH-08 (SEC, MVP)**  
  El procesamiento de eventos de pago debe ser idempotente.

---
