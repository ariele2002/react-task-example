# React Todo List

Es un proyecto del canal [@FaztTech](https://www.youtube.com/@FaztTech) de su [Curso de Reactjs desde Cero para principiantes 2022](https://www.youtube.com/watch?v=rLoWMU4L_qE) en el que le realice algunas modificaciones:

- Agregue al contexto (`TaskContext.jsx`) un estado `myId` para incrementar el id de los tasks y evitar que se dupliquen los ids al eliminar y crear tasks.
- Agregue un `required` en el tag `input` del título de la tarea en `TaskForm.jsx`, para que no se creen tareas sin título. Agregue un `hover` al botón guardar.
- Modifique el `grid` en `TaskList.jsx` para que las tareas se vean una debajo de la otra.
- Modifique en `TaskCard.jsx`, agregando un `div` que contenga título y descripción y un `flex` para ordenarlo, quite el `margin-top` del botón para que quede centrado.
- Quite el `h-screen` y el `bg-zinc-900` del `className` de `App.jsx` y los puse en el `class` del `body` en `index.html` para que el fondo no se corte cuando los tasks superen el `height` del viewport.

## Aclaraciones

Estas modificaciones no son una critica al tutorial ni mucho menos, ya que está enfocado en el tema principal, las bases de React y esta explicado de forma sintética, rápida y concisa. Las modificaciones son para practicar y esa idea mida de cómo mejorar las cosas.

Lo recomiendo: [Curso de Reactjs desde Cero para principiantes 2022](https://www.youtube.com/watch?v=rLoWMU4L_qE).

## Tecnologías Utilizadas

- [React JS](https://reactjs.org/)
- [Vite JS](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Agradecimientos

A Fazt, por sus tutoriales y la divulgación técnica que realiza de forma amena, que es de mucha utilidad para la comunidad.

Les dejo su pagina web: [FaztWeb](https://www.faztweb.com/)
