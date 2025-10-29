# app-modules



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

- [spinf-list-and-grids](../modules-library/list-and-grids)

### Graph
```mermaid
graph TD;
  app-modules --> spinf-list-and-grids
  spinf-list-and-grids --> list-and-grids
  app-root --> app-modules
  style app-modules fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
