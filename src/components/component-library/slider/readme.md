# spinf-slider

Componente de barra de progreso para Carousel con 3 etapas y dos botones de navegación.

## Props

| Property | Attribute | Description                      | Type      | Default |
| -------- | --------- | -------------------------------- | --------- | ------- |
| `step`   | `step`     | El paso actual (1, 2 o 3)       | `1 \| 2 \| 3` | `1`      |

## Events

| Event         | Description                  | Type                  |
| ------------- | ---------------------------- | --------------------- |
| `slideChange` | Evento emitido al cambiar de paso | `CustomEvent<number>` |

## Usando el componente

\`\`\`html
<spinf-slider step="1"></spinf-slider>
\`\`\`

## Características

- Barra de progreso visual que indica la ubicación actual
- Botones de navegación previo/siguiente
- Tres estados de progreso (inicial, intermedio, final)
- Deshabilitación automática de botones en los extremos
- Diseño responsivo y accesible
