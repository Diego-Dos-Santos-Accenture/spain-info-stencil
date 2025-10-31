import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'spinf-pagination-page',
  styleUrl: 'pagination.css',
  shadow: false,
})
export class SpinfPaginationPage {
  @State() paginationPage: number = 2;

  handlePaginationChange = (event: CustomEvent<number>) => {
    this.paginationPage = event.detail;
  }

  render() {
    return (
      <section class="pagination-page">
        <h1>Paginación</h1>
        <p>
          La paginación se emplea cuando se necesita dividir un gran volumen de contenido en secciones más manejables, 
          mejorando así la navegación y el rendimiento de la interfaz.
        </p>

        <div class="pagination-demo">
          <h2>Sizes</h2>
          <div class="pagination-section">
            <h3>Medium (M)</h3>
            <div class="pagination-row">
              <spinf-pagination size="m" current-page={1} total-pages={10} show-numbers={false}></spinf-pagination>
              <spinf-pagination size="m" current-page={5} total-pages={10} show-numbers={false}></spinf-pagination>
              <spinf-pagination size="m" current-page={10} total-pages={10} show-numbers={false}></spinf-pagination>
            </div>
          </div>

          <div class="pagination-section">
            <h3>Small (S)</h3>
            <div class="pagination-row">
              <spinf-pagination size="s" current-page={1} total-pages={10} show-numbers={false}></spinf-pagination>
              <spinf-pagination size="s" current-page={5} total-pages={10} show-numbers={false}></spinf-pagination>
              <spinf-pagination size="s" current-page={10} total-pages={10} show-numbers={false}></spinf-pagination>
            </div>
          </div>

          <h2>Variants</h2>
          <div class="pagination-variants">
            <div class="pagination-variant">
              <h3>Without Numbers</h3>
              <spinf-pagination 
                size="m" 
                current-page={this.paginationPage} 
                total-pages={10} 
                show-numbers={false}
                onPageChange={this.handlePaginationChange}
              ></spinf-pagination>
            </div>
            
            <div class="pagination-variant">
              <h3>With Numbers</h3>
              <spinf-pagination 
                size="m" 
                current-page={this.paginationPage} 
                total-pages={10} 
                show-numbers={true}
                onPageChange={this.handlePaginationChange}
              ></spinf-pagination>
            </div>
          </div>

          <h2>Dark Theme</h2>
          <div class="pagination-section dark-theme">
            <h3>All Variants</h3>
            <div class="pagination-row">
              <spinf-pagination size="m" current-page={1} total-pages={10} show-numbers={false} dark-theme={true}></spinf-pagination>
              <spinf-pagination size="m" current-page={5} total-pages={10} show-numbers={true} dark-theme={true}></spinf-pagination>
              <spinf-pagination size="s" current-page={10} total-pages={10} show-numbers={false} dark-theme={true}></spinf-pagination>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
