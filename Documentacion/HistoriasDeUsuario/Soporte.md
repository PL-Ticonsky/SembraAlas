# Historias de Usuario  Soporte*

# Épica A — Ingeniería de entrega (CI/CD + entornos)

## TECH-01 — Repo listo para trabajar en equipo

- **Historia:** Como equipo de desarrollo quiero un repo con estructura, convenciones y plantillas (PR/Issues) para reducir caos y re-trabajo.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Bajo  
- **Dependencias:** Ninguna  

### Criterios de aceptación (GWT)

- **Given** estoy en el repo, **When** creo un PR, **Then** aparece un template con checklist (tests, screenshots, migraciones, riesgos).
- **Given** reporto un bug, **When** abro un issue, **Then** tengo campos mínimos (pasos, esperado, actual, evidencia).
- **Given** clono el repo, **When** leo el README, **Then** tengo “cómo correr local” en 10 minutos.

---

---

## TECH-03 — Entornos: staging y producción con rollback

- **Historia:** Como equipo de desarrollo quiero despliegue a staging y producción con rollback para publicar sin miedo.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Alto  
- **Dependencias:** TECH-02  

### Criterios de aceptación (GWT)

- **Given** merge a `main`, **When** se despliega a staging, **Then** puedo probar URLs críticas (home, producto, carrito, checkout).
- **Given** tag/release `vX.Y.Z`, **When** despliego a producción, **Then** queda versionado visible (commit hash o version string).
- **Given** falla el deploy, **When** ejecuto rollback, **Then** vuelvo a la versión anterior funcional en ≤ **Pendiente por definir** minutos.

---

## TECH-04 — Configuración y secretos bien manejados

- **Historia:** Como equipo de desarrollo quiero gestionar secretos (API keys, DB, pasarela) fuera del código para evitar filtraciones.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-03  

### Criterios de aceptación (GWT)

- **Given** el repo, **When** busco claves, **Then** no existen secretos hardcodeados en el código.
- **Given** hay variables por entorno, **When** corro local/staging/prod, **Then** cada entorno usa su configuración.
- **Given** un secreto rota, **When** lo actualizo, **Then** la app sigue funcionando sin cambios de código.

---

# Épica B — Seguridad y control de acceso (mínimo realista)

## TECH-05 — Autenticación base (clientes o solo admin, según decidan)

- **Historia:** Como equipo de desarrollo quiero autenticación (login/logout + reset) para usuarios internos (admin/operaciones) y/o clientes según el alcance.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-04  

### Criterios de aceptación (GWT)

- **Given** un usuario existe, **When** inicia sesión con credenciales válidas, **Then** obtiene sesión/token y accede a su área.
- **Given** credenciales inválidas, **When** intenta iniciar sesión, **Then** recibe error genérico (sin filtrar info).
- **Given** “olvidé mi contraseña”, **When** solicito reset, **Then** se genera flujo seguro (email o mecanismo definido).

---

## TECH-06 — Roles y permisos (RBAC) para el backoffice

- **Historia:** Como equipo de desarrollo quiero RBAC (admin / operador / solo lectura) para que nadie rompa pedidos o precios.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-05  

### Criterios de aceptación (GWT)

- **Given** rol “operador”, **When** intenta editar precios, **Then** el sistema lo bloquea.
- **Given** rol “admin”, **When** cambia stock/precio/estado de pedido, **Then** queda registro (auditoría).
- **Given** rol “solo lectura”, **When** entra al backoffice, **Then** puede ver pero no mutar datos.

---

## TECH-07 — Protección anti-abuso (rate limiting + reglas básicas)

- **Historia:** Como equipo de desarrollo quiero limitar abuso (bots/spam) en endpoints críticos (login, checkout) para reducir caídas y ataques.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-03  

### Criterios de aceptación (GWT)

