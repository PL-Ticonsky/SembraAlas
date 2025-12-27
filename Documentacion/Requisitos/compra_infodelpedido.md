# Requisitos Funcionales – Catálogo, Productos y Pedidos

---

##  CUST-04 — Ver catálogo de productos

### REQ-FE-004-01 — Acceso a vista de catálogo
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-004-01 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-04 |
| **Descripción** | El sistema debe permitir acceder a la vista de catálogo mediante un botón visible en la interfaz web. |
| **Razón** | Permitir al cliente encontrar fácilmente el catálogo de productos. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un cliente en el sitio<br>- Cuando presiona el botón de catálogo<br>- Entonces se muestra la vista de catálogo |
| **Método de verificación** | E2E |
| **Dependencias** | Diseño-UI |
| **Riesgo / Notas** | Botón mal ubicado reduce descubrimiento |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-FE-004-02 — Visualización de todos los productos
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-004-02 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-04 |
| **Descripción** | La vista de catálogo debe mostrar todos los productos disponibles. |
| **Razón** | Permitir explorar el inventario completo. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado el catálogo<br>- Cuando carga la vista<br>- Entonces se listan todos los productos activos |
| **Método de verificación** | E2E |
| **Dependencias** | REQ-BE-004-01 |
| **Riesgo / Notas** | Carga lenta con muchos productos |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-BE-004-01 — Función para obtener productos
| Campo | Valor |
| --- | --- |
| **ID** | REQ-BE-004-01 |
| **Fuente** | Equipo |
| **Actor (si aplica)** | Sistema |
| **Historias asociadas** | CUST-04 |
| **Descripción** | El backend debe exponer una función que retorne todos los productos disponibles. |
| **Razón** | Proveer datos al catálogo. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado el endpoint<br>- Cuando se consulta<br>- Entonces retorna la lista de productos |
| **Método de verificación** | Unit |
| **Dependencias** | BD-Productos |
| **Riesgo / Notas** | Datos incompletos |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-BE-004-02 — DTO para catálogo
| Campo | Valor |
| --- | --- |
| **ID** | REQ-BE-004-02 |
| **Fuente** | Equipo |
| **Actor (si aplica)** | Sistema |
| **Historias asociadas** | CUST-04 |
| **Descripción** | El sistema debe usar un DTO que incluya solo la información necesaria para la vista de catálogo. |
| **Razón** | Reducir carga de datos y acoplamiento. |
| **Prioridad** | Media – MVP |
| **Criterios de aceptación (GWT)** | - Dado un producto<br>- Cuando se envía al frontend<br>- Entonces solo contiene los campos definidos |
| **Método de verificación** | Unit |
| **Dependencias** | REQ-BE-004-01 |
| **Riesgo / Notas** | DTO incompleto |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-FE-004-03 — Búsqueda de productos
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-004-03 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-04 |
| **Descripción** | El catálogo debe permitir buscar productos por texto. |
| **Razón** | Facilitar encontrar productos específicos. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un texto<br>- Cuando se ejecuta la búsqueda<br>- Entonces se muestran los resultados |
| **Método de verificación** | E2E |
| **Dependencias** | REQ-BE-004-01 |
| **Riesgo / Notas** | Resultados incorrectos |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-FE-004-04 — Filtrado de productos
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-004-04 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-04 |
| **Descripción** | El catálogo debe permitir filtrar productos según criterios definidos. |
| **Razón** | Mejorar la experiencia de navegación. |
| **Prioridad** | Media – V1 |
| **Criterios de aceptación (GWT)** | - Dado un filtro<br>- Cuando se aplica<br>- Entonces se actualiza la lista |
| **Método de verificación** | E2E |
| **Dependencias** | Diseño-UI |
| **Riesgo / Notas** | Filtros confusos |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-FE-004-05 — Mensaje sin resultados
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-004-05 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-04 |
| **Descripción** | El sistema debe mostrar un mensaje cuando no existan productos para mostrar. |
| **Razón** | Evitar confusión del usuario. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un resultado vacío<br>- Cuando se muestra la vista<br>- Entonces aparece un mensaje informativo |
| **Método de verificación** | Manual |
| **Dependencias** | REQ-FE-004-02 |
| **Riesgo / Notas** | Mensaje poco claro |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

##  CUST-05 — Ficha del producto

### REQ-FE-005-01 — Acceso a ficha desde catálogo
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-005-01 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-05 |
| **Descripción** | El sistema debe permitir acceder a la ficha del producto desde el catálogo. |
| **Razón** | Permitir ver información detallada del producto. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un producto<br>- Cuando se selecciona<br>- Entonces se abre su ficha |
| **Método de verificación** | E2E |
| **Dependencias** | REQ-FE-004-02 |
| **Riesgo / Notas** | Enlaces rotos |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-FE-005-02 — Visualización de detalles del producto
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-005-02 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-05 |
| **Descripción** | La ficha del producto debe mostrar precio, fotos, descripción, métodos de pago y stock. |
| **Razón** | Ayudar al cliente a decidir la compra. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un producto<br>- Cuando se visualiza la ficha<br>- Entonces se muestran todos los datos |
| **Método de verificación** | E2E |
| **Dependencias** | REQ-BE-004-01 |
| **Riesgo / Notas** | Información desactualizada |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-FE-005-03 — Agregar al carrito con variantes
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-005-03 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-05 |
| **Descripción** | La ficha del producto debe permitir agregar al carrito seleccionando cantidad y variantes. |
| **Razón** | Comprar productos personalizados. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un producto<br>- Cuando selecciona variantes y cantidad<br>- Entonces se agrega al carrito |
| **Método de verificación** | E2E |
| **Dependencias** | REQ-CAR-001 |
| **Riesgo / Notas** | Stock insuficiente |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

##  CUST-12 — Estado de envío

### REQ-FE-012-01 — Vista Mis Pedidos
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-012-01 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-12 |
| **Descripción** | El sistema debe mostrar una vista llamada “Mis pedidos”. |
| **Razón** | Centralizar el seguimiento de pedidos. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un cliente autenticado<br>- Cuando accede<br>- Entonces ve la vista |
| **Método de verificación** | E2E |
| **Dependencias** | Auth |
| **Riesgo / Notas** | Acceso no autorizado |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

### REQ-FE-012-02 — Detalle de pedido
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-012-02 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-12 |
| **Descripción** | El cliente debe poder visualizar el detalle de un pedido específico. |
| **Razón** | Conocer el estado del envío. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un pedido<br>- Cuando se selecciona<br>- Entonces se muestra su detalle |
| **Método de verificación** | E2E |
| **Dependencias** | REQ-FE-012-01 |
| **Riesgo / Notas** | Estados incorrectos |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |

---

## CUST-13 — Estado del pago

### REQ-FE-013-01 — Visualización del estado del pago
| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-013-01 |
| **Fuente** | Cliente |
| **Actor (si aplica)** | Cliente |
| **Historias asociadas** | CUST-13 |
| **Descripción** | El sistema debe mostrar el estado del pago de cada pedido. |
| **Razón** | Confirmar si el pago fue aprobado o rechazado. |
| **Prioridad** | Alta – MVP |
| **Criterios de aceptación (GWT)** | - Dado un pedido<br>- Cuando se visualiza el detalle<br>- Entonces se muestra el estado del pago |
| **Método de verificación** | E2E |
| **Dependencias** | Pasarela-Pago |
| **Riesgo / Notas** | Estados no sincronizados |
| **Estado** | Propuesto |
| **Autor** | Andro |
| **Versión** | 1.0.0 |
| **Fecha** | 2025-12-27 |
