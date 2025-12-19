

# Épica A — Gestión de pedidos (operación y estado)

## ADMIN-01 — Vista general de pedidos

- **Historia:** Como **administrador** quiero ver **todos los pedidos** con su **estado actual** para poder priorizar y atenderlos en el orden correcto.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Bajo  
- **Dependencias:** Auth / Login de administrador

### Criterios de aceptación (GWT)

- **Given** que estoy autenticado como administrador, **When** entro a “Pedidos”, **Then** veo una lista con ID del pedido, cliente, fecha, total y estado.
- **Given** que existen pedidos con diferentes estados, **When** miro la lista, **Then** identifico claramente el estado de cada pedido (ej. Pendiente, Pagado, Enviado, Entregado, Cancelado).
- **Given** que hay muchos pedidos, **When** uso búsqueda o filtros, **Then** puedo filtrar por estado, fecha o cliente y la lista se actualiza.

---

## ADMIN-02 — Cambio de estado de un pedido

- **Historia:** Como **administrador** quiero poder **cambiar el estado** de cada pedido para informar el progreso al cliente y mantener el flujo de operación actualizado.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** ADMIN-01 (Vista general de pedidos)

### Criterios de aceptación (GWT)

- **Given** que estoy en un pedido específico, **When** selecciono un nuevo estado y confirmo, **Then** el sistema actualiza el estado y lo refleja en la lista y en el detalle.
- **Given** que intento asignar un estado inválido o fuera del flujo, **When** confirmo, **Then** el sistema bloquea el cambio y muestra un mensaje de error.
- **Given** que el cambio fue exitoso, **When** recargo la página, **Then** el estado permanece guardado (persistencia en BD).

---

## ADMIN-03 — Detalle completo de un pedido

- **Historia:** Como **administrador** quiero ver el **detalle de cada pedido** (productos, cantidades, dirección, contacto, pagos) para gestionarlo de forma efectiva.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Bajo  
- **Dependencias:** ADMIN-01 (Vista general de pedidos)

### Criterios de aceptación (GWT)

- **Given** que estoy en la lista de pedidos, **When** abro un pedido, **Then** veo productos, cantidades, precios, subtotal, envío, total y datos del cliente.
- **Given** que el pedido tiene información logística, **When** veo el detalle, **Then** encuentro dirección, ciudad, teléfono y método de envío (si aplica).
- **Given** que el pedido existe, **When** entro por URL directa al detalle, **Then** el sistema lo carga si tengo permisos; si no, devuelve “No autorizado”.

---

# Épica B — Gestión de productos (CRUD de catálogo)

## ADMIN-04 — Panel de gestión de productos

- **Historia:** Como **administrador** quiero una **vista de gestión de productos** para administrar el catálogo de forma centralizada (listar, buscar, filtrar).  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Bajo  
- **Dependencias:** Auth / Login de administrador

### Criterios de aceptación (GWT)

- **Given** que estoy autenticado como administrador, **When** entro a “Productos”, **Then** veo la lista con nombre, precio, stock, estado (activo/inactivo) y acciones (ver/editar/eliminar).
- **Given** que hay muchos productos, **When** uso búsqueda/filtros, **Then** puedo filtrar por nombre, categoría o estado y la lista se actualiza.
- **Given** que un producto no tiene stock, **When** se muestra en la lista, **Then** el sistema lo marca claramente (ej. “Sin stock”).

---

## ADMIN-05 — Crear producto

- **Historia:** Como **administrador** quiero **agregar productos** para publicar nuevos ítems a la venta en el catálogo.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** ADMIN-04 (Panel de gestión de productos)

### Criterios de aceptación (GWT)

- **Given** que estoy en el panel de productos, **When** hago clic en “Nuevo producto”, **Then** veo un formulario con campos mínimos (nombre, descripción, precio, stock, imágenes).
- **Given** que completo los campos obligatorios correctamente, **When** guardo, **Then** el producto se crea y aparece en la lista.
- **Given** que falta un campo obligatorio o el precio/stock es inválido, **When** intento guardar, **Then** el sistema muestra validaciones y no crea el producto.

---

## ADMIN-06 — Editar producto

- **Historia:** Como **administrador** quiero **editar productos** para mantener actualizado el catálogo (precio, stock, descripción, imágenes).  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** ADMIN-04 (Panel de gestión de productos)

### Criterios de aceptación (GWT)

- **Given** que estoy en la lista de productos, **When** selecciono “Editar” en un producto, **Then** se carga el formulario con los datos actuales.
- **Given** que modifico datos válidos, **When** guardo cambios, **Then** el producto se actualiza y los cambios se reflejan en el catálogo.
- **Given** que intento guardar valores inválidos, **When** guardo, **Then** el sistema bloquea el guardado y muestra el error.

