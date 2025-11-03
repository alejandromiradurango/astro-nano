---
title: "UNIDAD 2: Clases abstractas, estáticas e interfaces"
description: "Comparación entre los tres tipos de estructuras fundamentales en la Programación Orientada a Objetos."
date: "Oct 29 2025"
---

En la **Programación Orientada a Objetos**, existen diferentes tipos de clases que determinan cómo se organiza y comparte la funcionalidad del código.  
A continuación, se presenta una **comparación** entre **clases abstractas**, **clases estáticas** e **interfaces**.

| **Característica** | **Clases abstractas** | **Clases estáticas** | **Interfaces** |
|--------------------|-----------------------|----------------------|----------------|
| **Instanciación** | No se instancian, solo se heredan. | No se instancian. | No se instancian, solo se implementan. |
| **Métodos constructores** | Puede tener constructores. | No tiene constructores. | No tiene constructores. |
| **Implementación** | Se heredan por una o varias clases hijas. | No se heredan ni implementan. | Una clase puede implementar varias interfaces y debe definir sus métodos. |
| **Métodos** | Puede tener métodos abstractos y estáticos. | Solo puede tener métodos estáticos. | Sus métodos son abstractos por defecto, no pueden ser estáticos. |
| **Casos de uso** | Cuando varias clases comparten comportamiento pero con diferencias en la implementación. | Cuando se requieren utilidades o constantes globales sin instancias. | Cuando se quieren definir métodos obligatorios sin importar la jerarquía. |
| **Ejemplo** | Una clase `Humano` abstracta con un método `pensar()` que las clases hijas redefinen según su lógica. | Una clase `Operaciones` con métodos `sumar()` y `restar()` accesibles globalmente. | Una interfaz `MetodoPago` con el método `pagar()` que deben implementar las clases `Tarjeta` y `Efectivo`. |

**Conclusión:**  
Cada tipo de clase tiene un propósito distinto dentro del diseño orientado a objetos. Las **abstractas** ofrecen flexibilidad, las **estáticas** simplifican el acceso global a utilidades y las **interfaces** garantizan consistencia en la implementación.