- **Given** una IP excede N requests/min en `/login`, **When** supera el umbral, **Then** se bloquea o limita por T minutos.
- **Given** tráfico sospechoso a `/checkout`, **When** se detecta patrón, **Then** se aplica regla (WAF/CDN o rate limit en app).
- **Given** hay bloqueos, **When** reviso logs, **Then** veo endpoint, timestamp y acción aplicada.

---

## TECH-08 — Checklist OWASP mínimo (basado en ASVS L1)

- **Historia:** Como equipo de desarrollo quiero implementar un baseline de seguridad (validación de entrada, errores seguros, headers, etc.) para evitar vulnerabilidades comunes.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Alto  
- **Dependencias:** TECH-04  

### Criterios de aceptación (GWT)

- **Given** entradas de usuario (forms/APIs), **When** llegan al servidor, **Then** se validan con allow-lists donde aplique.
- **Given** ocurre un error, **When** se responde, **Then** no se filtra stacktrace ni datos sensibles al cliente.
- **Given** se revisan endpoints, **When** hago una pasada de verificación, **Then** cumplo un checklist L1 acordado.

---

# Épica C — Catálogo / Inventario / Órdenes

## TECH-09 — CRUD de productos en backoffice

- **Historia:** Como equipo de desarrollo quiero un backoffice para crear/editar productos (nombre, precio, fotos, descripción, estado activo) para operar sin tocar código.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-06  

### Criterios de aceptación (GWT)

- **Given** rol admin, **When** creo un producto, **Then** aparece en el catálogo público (si está activo).
- **Given** rol admin, **When** edito precio/stock, **Then** el cambio se refleja en la ficha del producto.
- **Given** datos inválidos, **When** intento guardar, **Then** veo errores por campo (server-side + client-side si aplica).

---

## TECH-10 — Inventario y movimientos (con auditoría)

- **Historia:** Como equipo de desarrollo quiero inventario con “movimientos” (ajuste, venta, devolución) para saber qué pasó con el stock.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Alto  
- **Dependencias:** TECH-09  

### Criterios de aceptación (GWT)

- **Given** un SKU, **When** hago un ajuste manual, **Then** registro motivo + usuario + antes/después.
- **Given** una compra aprobada, **When** se confirma, **Then** descuenta stock (regla: al pagar o al crear orden — **Pendiente por definir**).
- **Given** stock insuficiente, **When** intentan comprar, **Then** bloqueo la compra o muestro “sin stock” (regla definida).

---

## TECH-11 — Órdenes y estados operables

- **Historia:** Como equipo de desarrollo quiero un modelo de órdenes con estados (nuevo, pagado, preparando, enviado, entregado, cancelado) para despacho y soporte.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-09  

### Criterios de aceptación (GWT)

- **Given** un cliente checkout, **When** crea una orden, **Then** queda nuevo con items, totales y datos de envío.
- **Given** pago confirmado, **When** llega confirmación, **Then** la orden pasa a pagado.
- **Given** operador actualiza estado, **When** marca enviado, **Then** guarda guía/transportadora (**Pendiente por definir**).

---

# Épica D — Pagos Colombia (pasarela + conciliación)

## TECH-12 — Integración de pasarela de pagos seleccionada

- **Historia:** Como equipo de desarrollo quiero integrar una pasarela (Wompi / Mercado Pago / PayU) para recibir pagos en COP y confirmar transacciones.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Alto  
- **Dependencias:** TECH-11, TECH-04  

### Criterios de aceptación (GWT)

- **Given** una orden nuevo, **When** inicio pago, **Then** genero referencia única + firma/seguridad según pasarela.
- **Given** el usuario paga, **When** vuelve a la tienda, **Then** ve estado “pendiente” hasta confirmación server-to-server.
- **Given** falla el pago, **When** la pasarela devuelve rechazo, **Then** la orden queda fallida o pendiente (regla definida).

---

## TECH-13 — Webhooks idempotentes para confirmar pago

