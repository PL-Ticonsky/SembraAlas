# Roles del sistema (Soporte del producto)

- **Mayorista–Empresa:** compra por volumen / cotizaciones / pedidos grandes, normalmente con condiciones especiales (precio, facturación, envío).
- **Administrador de tienda:** opera el eCommerce (pedidos, productos, inventario, usuarios, configuración).
- **Gestor de contenido–Marketing:** publica contenido (impacto abejas, historia, blog), campañas, SEO, banners.
- **Soporte:** atiende tickets/chat, gestiona devoluciones/cancelaciones, ayuda con pagos/envíos.
- **Equipo de desarrollo:** asegura entrega técnica (CI/CD, seguridad, performance, observabilidad, arquitectura).

---

# Estados posibles del cliente (máquina de estados)

- **E0 — Invitado:** no inicia sesión.
- **E1 — Registrado (sin compra):** cuenta + sesión iniciada.
- **E2 — Cliente con pedido:** al menos un pedido creado (pendiente/aprobado/enviado…).
- **E3 — Cliente verificado:** al menos un pedido **entregado** (habilita reseñas “comprador verificado”).
- **E4 — Cliente Mayorista:** Cuenta tipo mayorista , X productos minimos por compra (habilita Compra mayorista).

**Transiciones típicas**
- E0 → E1: registro exitoso (y/o login).
- E1 → E2: checkout exitoso + pedido creado.
- E2 → E3: pedido cambia a “Entregado”.

---

# Historias de Usuario — Cliente*

## Épica C0 — Descubrimiento y confianza

### CUST-01 — Ver problemática de abejas (propósito)

- **Historia:** Como **cliente** quiero ver la **problemática de las abejas** para entender el propósito del proyecto.
- **Estados:** E0, E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Bajo
- **Dependencias:** Página pública / contenido base

**Criterios de aceptación (GWT)**
- **Given** que entro al sitio, **When** navego a “Propósito/Impacto”, **Then** veo una explicación clara (texto + imágenes/infografía si hay).
- **Given** que estoy en móvil, **When** abro la sección, **Then** el contenido se ve bien y es legible.
- **Given** que no hay contenido cargado, **When** entro, **Then** veo un mensaje/estado vacío controlado (no error).

---

### CUST-02 — Ver historia y logros (confianza)

- **Historia:** Como **cliente** quiero ver la **historia/logros** del proyecto para confiar y motivarme a apoyar comprando.
- **Estados:** E0, E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Bajo
- **Dependencias:** Página pública / contenido base

**Criterios de aceptación (GWT)**
- **Given** que entro a “Historia/Logros”, **When** la abro, **Then** veo hitos (convocatorias, fotos, evidencias).
- **Given** que hay links a evidencias (videos/redes), **When** doy clic, **Then** abren correctamente.
- **Given** que vuelvo al catálogo desde esa página, **When** doy clic en “Ver productos”, **Then** me lleva al catálogo.

---

### CUST-03 — Acceder a contacto/redes (resolver dudas)

- **Historia:** Como **cliente** quiero poder acceder a **redes sociales/contacto** para resolver dudas antes de comprar.
- **Estados:** E0, E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Bajo
- **Dependencias:** Datos de contacto definidos

**Criterios de aceptación (GWT)**
- **Given** que estoy en el sitio, **When** busco “Contacto”, **Then** encuentro canales (WhatsApp/correo/redes) visibles.
- **Given** que doy clic en un canal, **When** lo abro, **Then** se abre la app o pestaña correcta.
- **Given** que el canal no está disponible, **When** intento usarlo, **Then** el sistema lo indica claramente.

---

## Épica C1 — Explorar productos

### CUST-04 — Ver catálogo

- **Historia:** Como **cliente** quiero ver el **catálogo** de productos para elegir qué comprar.
- **Estados:** E0, E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Bajo
- **Dependencias:** Productos cargados en BD/CMS

