# spinf-tabs

Componente de tabs para organizar contenido en secciones alternables.

## Props

### spinf-tabs

| Property    | Attribute    | Description           | Type     | Default |
| ----------- | ------------ | --------------------- | -------- | ------- |
| `activeTab` | `active-tab` | Tab activo inicial    | `number` | `0`     |

### spinf-tab-item

| Property     | Attribute    | Description            | Type      | Default |
| ------------ | ------------ | ---------------------- | --------- | ------- |
| `disabled`   | `disabled`   | Si el tab está deshabilitado | `boolean` | `false` |
| `index`      | `index`      | Índice del tab         | `number`  | `0`     |

## Events

| Event      | Description        | Type                  |
| ---------- | ------------------ | --------------------- |
| `tabChange` | Evento al cambiar de tab | `CustomEvent<number>` |

## Usando el componente

\`\`\`html
<spinf-tabs active-tab="0">
  <spinf-tab-item index="0">Tab 1</spinf-tab-item>
  <spinf-tab-item index="1">Tab 2</spinf-tab-item>
  <spinf-tab-item index="2" disabled>Tab 3</spinf-tab-item>
</spinf-tabs>
\`\`\`

## Características

- Estados: Active, Hover, Selected, Disabled
- Interacción con teclado (Arrow keys)
- Responsive con scroll en mobile
- Accesibilidad completa (ARIA)
- Animaciones suaves
