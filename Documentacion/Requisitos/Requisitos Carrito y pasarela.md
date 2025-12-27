# Requerimientos Carrito y pasarela

## A) UI (acceso y vista del carrito)

- **REQ-CUST07-01 (UI)** — El sistema debe mostrar un acceso al carrito visible (icono/botón) desde el header o navegación principal.
- **REQ-CUST07-02 (UI)** — El acceso al carrito debe mostrar un indicador de cantidad de ítems (badge) cuando haya productos.
- **REQ-CUST07-03 (UI)** — El sistema debe ofrecer una vista de carrito (página o drawer) que liste los ítems agregados.
- **REQ-CUST07-04 (UI)** — Cada ítem del carrito debe mostrar mínimo: nombre, precio unitario, cantidad, subtotal del ítem (precio×cantidad).
- **REQ-CUST07-05 (UI)** — La vista del carrito debe mostrar resumen: subtotal general y total (si aún no hay envíos/impuestos, al menos subtotal).
- **REQ-CUST07-06 (UI)** — El botón “Continuar / Ir a pagar” debe estar deshabilitado si el carrito está vacío.

---

## B) Funcional (acciones core: agregar, quitar, vaciar)

- **REQ-CUST07-07 (FR)** — El sistema debe permitir agregar un producto al carrito desde la ficha o catálogo.
- **REQ-CUST07-08 (FR)** — Si el producto ya existe en el carrito, al agregarlo de nuevo, el sistema debe incrementar la cantidad (no duplicar filas).
- **REQ-CUST07-09 (FR)** — El sistema debe permitir aumentar/disminuir cantidad de un ítem desde la interfaz del carrito.
- **REQ-CUST07-10 (FR)** — El sistema debe permitir eliminar un ítem del carrito (removerlo por completo).
- **REQ-CUST07-11 (FR)** — Si la cantidad de un ítem llega a 0, el sistema debe removerlo del carrito.
- **REQ-CUST07-12 (FR)** — El sistema debe permitir vaciar el carrito completo con una sola acción (“Eliminar todo”).
- **REQ-CUST07-13 (FR)** — Al realizar cambios (add/remove/qty), el sistema debe recalcular totales de forma inmediata.

---

## C) Reglas de negocio y validaciones (stock y consistencia)

- **REQ-CUST07-14 (BR)** — El sistema debe impedir que la cantidad solicitada supere el stock disponible y debe informar el máximo permitido.
- **REQ-CUST07-15 (BR)** — Si un producto en el carrito queda no disponible (sin stock / despublicado), el sistema debe notificarlo y bloquear el pago hasta corregirlo (quitar o ajustar).
- **REQ-CUST07-16 (BR)** — El total del carrito debe calcularse usando precios vigentes (no confiar en valores manipulados del lado cliente).

---

## D) Persistencia del carrito (pendiente por definir)

> Aquí no se fija una sola solución: queda como Pendiente por definir y se documentan opciones.
> 
- **REQ-CUST07-17 (DATA)** — **Pendiente por definir** — El carrito debe persistir cuando el usuario recarga la página.

**Opciones:**

- **Opción A (MVP rápido):** persistir en `localStorage` para invitado.
- **Opción B (más robusto):** persistir en BD asociado a usuario logueado.
- **Opción C (híbrido):** guest local → al loguear se migra.

---

## E) Checkout / pasarela (salida del carrito)

- **REQ-CUST07-18 (FR)** — Al presionar “Ir a pagar”, el sistema debe crear una intención de checkout (o iniciar flujo de pedido) y navegar al paso de pago/checkout.
- **REQ-CUST07-19 (FR)** — El sistema debe validar que el carrito no esté vacío y que los ítems sean válidos antes de permitir el checkout.

---

## F) Errores / Mensajes (calidad de UX)

- **REQ-CUST07-20 (UX)** — Si ocurre un error al actualizar el carrito, el sistema debe mostrar un mensaje claro y mantener el estado consistente (no dejar totales rotos).
- **REQ-CUST07-21 (UX)** — Al vaciar el carrito, el sistema debe pedir confirmación para evitar acciones accidentales (modal o confirm inline).

---

## G) Seguridad (mínimo para no dejar huecos)

- **REQ-CUST07-22 (SEC)** — El servidor debe recalcular precios/totales y validar stock en backend antes de checkout (no confiar en el frontend).
- **REQ-CUST07-23 (SEC)** — Las operaciones de carrito deben protegerse contra requests inválidos (IDs inexistentes, cantidades negativas, etc.).

---

## H) Analítica mínima (útil para negocio)

- **REQ-CUST07-24 (ANA)** — El sistema debe registrar eventos mínimos: `add_to_cart`, `remove_from_cart`, `begin_checkout` (aunque sea con una herramienta básica).

# 

# Requerimientos — Pasarela de pago + Pedido interno (MVP sin usuarios)

## A) Datos mínimos a capturar (DATA)

- **REQ-PAY-01 (DATA, MVP)** — El sistema debe capturar mínimo del pagador: **nombre, email, teléfono** (para contacto y comprobante).
- **REQ-PAY-02 (DATA, MVP)** — Si hay envío, el sistema debe capturar **dirección de entrega** (o delegarlo a la pasarela si soporta shipping form).
- **REQ-PAY-03 (DATA, MVP)** — El sistema debe generar un **order_id único** (referencia) por **intento de compra**.

---

## B) Creación de la transacción / sesión (INT/FR)

