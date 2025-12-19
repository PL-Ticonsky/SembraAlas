
# Plantilla De los requerimientos

| Campo | Valor |
| --- | --- |
| **ID** | REQ-FE-001 |
| **Fuente** | PO / Cliente / Equipo / Legal |
| **Actor (si aplica)** | Invitado / Cliente / Mayorista / Admin |
| **Historias asociadas** | CUST-01, ... |
| **Descripción** | (1 sola cosa, sin ambigüedad) |
| **Razón** | (por qué existe) |
| **Prioridad** | Alta / Media / Baja + MVP/V1/V2 |
| **Criterios de aceptación (GWT)** | 3+ bullets |
| **Método de verificación** | Manual / Unit / E2E / Revisión |
| **Dependencias** | REQ-..., US-..., Diseño-... |
| **Riesgo / Notas** | (qué puede salir mal) |
| **Estado** | Propuesto / Aprobado / Implementado / Validado |
| **Autor** | ... |
| **Versión** | 1.0.0 |
| **Fecha** | YYYY-MM-DD |

# Cómo rellenar la tabla de Requisitos (mini-guía)

## 1) Regla de oro
- **1 requisito = 1 cosa verificable**
- Si estás mezclando “menú + permisos + mobile + SEO”, sepáralo en 2–4 requisitos.

---

## 2) Campos clave (qué poner y cómo)

### **ID**
Usa un formato estable:
- `REQ-<MOD>-<TIPO>-<NNN>`
  - MOD: `FE` (frontend), `BE`, `AUTH`, `PAY`, `SHIP`, `AN`
  - TIPO: `FUNC`, `NFR`, `UI`, `CONSTR`
  - NNN: `001`, `002`, `003`…
## Acrónimos (qué significa cada uno)

### MOD (módulo / área del sistema)
- **FE** = *FrontEnd*  
  Todo lo que ve y usa el usuario en el navegador/app: páginas, componentes UI, estilos, navegación.

- **BE** = *BackEnd*  
  Lógica del servidor: APIs, reglas de negocio, autenticación en servidor, procesamiento de pedidos, etc.

- **AUTH** = *Authentication / Authorization*  
  **AuthN** (autenticación): iniciar sesión, recuperar contraseña, tokens.  
  **AuthZ** (autorización): permisos/roles (qué puede hacer/ver cada rol).

- **PAY** = *Payments* (pagos)  
  Integración de pasarelas, confirmación de pago, estados (aprobado/rechazado), conciliación.

- **SHIP** = *Shipping* (envíos / logística)  
  Cálculo de tarifas, direcciones, guía/transportadora, estados de envío.

- **AN** = *Analytics* (analítica)  
  Métricas y eventos: visitas, conversiones, embudos, tracking (GA4, Meta Pixel, etc.).

---

### TIPO (tipo de requisito)
- **FUNC** = *Functional* (funcional)  
  Describe **qué hace** el sistema (comportamiento).  
  Ej: “El usuario puede agregar un producto al carrito”.

- **NFR** = *Non-Functional Requirement* (no funcional)  
  Describe **cómo debe comportarse** en calidad: rendimiento, seguridad, disponibilidad, accesibilidad.  
  Ej: “El sitio debe cargar en < X segundos”.

- **UI** = *User Interface* (interfaz de usuario)  
  Requisitos de pantalla/UX: elementos, layout, navegación visual (ojo: sigue siendo funcional, pero enfocado en interfaz).  
  Ej: “El menú muestra 4 secciones y es accesible en móvil”.

- **CONSTR** = *Constraint* (restricción)  
  Algo impuesto por contexto/decisión: tecnologías, navegadores soportados, normas, límites.  
  Ej: “Soportar Chrome/Firefox” o “Usar pasarela X”.

Ej: `REQ-FE-UI-001`

---

### **Tipo de requisito**
- `FUNC` = funcional (comportamiento)
- `NFR` = no funcional (rendimiento, seguridad, accesibilidad)
- `CONSTR` = restricción (navegadores soportados, stack, etc.)

---

### **Actor / Roles aplicables**
- Si aplica igual para todos: **Roles aplicables = Todos**
- Si cambia por rol: lista roles
  - Ej: `Invitado, Cliente, Mayorista, Admin`

> Tip: si el tema es “quién puede ver/usar algo”, eso suele ser **AUTH** (otro requisito aparte).

---

### **Historias de usuario asociadas**
- Si hay varias: pon una lista
  - Ej: `US-CUST-001, US-CUST-003, US-WHOLE-002`
- Si son muchas: mantén una **matriz RTM** aparte (REQ ↔ US ↔ Tests).

---

### **Descripción**
Escribe en una frase:
- Qué debe existir/hacer el sistema
- Sin “se ve bien”, “rápido”, “correctamente”
- Con términos observables (botón, sección, ruta, mensaje, etc.)

---

### **Criterios de aceptación (GWT)**
Pon 3+ bullets:
- **Given** contexto
- **When** acción
- **Then** resultado observable

Ej:
- Given estoy en Inicio, When hago clic en “Historia”, Then veo la sección/página “Historia”.

---

### **Método de verificación**
Cómo se comprueba:
- `Prueba manual` / `E2E` / `Unit` / `Revisión UI`

---

### **Prioridad + Estado**
- Prioridad: `Alta/Media/Baja` + (si quieres) `MVP/V1/V2`
- Estado: `Propuesto / Aprobado / Implementado / Validado`

---

## 3) Checklist rápido antes de guardar un requisito
- [ ] ¿Se puede probar sin discutir interpretaciones?
- [ ] ¿Tiene ID único y estable?
- [ ] ¿Tiene GWT (mínimo 3)?
- [ ] ¿Roles aplicables claros (Todos o lista)?
- [ ] ¿Está trazado a una o más historias?