**Criterios de aceptación (GWT)**
- **Given** que entro a “Productos”, **When** carga la página, **Then** veo una lista con imagen, nombre, precio y disponibilidad básica.
- **Given** que hay muchos productos, **When** hago scroll o pagino, **Then** puedo ver más productos sin romper la UI.
- **Given** que no hay productos, **When** entro, **Then** veo un estado vacío útil (no error).

---

### CUST-05 — Ver ficha de producto (detalle)

- **Historia:** Como **cliente** quiero ver la **ficha del producto** (precio, fotos, métodos de pago, descripción, stock) para decidir si me conviene.
- **Estados:** E0, E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Catálogo + datos de inventario + pasarela/medios informativos

**Criterios de aceptación (GWT)**
- **Given** que abro un producto, **When** carga la ficha, **Then** veo fotos, descripción, precio y stock.
- **Given** que el producto no tiene stock, **When** lo veo, **Then** el botón “Agregar al carrito” queda deshabilitado y se indica “Sin stock”.
- **Given** que existen métodos de pago soportados, **When** reviso la ficha, **Then** veo los métodos disponibles (al menos como lista informativa).

---

### CUST-06 — Compartir link de producto

- **Historia:** Como **cliente** quiero **compartir el link** de un producto para recomendárselo a otras personas.
- **Estados:** E0, E1, E2, E3
- **Prioridad:** Post-MVP
- **Nivel de aprendizaje:** Bajo
- **Dependencias:** URL pública estable por producto

**Criterios de aceptación (GWT)**
- **Given** que estoy en la ficha, **When** doy clic en “Compartir”, **Then** obtengo un link copiable/compartible.
- **Given** que comparto el link, **When** otra persona lo abre, **Then** llega al mismo producto correctamente.

---

## Épica C2 — Carrito y checkout

### CUST-07 — Agregar / quitar productos del carrito

- **Historia:** Como **cliente** quiero **agregar/quitar** productos del carrito para preparar mi compra.
- **Estados:** E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Auth (si el carrito es solo para logueados) + Catálogo

**Criterios de aceptación (GWT)**
- **Given** que estoy logueado, **When** agrego un producto, **Then** el carrito aumenta cantidad y recalcula total.
- **Given** que estoy en el carrito, **When** quito un ítem o reduzco cantidad a 0, **Then** se elimina del carrito.
- **Given** que el stock no alcanza, **When** aumento cantidad, **Then** el sistema bloquea y avisa el máximo posible.

---

### CUST-08 — Ingresar dirección de entrega

- **Historia:** Como **cliente** quiero ingresar mi **dirección de entrega** para recibir el pedido.
- **Estados:** E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Bajo
- **Dependencias:** Checkout

**Criterios de aceptación (GWT)**
- **Given** que estoy en checkout, **When** ingreso dirección (nombre, ciudad, dirección, indicaciones, teléfono), **Then** se valida y se guarda para el pedido.
- **Given** que falta un dato obligatorio, **When** intento continuar, **Then** se muestra validación y no avanza.

---

### CUST-09 — Ver costo de envío antes de pagar

- **Historia:** Como **cliente** quiero ver el **costo del envío** antes de pagar para conocer el total final.
- **Estados:** E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** CUST-08 + lógica de envío (tarifa fija o por ciudad)

**Criterios de aceptación (GWT)**
- **Given** que ya ingresé dirección, **When** elijo método de envío, **Then** veo el costo y el total actualizado.
- **Given** que no se puede calcular envío, **When** intento continuar, **Then** veo un mensaje claro (y alternativa: “te contactaremos” o “tarifa fija”).

---

### CUST-10 — Pagar con métodos disponibles

- **Historia:** Como **cliente** quiero pagar con **métodos disponibles** para finalizar la compra.
- **Estados:** E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Alto
- **Dependencias:** Pasarela de pago + creación de pedido

