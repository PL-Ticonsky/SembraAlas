- Mayorista-Empresa
- Administrador de tienda
- Gestor de contenido-marketing
- Soporte
- Equipo de desarrollo

### Estados Posibles del cliente

- **E0 — Invitado:** no ha iniciado sesión (puede o no comprar, depende de tu decisión).
- **E1 — Registrado (sin compra):** tiene cuenta y sesión iniciada.
- **E2 — Cliente con pedido:** tiene al menos un pedido creado (puede estar “pendiente/aprobado/enviado…”).
- **E3 — Cliente verificado:** tiene al menos un pedido **entregado** (habilita reseñas “comprador verificado”).

## Como Cliente

**Descubrimiento/Confianza**

- Como cliente, quiero ver la problemática de las abejas para entender el propósito del proyecto.
→ **E0, E1, E2, E3**
- Como cliente, quiero ver la historia/logros del proyecto para confiar y motivarme a apoyar comprando.
→ **E0, E1, E2, E3**
- Como cliente, quiero poder acceder a redes sociales/contacto para resolver dudas antes de comprar.
→ **E0, E1, E2, E3**

**Explorar productos**

- Como cliente, quiero ver el catálogo de productos para elegir qué comprar.
→ **E0, E1, E2, E3**
- Como cliente, quiero ver la ficha del producto (precio, fotos,metodos de pago, descripción, stock) para decidir si me conviene.
→ **E0, E1, E2, E3**
- Como cliente, quiero compartir el link de un producto para recomendárselo a otras personas.
→ **E0, E1, E2, E3**

**Carrito y checkout**

- Como cliente, quiero agregar/quitar productos del carrito para preparar mi compra.
→  **E1, E2, E3**
- Como cliente, quiero ingresar mi dirección de entrega para recibir el pedido.
→  **E1, E2, E3**
- Como cliente, quiero ver el costo del envío antes de pagar para conocer el total.
→ **E1, E2, E3**
- Como cliente, quiero pagar con métodos disponibles para finalizar la compra.
→  **E1, E2, E3**
    
    **Personalización**
    
- Como cliente, quiero seleccionar la cantidad y el tipo de flores (si aplica) para personalizar mi pedido según mi preferencia.
→  **E1, E2, E3**
    
    *(definir después reglas: “qué opciones existen”, “si cambia el precio”, “si depende del stock”).*
    

**Post-compra**

- Como cliente, quiero ver el estado de envío del pedido para saber cuándo llegará.
→  **E2, E3**
- Como cliente, quiero ver el estado del pago para confirmar si fue aprobado o si debo intentar de nuevo.
→ **E2, E3**
- Como cliente, quiero cancelar una compra que esté en proceso para corregir un error o desistir. *(acotar estados permitidos)*
→ **E2**
- Como cliente, quiero dejar una reseña del producto comprado para ayudar a otros compradores.
→ **E3**

---

- Como cliente, quiero registrarme para tener una cuenta y ver mi historial de compras.
→ **E0 (pasa a E1)**
- Como cliente, quiero iniciar y cerrar sesión para acceder a mi cuenta de forma segura.
→  **E0(solo iniciar), E1, E2, E3 (iniciar y cerrar)**
- Como cliente, quiero editar mis datos de perfil para mantener mi información actualizada.
    
    →  **E1, E2, E3**
    
- Como cliente, quiero eliminar mi cuenta para controlar mis datos.
    
    →  **E1, E2, E3 (Tener Reglas para esto)**
**Seguridad**

- Como cliente, quiero que mis datos esten cifrados>
→  **E1 ,E2, E3**
- Como cliente, quiero que nadie tenga acceso a mis cuentas bancarias mas alla de la pasarela de pago>
→ **E1 ,E2, E3**
