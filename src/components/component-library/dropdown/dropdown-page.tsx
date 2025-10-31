import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'spinf-dropdown-page',
  styleUrl: 'dropdown.css',
  shadow: false
})
export class DropdownPage {
  @State() selectedValue: string = '';

  private handleDropdownChange = (event: CustomEvent) => {
    this.selectedValue = event.detail;
  };

  render() {
    return (
      <section class="dropdown-page">
        <h1>Desplegable</h1>
        <p>
          El desplegable es un componente que permite a los usuarios seleccionar una opción de una lista.
        </p>

        <div class="dropdown-behavior">
          <p>Al hacer click o tap sobre el componente, este se expande o se cierra mostrando un listado de opciones.</p>

          <div class="dropdown-behavior-examples">
            <spinf-dropdown size="l" label="Santa Cruz de Tenerife" onDropdownChange={this.handleDropdownChange}>
              <spinf-dropdown-option>Madrid</spinf-dropdown-option>
              <spinf-dropdown-option>Barcelona</spinf-dropdown-option>
              <spinf-dropdown-option>Valencia</spinf-dropdown-option>
              <spinf-dropdown-option>Sevilla</spinf-dropdown-option>
              <spinf-dropdown-option>Santa Cruz de Tenerife</spinf-dropdown-option>
              <spinf-dropdown-option>Bilbao</spinf-dropdown-option>
              <spinf-dropdown-option>Málaga</spinf-dropdown-option>
            </spinf-dropdown>
            
            <spinf-dropdown size="s" label="Santa Cruz de Tenerife" onDropdownChange={this.handleDropdownChange}>
              <spinf-dropdown-option>Madrid</spinf-dropdown-option>
              <spinf-dropdown-option>Barcelona</spinf-dropdown-option>
              <spinf-dropdown-option>Valencia</spinf-dropdown-option>
              <spinf-dropdown-option>Sevilla</spinf-dropdown-option>
              <spinf-dropdown-option>Santa Cruz de Tenerife</spinf-dropdown-option>
              <spinf-dropdown-option>Bilbao</spinf-dropdown-option>
              <spinf-dropdown-option>Málaga</spinf-dropdown-option>
            </spinf-dropdown>
          </div>
        </div>

        <div class="dropdown-demo">
          <h2>Ejemplo:</h2>
          
          <spinf-dropdown size="m" label="Label" onDropdownChange={this.handleDropdownChange}>
            <spinf-dropdown-option>Option 1</spinf-dropdown-option>
            <spinf-dropdown-option>Option 2</spinf-dropdown-option>
            <spinf-dropdown-option>Option 3</spinf-dropdown-option>
            <spinf-dropdown-option>Option 4</spinf-dropdown-option>
            <spinf-dropdown-option>Option 5</spinf-dropdown-option>
            <spinf-dropdown-option>Option 6</spinf-dropdown-option>
            <spinf-dropdown-option>Option 7</spinf-dropdown-option>
          </spinf-dropdown>
        </div>
      </section>
    );
  }
}
