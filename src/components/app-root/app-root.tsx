import { Component, State, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  @State() currentPage: string = 'componentes';
  @State() currentSubPage: string = '';

  handleNavigation = (event: CustomEvent<string>) => {
    this.currentPage = event.detail;
    this.currentSubPage = '';
  };

  handleSubNavigation = (event: CustomEvent<string>) => {
    this.currentSubPage = event.detail;
  };

  render() {
    return (
      <Host>
        <div class="layout">
          <app-header></app-header>
          <app-navbar current-page={this.currentPage} onNavigation={this.handleNavigation}></app-navbar>

          <div class="main-area">
            <app-sidebar current-page={this.currentPage} current-sub-page={this.currentSubPage} onSubNavigation={this.handleSubNavigation}></app-sidebar>
            <main class="content">
              {this.currentPage === 'componentes' && <app-components onSubNavigation={this.handleSubNavigation} currentSubPage={this.currentSubPage}></app-components>}
              {this.currentPage === 'fundamentos' && <div>Página de Fundamentos</div>}
              {this.currentPage === 'inicio' && <div>Página de Inicio</div>}
              {this.currentPage === 'modulos' && <div>Página de Módulos</div>}
              {this.currentPage === 'templates' && <div>Página de Templates</div>}
            </main>
          </div>
          <app-footer></app-footer>
        </div>
      </Host>
    );
  }
}