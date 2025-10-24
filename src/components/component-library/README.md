# Component Library - Spain.Info Design System

Esta carpeta contiene todos los componentes reutilizables del sistema de diseño Spain.Info.

## Estructura

```
component-library/
├── accordion/
│   ├── accordion.tsx         # Componente principal
│   ├── accordion-container.tsx # Contenedor del acordeón
│   ├── accordion.css         # Estilos del componente
│   └── index.ts              # Exportaciones
├── button/                   # (Próximamente)
├── card/                     # (Próximamente)
└── index.ts                  # Exportaciones principales
```

## Componentes Disponibles

### Accordion (`spinf-accordion`)
Componente de acordeón expandible con animaciones suaves.

**Uso:**
```html
<spinf-accordion>
  <spinf-accordion-item label="Example">Content</spinf-accordion-item>
</spinf-accordion>
```

**Características:**
- Animación suave de expansión/colapso
- Iconos SVG dinámicos
- Accesibilidad completa (ARIA)
- Estilos consistentes con el design system
- Hover effect amarillo (#FFD300)

## Próximos Componentes

- [ ] Button
- [ ] Card
- [ ] Input
- [ ] Modal
- [ ] Table
- [ ] Tabs

## Convenciones

1. **Nomenclatura**: Todos los componentes usan el prefijo `spinf-`
2. **Estructura**: Cada componente tiene su propia carpeta con archivos `.tsx`, `.css` e `index.ts`
3. **Estilos**: Usar las variables CSS del design system
4. **Accesibilidad**: Implementar atributos ARIA apropiados
5. **Documentación**: Cada componente debe tener documentación clara