- **Historia:** Como equipo de desarrollo quiero procesar webhooks de la pasarela de forma idempotente para no duplicar cobros/órdenes.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Alto  
- **Dependencias:** TECH-12  

### Criterios de aceptación (GWT)

- **Given** llega el mismo webhook 2 veces, **When** proceso el segundo, **Then** no duplico cambios (idempotency key / evento ya procesado).
- **Given** webhook válido, **When** lo recibo, **Then** actualizo orden a pagado y genero comprobante interno.
- **Given** webhook inválido/no firmado, **When** llega, **Then** respondo 4xx y registro evento sospechoso.

---

# Épica E — Observabilidad, alertas y analítica

## TECH-14 — Logs estructurados + correlación de requests

- **Historia:** Como equipo de desarrollo quiero logs estructurados con `request_id`/`trace_id` para depurar rápido errores de checkout/pagos.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-03  

### Criterios de aceptación (GWT)

- **Given** una request, **When** entra al backend, **Then** se le asigna `request_id` y aparece en logs.
- **Given** un error 5xx, **When** ocurre, **Then** el log incluye endpoint, status, request_id y contexto mínimo.
- **Given** un pago, **When** se crea y confirma, **Then** puedo rastrear la orden en logs de punta a punta.

---

## TECH-15 — Healthcheck + alertas por SLO básico

- **Historia:** Como equipo de desarrollo quiero healthchecks y alertas (error rate / latencia) para enterarnos antes de perder ventas.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-14  

### Criterios de aceptación (GWT)

- **Given** endpoint `/health`, **When** lo consulto, **Then** responde 200 si DB + servicios críticos están OK.
- **Given** sube el error rate, **When** supera Z% por T minutos, **Then** se dispara alerta al canal definido.
- **Given** cae checkout, **When** falla la URL crítica, **Then** alerta inmediata (ping/uptime).

---

## TECH-16 — Instrumentación GA4 e-commerce (eventos recomendados)

- **Historia:** Como equipo de desarrollo quiero enviar eventos GA4 (`view_item`, `add_to_cart`, `begin_checkout`, `purchase`) para medir conversión real.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-11  

### Criterios de aceptación (GWT)

- **Given** un usuario ve un producto, **When** abre la ficha, **Then** se envía `view_item` con `item_id`/nombre/precio.
- **Given** agrega al carrito, **When** confirma, **Then** se envía `add_to_cart` con items.
- **Given** paga exitosamente, **When** se confirma la orden, **Then** se envía `purchase` con valor + moneda + items.

---

# Épica F — Resiliencia y rendimiento

## TECH-17 — Backups + restore probado

- **Historia:** Como equipo de desarrollo quiero backups automáticos y un restore probado para no perder órdenes/inventario.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** TECH-03  

### Criterios de aceptación (GWT)

- **Given** corre el backup, **When** termina, **Then** tengo archivo/instantánea verificable (fecha, tamaño, checksum si aplica).
- **Given** un ambiente de staging, **When** hago restore, **Then** recupero DB y la app arranca sin errores.
- **Given** ocurre un incidente, **When** sigo el runbook, **Then** puedo recuperar en ≤ **Pendiente por definir** RTO.

---

## TECH-18 — Prueba de carga + SLO (lo mínimo)

- **Historia:** Como equipo de desarrollo quiero una prueba de carga para validar que producto/checkout cumplen un SLO bajo picos realistas.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Alto  
- **Dependencias:** TECH-15  

### Criterios de aceptación (GWT)

- **Given** un escenario de X usuarios concurrentes (**Pendiente**), **When** corro la prueba, **Then** p95 de `/producto` y `/checkout` ≤ Y ms.
- **Given** ocurre degradación, **When** se supera el SLO, **Then** queda evidencia (reporte) y se crea issue con causa probable.
- **Given** optimizaciones aplicadas, **When** repito la prueba, **Then** demuestro mejora vs baseline.
como desarrollador quiero que 

