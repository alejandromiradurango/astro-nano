---
title: "UNIDAD 2: Aplicaciones multiplataforma basadas en POO"
description: "Explicación detallada del uso de interfaces en la Programación Orientada a Objetos y su aplicación en entornos multiplataforma."
date: "Oct 28 2025"
---

La **Programación Orientada a Objetos (POO)** es uno de los paradigmas más utilizados en el desarrollo de software moderno, especialmente cuando se busca crear **aplicaciones multiplataforma**, es decir, programas que puedan ejecutarse en distintos sistemas operativos o dispositivos sin necesidad de reescribir el código base.

Gracias a los principios de la POO, los desarrolladores pueden estructurar el software de forma **modular, escalable y reutilizable**, utilizando conceptos como **clases, objetos, herencia, polimorfismo, abstracción y encapsulación**.

## Interfaces en la POO

Una **interfaz** define un conjunto de métodos que las clases deben implementar obligatoriamente, sin especificar cómo deben hacerlo.  
Esto permite estandarizar comportamientos y garantizar que distintas clases trabajen bajo las mismas reglas, sin importar su implementación interna.

En lenguajes como **C#**, las interfaces se definen con la palabra clave `interface`. Los métodos dentro de una interfaz **no tienen cuerpo** y, por defecto, son **públicos y abstractos**.

### Ejemplo de interfaz en C#:

```csharp
interface IPersona
{
    void validarEdad();
    void validarEstadoCivil();
    void validarEstudios();
}
