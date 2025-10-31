import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'spinf-segmented-buttons-page',
  styleUrl: 'segmented-buttons.css',
  shadow: false,
})
export class SpinfSegmentedButtonsPage {
  @State() segmentedSelection1: number = 0;
  @State() segmentedSelection2: number = 0;

  handleSegmentedChange1 = (event: CustomEvent<{ index: number; value: string }>) => {
    this.segmentedSelection1 = event.detail.index;
  };

  handleSegmentedChange2 = (event: CustomEvent<{ index: number; value: string }>) => {
    this.segmentedSelection2 = event.detail.index;
  };

  render() {
    return (
      <section class="segmented-buttons-page">
        <h1>Botón segmentado</h1>
        <p>
          Los botones segmentados permiten seleccionar una opción entre un conjunto de opciones mutuamente excluyentes. 
          Son ideales para filtrar contenido, cambiar vistas o seleccionar estados.
        </p>

        <div class="segmented-buttons-demo">
          <h2>Examples</h2>
          <div class="segmented-buttons-section">
            <spinf-segmented-buttons 
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              selected-index={this.segmentedSelection1}
              onOptionChange={this.handleSegmentedChange1}
            ></spinf-segmented-buttons>
          </div>

          <div class="segmented-buttons-section">
            <spinf-segmented-buttons 
              options={['Option 1', 'Option 2']}
              selected-index={this.segmentedSelection2}
              onOptionChange={this.handleSegmentedChange2}
            ></spinf-segmented-buttons>
          </div>
        </div>
      </section>
    );
  }
}
