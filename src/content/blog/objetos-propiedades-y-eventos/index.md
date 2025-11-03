---
title: "UNIDAD 2: Objetos, propiedades y eventos"
description: "Listado de los objetos más comunes en una interfaz gráfica de usuario con sus propiedades y eventos principales."
date: "Oct 30 2025"
---

En el desarrollo de interfaces gráficas, los **objetos** representan los elementos visuales que permiten la interacción entre el usuario y la aplicación.  
Cada objeto posee **propiedades**, que definen su aspecto o comportamiento, y **eventos**, que indican acciones del usuario.

| **#** | **Objeto** | **Descripción** | **Propiedades principales** | **Eventos más comunes** |
|------|-------------|----------------|------------------------------|--------------------------|
| 1 | **Button** | Ejecuta una acción al hacer clic. | Text, Enabled, Visible, Size, BackColor | Click, MouseEnter, MouseLeave |
| 2 | **Label** | Muestra texto no editable al usuario. | Text, Font, ForeColor, Visible | Click, MouseHover |
| 3 | **TextBox** | Permite al usuario ingresar texto. | Text, MaxLength, Font, Enabled | TextChanged, KeyPress |
| 4 | **CheckBox** | Permite seleccionar o deseleccionar una opción. | Checked, Text, Visible, Enabled | CheckedChanged, Click |
| 5 | **RadioButton** | Permite seleccionar una sola opción dentro de un grupo. | Checked, Text, GroupName | CheckedChanged, Click |
| 6 | **ComboBox / DropDownList** | Muestra una lista de opciones seleccionables. | Items, SelectedIndex, SelectedItem | SelectedIndexChanged, DropDown |
| 7 | **ListBox** | Permite mostrar y seleccionar varios elementos. | Items, SelectionMode, Visible | SelectedIndexChanged, DoubleClick |
| 8 | **ProgressBar** | Muestra el progreso de una tarea o proceso. | Minimum, Maximum, Value, Style | ValueChanged, MouseHover |
| 9 | **DatePicker / Calendar** | Permite seleccionar una fecha específica. | Value, MinDate, MaxDate | ValueChanged, KeyPress |
| 10 | **Slider / TrackBar** | Permite elegir un valor dentro de un rango. | Minimum, Maximum, Value, Orientation | Scroll, ValueChanged |

**Conclusión:**  
Los objetos de una interfaz gráfica son la base de la experiencia del usuario. Sus propiedades determinan cómo se muestran y sus eventos cómo reaccionan ante la interacción.
