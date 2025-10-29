# app-components



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type     | Default |
| ---------------- | ------------------ | ----------- | -------- | ------- |
| `currentSubPage` | `current-sub-page` |             | `string` | `''`    |


## Events

| Event           | Description | Type                  |
| --------------- | ----------- | --------------------- |
| `subNavigation` |             | `CustomEvent<string>` |


## Shadow Parts

| Part           | Description |
| -------------- | ----------- |
| `"spinf-card"` |             |


## Dependencies

### Used by

 - [app-root](../app-root)

### Depends on

- [spinf-accordion-page](../component-library/accordion)
- [spinf-alert-page](../component-library/alert)
- [spinf-button-page](../component-library/button)
- [spinf-pagination-page](../component-library/pagination)
- [spinf-dropdown-page](../component-library/dropdown)
- [spinf-segmented-buttons-page](../component-library/segmented-buttons)
- [spinf-slider-page](../component-library/slider)
- [spinf-table-page](../component-library/table)
- [spinf-tabs-page](../component-library/tabs)

### Graph
```mermaid
graph TD;
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
  app-root --> app-components
  style app-components fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