- **REQ-PAY-04 (INT, MVP)** — El backend debe crear una “sesión” de pago (transacción/preferencia/form) incluyendo: **order_id, amount, currency, items**, y **datos mínimos del pagador** cuando aplique.
- **REQ-PAY-05 (FR, MVP)** — El sistema debe **redirigir** (o **abrir widget**) para que el cliente complete el pago **sin ingresar datos sensibles en tu servidor**.

---

## C) Retorno del usuario (UX/FR)

- **REQ-PAY-06 (FR, MVP)** — El sistema debe tener una **URL de resultado** para retornar al usuario y mostrar estado de compra (**aprobado / rechazado / pendiente**).
- **REQ-PAY-07 (UX, MVP)** — La pantalla de resultado debe mostrar mínimo: **estado**, **referencia (order_id)**, **valor**, **moneda**, **fecha**.

---

## D) Confirmación backend (SEC/INT) — CRÍTICO

- **REQ-PAY-08 (INT, MVP)** — El sistema debe recibir **confirmación server-to-server** (webhook/confirmation URL/eventos) para actualizar el pedido **aunque el usuario no regrese**.
- **REQ-PAY-09 (SEC, MVP)** — El backend debe **validar la autenticidad** de la notificación (firma/secret/headers según pasarela) antes de marcar un pedido como **“pagado”**.
- **REQ-PAY-10 (SEC, MVP)** — El endpoint de confirmación debe ser **idempotente**: si llega la misma notificación varias veces, **no duplica** el pedido ni el despacho.

---

## E) Pedido interno (porque no hay usuarios) (FR/DATA)

- **REQ-ORD-01 (DATA, MVP)** — El sistema debe crear un registro interno **“Pedido”** antes de pagar con estado **PENDIENTE_PAGO**.
- **REQ-ORD-02 (FR, MVP)** — Al recibir confirmación, el pedido cambia a **PAGADO / RECHAZADO / PENDIENTE** y se guarda el **transaction_id** de la pasarela.
- **REQ-ORD-03 (FR, MVP)** — El sistema debe poder **buscar un pedido por order_id** y mostrar su estado (para soporte por WhatsApp).

# 📌 Requisitos CUST-01 — Información de la problemática (Landing)

## REQ-CUST-01-01 (UI, MVP)
El sistema debe mostrar información descriptiva de la problemática ambiental al momento de ingresar a la página principal, sin requerir interacción previa del usuario.

## REQ-CUST-01-02 (UI, MVP)
El sistema debe mostrar contenido visual asociado a la problemática, incluyendo imágenes relevantes.

## REQ-CUST-01-03 (UX, MVP)
El sistema debe presentar las imágenes de forma fluida y optimizada, evitando cortes, saltos bruscos o tiempos de carga perceptibles para el usuario.

---

# 📌 Requisitos CUST-02 — Logros del equipo

## REQ-CUST-02-01 (UI, MVP)
El sistema debe mostrar información relacionada con los logros alcanzados por el equipo, tales como reconocimientos, convocatorias, premios o participaciones relevantes.

## REQ-CUST-02-02 (UX, MVP)
El sistema debe presentar los logros de forma clara y ordenada para generar confianza y credibilidad en el proyecto.

---

# 📌 Requisitos CUST-03 — Medios de contacto

## REQ-CUST-03-01 (UI, MVP)
El sistema debe mostrar de forma visible los medios de contacto disponibles del proyecto.

## REQ-CUST-03-02 (UI, MVP)
El sistema debe mostrar enlaces funcionales que redirijan directamente a cada medio de contacto disponible.

## REQ-CUST-03-03 (UI, MVP)
El sistema debe disponer de un botón específico por cada medio de contacto, claramente identificable para el usuario.

## REQ-CUST-03-04 (INT, MVP)
El sistema debe contar con una lógica en el backend que permita la conexión a los medios de contacto mediante APIs o esquemas de integración externos, cuando aplique (por ejemplo, WhatsApp, correo o redes sociales).

---

# 📌 Requisitos TECH-12 — Pasarela de pago y formulario

## REQ-TECH-12-01 (UI, MVP)
El sistema debe poseer una vista dedicada que contenga un formulario para la captura de datos del usuario durante el proceso de pago.

## REQ-TECH-12-02 (SEC, MVP)
El sistema debe presentar el formulario de pago bajo un esquema HTTPS, garantizando la transmisión segura de la información del usuario.

## REQ-TECH-12-03 (INT, MVP)
El sistema debe conectarse de forma segura con la API de la pasarela de pago seleccionada, siguiendo las especificaciones oficiales del proveedor.

## REQ-TECH-12-04 (INT, MVP)
El sistema debe enviar la información capturada en el formulario a la pasarela de pago a través de su API, incluyendo los datos requeridos para la creación de la transacción.

## REQ-TECH-12-05 (INT, MVP)
El sistema debe recibir información desde la pasarela de pago, mediante su API, sobre el estado de la transacción (aprobada, rechazada, pendiente u otro estado definido).

## REQ-TECH-12-06 (INT, MVP)
El sistema debe enviar la información recibida desde la pasarela de pago a un correo de soporte, utilizando una API de envío de correos.

## REQ-TECH-12-07 (INT, MVP)
El sistema debe implementar una lógica interna de control que evite la duplicación o eliminación accidental de pagos durante el procesamiento de eventos.

## REQ-TECH-12-08 (INT, MVP)
El sistema debe procesar los webhooks de la pasarela de pago de forma idempotente, garantizando que un mismo evento no sea procesado más de una vez.