---

## ADMIN-07 — Eliminar producto

- **Historia:** Como **administrador** quiero **eliminar productos** para retirar del catálogo productos que ya no se venderán o que fueron creados por error.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** ADMIN-04 (Panel de gestión de productos)

### Criterios de aceptación (GWT)

- **Given** que estoy en la lista de productos, **When** doy “Eliminar”, **Then** el sistema pide confirmación antes de borrar.
- **Given** que confirmo la eliminación, **When** acepto, **Then** el producto desaparece de la lista y no se muestra en el catálogo público.
- **Given** que cancelo la confirmación, **When** vuelvo atrás, **Then** el producto no se elimina.

---

# Épica C — Ventas y analítica (dashboard financiero)

## ADMIN-08 — Dashboard de ventas

- **Historia:** Como **administrador** quiero ver un **dashboard** con métricas de ventas (total vendido, número de pedidos, ticket promedio) para tener control financiero.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** Pedidos y pagos registrados en BD (Épica A)

### Criterios de aceptación (GWT)

- **Given** que estoy autenticado como administrador, **When** entro al dashboard, **Then** veo métricas principales (ventas totales, pedidos, clientes, ticket promedio).
- **Given** que hay ventas en el sistema, **When** se carga el dashboard, **Then** los valores coinciden con los datos de pedidos/pagos.
- **Given** que no hay ventas, **When** entro al dashboard, **Then** veo “0” y mensajes informativos (sin errores).

---

## ADMIN-09 — Selección de variables en el dashboard

- **Historia:** Como **administrador** quiero **interactuar con el dashboard** para elegir qué variable ver (ventas, pedidos, productos más vendidos) y analizar mejor el negocio.  
- **Prioridad:** Post-MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** ADMIN-08 (Dashboard de ventas)

### Criterios de aceptación (GWT)

- **Given** que estoy en el dashboard, **When** cambio la variable (ej. “Pedidos” → “Ventas”), **Then** los gráficos/indicadores se actualizan sin recargar toda la página.
- **Given** que selecciono “Productos más vendidos”, **When** se actualiza la vista, **Then** veo ranking con cantidades y/o ingresos por producto.
- **Given** que la variable no tiene datos, **When** la selecciono, **Then** el sistema muestra un estado vacío claro.

---

## ADMIN-10 — Filtro por rango de tiempo

- **Historia:** Como **administrador** quiero filtrar el dashboard por **rango de tiempo** (día/semana/mes/personalizado) para comparar periodos y detectar tendencias.  
- **Prioridad:** Post-MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** ADMIN-08 (Dashboard de ventas)

### Criterios de aceptación (GWT)

- **Given** que estoy en el dashboard, **When** elijo un rango (últimos 7 días / 30 días), **Then** las métricas se recalculan y se muestran solo para ese rango.
- **Given** que selecciono un rango personalizado, **When** pongo fecha inicio/fin y aplico, **Then** el dashboard se actualiza con ese intervalo.
- **Given** que el rango es inválido (inicio > fin), **When** aplico, **Then** el sistema muestra error y no cambia los datos.

---

# Épica D — Roles y acceso (seguridad del panel)

## ADMIN-11 — Panel exclusivo por rol

- **Historia:** Como **administrador** quiero una **vista exclusiva del panel** accesible solo con permisos para mantener la seguridad del sistema y evitar accesos no autorizados.  
- **Prioridad:** MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** Auth / Login + Roles

### Criterios de aceptación (GWT)

- **Given** que no he iniciado sesión o no tengo rol admin, **When** intento entrar a /admin, **Then** el sistema me bloquea (login o “no autorizado”).
- **Given** que soy admin, **When** entro a /admin, **Then** puedo acceder a pedidos, productos y dashboard.
- **Given** que cierro sesión, **When** intento volver con “back”, **Then** el sistema no me deja ver contenido protegido.

---

## ADMIN-12 — Crear cuentas de administrador

- **Historia:** Como **administrador** quiero **agregar cuentas tipo administrador** para delegar tareas y tener mayor control operativo del sistema.  
- **Prioridad:** Post-MVP  
- **Nivel de aprendizaje:** Medio  
- **Dependencias:** ADMIN-11 (Roles y acceso)

### Criterios de aceptación (GWT)

- **Given** que soy admin, **When** entro a “Usuarios/Roles”, **Then** puedo crear un usuario con rol “admin”.
- **Given** que creo un admin con correo ya existente, **When** guardo, **Then** el sistema lo impide y muestra error.
- **Given** que el admin fue creado, **When** inicia sesión, **Then** puede acceder al panel según permisos.
