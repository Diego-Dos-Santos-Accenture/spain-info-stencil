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
- [app-modules](../app-modules)

### Graph
```mermaid
graph TD;
  app-root --> app-header
  app-root --> app-navbar
  app-root --> app-sidebar
  app-root --> app-components
  app-root --> app-modules
  app-components --> spinf-accordion-page
  app-components --> spinf-alert-page
  app-components --> spinf-button-page
  app-components --> spinf-pagination-page
  app-components --> spinf-dropdown-page
  app-components --> spinf-segmented-buttons-page
  app-components --> spinf-slider-page
  app-components --> spinf-table-page
  app-components --> spinf-tabs-page
  spinf-accordion-page --> spinf-accordion
  spinf-accordion-page --> spinf-accordion-item
  spinf-alert-page --> spinf-alert
  spinf-button-page --> spinf-button
  spinf-pagination-page --> spinf-pagination
  spinf-dropdown-page --> spinf-dropdown
  spinf-dropdown-page --> spinf-dropdown-option
  spinf-segmented-buttons-page --> spinf-segmented-buttons
  spinf-slider-page --> spinf-slider
  spinf-table-page --> spinf-table
  app-modules --> spinf-list-and-grids
  spinf-list-and-grids --> list-and-grids
  aem-main --> app-root
  style app-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