**Criterios de aceptación (GWT)**
- **Given** que confirmé carrito y envío, **When** selecciono un método de pago y confirmo, **Then** se crea el pedido y queda asociado al pago.
- **Given** que el pago es rechazado o cancelado, **When** regreso al sitio, **Then** veo el estado del pago y puedo reintentar.
- **Given** que el pago es aprobado, **When** finaliza, **Then** veo confirmación y recibo un comprobante/resumen.

---

### CUST-11 — Personalizar pedido (flores/cantidad/tipo)

- **Historia:** Como **cliente** quiero seleccionar la **cantidad y tipo de flores** (si aplica) para personalizar mi pedido según mi preferencia.
- **Estados:** E1, E2, E3
- **Prioridad:** Post-MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Reglas definidas (opciones, stock, impacto en precio)

**Criterios de aceptación (GWT)**
- **Given** que el producto permite personalización, **When** elijo opciones, **Then** el sistema valida disponibilidad y muestra el resultado en el carrito.
- **Given** que una opción no está disponible, **When** la selecciono, **Then** se bloquea o se indica “no disponible”.

---

## Épica C3 — Post-compra

### CUST-12 — Ver estado de envío

- **Historia:** Como **cliente** quiero ver el **estado de envío** del pedido para saber cuándo llegará.
- **Estados:** E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Pedidos + tracking/estados

**Criterios de aceptación (GWT)**
- **Given** que tengo un pedido, **When** entro a “Mis pedidos”, **Then** veo el estado (Pendiente/Enviado/Entregado…).
- **Given** que existe número de guía, **When** está disponible, **Then** lo veo y puedo abrir tracking externo (si aplica).

---

### CUST-13 — Ver estado del pago

- **Historia:** Como **cliente** quiero ver el **estado del pago** para confirmar si fue aprobado o si debo intentar de nuevo.
- **Estados:** E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Pasarela + registro de transacción

**Criterios de aceptación (GWT)**
- **Given** que hice un intento de pago, **When** entro al pedido, **Then** veo “aprobado / pendiente / rechazado” claramente.
- **Given** que fue rechazado, **When** elijo “reintentar”, **Then** puedo volver a pagar sin duplicar el pedido.

---

### CUST-14 — Cancelar compra en proceso (reglas por estado)

- **Historia:** Como **cliente** quiero **cancelar** una compra que esté en proceso para corregir un error o desistir.
- **Estados:** E2
- **Prioridad:** Post-MVP
- **Nivel de aprendizaje:** Alto
- **Dependencias:** Definir estados cancelables + reembolsos/soporte

**Criterios de aceptación (GWT)**
- **Given** que mi pedido está en un estado permitido (ej. “Pendiente”), **When** doy “Cancelar”, **Then** el pedido queda “Cancelado” y se registra motivo.
- **Given** que mi pedido ya está “Enviado”, **When** intento cancelar, **Then** el sistema lo bloquea y sugiere contactar soporte.

---

### CUST-15 — Reseñas solo para comprador verificado

- **Historia:** Como **cliente** quiero dejar una **reseña** del producto comprado para ayudar a otros compradores.
- **Estados:** E3
- **Prioridad:** Post-MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Entregas confirmadas + sistema de reseñas

**Criterios de aceptación (GWT)**
- **Given** que tengo un pedido entregado, **When** entro al producto, **Then** puedo publicar reseña con calificación y comentario.
- **Given** que no soy verificado, **When** intento reseñar, **Then** el sistema no lo permite.

---

## Épica C4 — Cuenta y perfil

### CUST-16 — Registrarse (E0 → E1)

- **Historia:** Como **cliente** quiero **registrarme** para tener una cuenta y ver mi historial de compras.
- **Estados:** E0
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Auth + base de usuarios

**Criterios de aceptación (GWT)**
- **Given** que soy invitado, **When** completo registro válido, **Then** creo cuenta y quedo logueado (E1).
- **Given** que el correo ya existe, **When** registro, **Then** veo error y opción de iniciar sesión.

