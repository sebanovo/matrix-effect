# Matrix Effect

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm16bGVwMDJvMXYwN3lxaThhZnoxdTVvanc5cjdnaTNtYmxjMmZqMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/smzfl3E7a4iHK/giphy.gif" alt="matrix effect">
</p>

Este proyecto implementa un efecto Matrix en un lienzo HTML utilizando JavaScript. La
animación muestra caracteres que caen en columnas, similar al efecto visual de la película
Matrix.

## Características

- Personalización de tamaño de fuente.
- Configuración de FPS (cuadros por segundo) para controlar la velocidad de la animación.
- Opciones para establecer caracteres personalizados.
- Fácil integración con cualquier elemento `canvas` de HTML.

## API

### Constructor

`Matrix(canvas, options)`

- `canvas`: El elemento canvas donde se dibujará el efecto.
- `options`: Un objeto opcional para configurar el ancho, alto, tamaño de fuente, FPS y
  caracteres.

### Métodos

- `play()`: Inicia la animación.
- `pause()`: Pausa la animación.
- `continue()`: Continúa la animación desde donde se pausó.

## Ejemplo

```html
<canvas id="matrix"></canvas>

<script src="matrix.js"></script>

<script>
  const canvas = document.getElementById('matrix')
  const matrixEffect = new Matrix(canvas, {
    width: window.innerWidth,
    height: window.innerHeight
  })
  matrixEffect.play()
</script>
```
