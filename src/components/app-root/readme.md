# app-root



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [aem-main](../..)

### Depends on

- [app-header](../app-header)
- [app-navbar](../app-navbar)
- [app-sidebar](../app-sidebar)
- [app-components](../app-components)

### Graph
```mermaid
graph TD;
  app-root --> app-header
  app-root --> app-navbar
  app-root --> app-sidebar
  app-root --> app-components
  app-components --> spinf-accordion-page
  app-components --> spinf-alert-page
  app-components --> spinf-button-page
  app-components --> spinf-pagination-page
  app-components --> spinf-segmented-buttons-page
  spinf-accordion-page --> spinf-accordion
  spinf-accordion-page --> spinf-accordion-item
  spinf-alert-page --> spinf-alert
  spinf-button-page --> spinf-button
  spinf-pagination-page --> spinf-pagination
  spinf-segmented-buttons-page --> spinf-segmented-buttons
  aem-main --> app-root
  style app-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
