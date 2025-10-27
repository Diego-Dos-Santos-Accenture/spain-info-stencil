# spinf-table

Componente de tabla para organizar y presentar datos en filas y columnas.

## Props

| Property  | Attribute | Description                           | Type     | Default |
| --------- | --------- | ------------------------------------- | -------- | ------- |
| `headers` | `headers` | Array JSON de encabezados             | `string` | `'[]'`  |
| `rows`    | `rows`    | Array JSON de filas                   | `string` | `'[]'`  |
| `variant` | `variant` | Variante de la tabla (master/example) | `string` | `''`    |

## Usando el componente

\`\`\`html
<spinf-table 
  headers='["Col 1","Col 2"]'
  rows='[["A","B"],["C","D"]]'
  variant="example"
></spinf-table>
\`\`\`

## Características

- Tabla responsive con colapsado de bordes
- Encabezados con fondo oscuro (#1B1C20)
- Filas con separadores visuales (#EAEAEA)
- Soporte para múltiples variantes
- Accesible con estructura semántica HTML