---

### CUST-17 — Iniciar / cerrar sesión

- **Historia:** Como **cliente** quiero **iniciar y cerrar sesión** para acceder a mi cuenta de forma segura.
- **Estados:** E0 (solo iniciar), E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Auth

**Criterios de aceptación (GWT)**
- **Given** que tengo cuenta, **When** inicio sesión con credenciales válidas, **Then** entro a mi cuenta.
- **Given** que cierro sesión, **When** confirmo, **Then** vuelvo a estado no autenticado y se bloquean rutas privadas.

---

### CUST-18 — Editar datos de perfil

- **Historia:** Como **cliente** quiero **editar mis datos** para mantener mi información actualizada.
- **Estados:** E1, E2, E3
- **Prioridad:** Post-MVP
- **Nivel de aprendizaje:** Medio
- **Dependencias:** Auth + perfil

**Criterios de aceptación (GWT)**
- **Given** que estoy logueado, **When** edito perfil y guardo, **Then** se actualiza en BD.
- **Given** que un dato es inválido, **When** guardo, **Then** el sistema valida y no guarda.

---

### CUST-19 — Eliminar cuenta (con reglas)

- **Historia:** Como **cliente** quiero **eliminar mi cuenta** para controlar mis datos.
- **Estados:** E1, E2, E3
- **Prioridad:** Post-MVP
- **Nivel de aprendizaje:** Alto
- **Dependencias:** Reglas legales/operativas + manejo de pedidos históricos

**Criterios de aceptación (GWT)**
- **Given** que solicito eliminar cuenta, **When** confirmo (doble confirmación), **Then** la cuenta se desactiva/elimina según reglas definidas.
- **Given** que tengo pedidos asociados, **When** elimino cuenta, **Then** el sistema conserva lo necesario para trazabilidad sin exponer datos personales (según reglas).

---

## Épica C5 — Seguridad (cliente)

### CUST-20 — Datos cifrados

- **Historia:** Como **cliente** quiero que mis datos estén **cifrados** para proteger mi información.
- **Estados:** E1, E2, E3
- **Prioridad:** MVP (base) + mejoras continuas
- **Nivel de aprendizaje:** Alto
- **Dependencias:** Infra/Seguridad

**Criterios de aceptación (GWT)**
- **Given** que navego el sitio, **When** envío datos (login/checkout), **Then** la comunicación ocurre por HTTPS.
- **Given** que guardo datos sensibles (contraseña), **When** se almacenan, **Then** se guardan de forma segura (hash/medidas de seguridad, no texto plano).
- **Given** que ocurre un error, **When** el sistema responde, **Then** no expone datos sensibles en mensajes.

---

### CUST-21 — No exponer datos bancarios (solo pasarela)

- **Historia:** Como **cliente** quiero que nadie tenga acceso a mis **datos bancarios** más allá de la **pasarela de pago**.
- **Estados:** E1, E2, E3
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Alto
- **Dependencias:** Pasarela de pago correctamente integrada

**Criterios de aceptación (GWT)**
- **Given** que pago, **When** ingreso datos de tarjeta, **Then** se capturan en la pasarela (no en el servidor propio).
- **Given** que reviso mi pedido, **When** veo detalles, **Then** nunca se muestra información completa de tarjeta (solo últimos 4 si aplica).

---
### CUST-22 — Precio especial mayorista

- **Historia:** Como **cliente mayorista** quiero tener una seccion especifica para mis compras (con precios y demas ajustados) .
- **Estados:** E4
- **Prioridad:** MVP
- **Nivel de aprendizaje:** Bajo 
- **Dependencias:** Pasarela de pago correctamente integrada

**Criterios de aceptación (GWT)**
- **Given** entro como mayorista , **When** quiero comprar, **Then** Tengo un precio especial



---
