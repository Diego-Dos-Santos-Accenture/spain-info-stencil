import { Component, State, h, Host, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-sidebar',
  styleUrl: 'app-sidebar.css',
  shadow: true,
})
export class AppSidebarComponent {
  @Element() el: HTMLElement;
  @Prop() currentPage: string = 'componentes';
  @Prop() currentSubPage: string = '';
  @State() showComponents: boolean = true;
  @Event() subNavigation: EventEmitter<string>;

  toggleComponents = () => {
    this.showComponents = !this.showComponents;
  };

  handleSubNavigation = (subPage: string) => {
    this.subNavigation.emit(subPage);
  };


  render() {
    return (
      <Host>
        <aside class="sidebar">
          <nav>
            {/* Solo mostrar menú cuando la página correspondiente esté activa */}
            {this.currentPage === 'componentes' && (
              <>
                <button
                  class={{
                    menu__section: true,
                    expanded: this.showComponents,
                  }}
                  onClick={this.toggleComponents}
                >
                  <span class="menu__title">Componentes</span>
                  <span class="icon-wrapper">
                    <img 
                      src={this.showComponents ? "/assets/icons/circle-minus.svg" : "/assets/icons/circle-plus.svg"} 
                      alt={this.showComponents ? "Collapse" : "Expand"}
                      class="icon-svg"
                    />
                  </span>
                </button>

                            {this.showComponents && (
                              <ul class="submenu">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('acordeon'); }} class={this.currentSubPage === 'acordeon' ? 'active' : ''}>Acordeón</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('alert'); }} class={this.currentSubPage === 'alert' ? 'active' : ''}>Alerta</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('button'); }} class={this.currentSubPage === 'button' ? 'active' : ''}>Botones</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('pagination'); }} class={this.currentSubPage === 'pagination' ? 'active' : ''}>Paginación</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('segmented-buttons'); }} class={this.currentSubPage === 'segmented-buttons' ? 'active' : ''}>Botón segmentado</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('dropdown'); }} class={this.currentSubPage === 'dropdown' ? 'active' : ''}>Desplegable</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('slider'); }} class={this.currentSubPage === 'slider' ? 'active' : ''}>Control deslizante</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('table'); }} class={this.currentSubPage === 'table' ? 'active' : ''}>Tablas</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('tabs'); }} class={this.currentSubPage === 'tabs' ? 'active' : ''}>Pestañas</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('text-field'); }} class={this.currentSubPage === 'text-field' ? 'active' : ''}>Campo de texto</a></li>
                              </ul>
                            )}
              </>
            )}

            {this.currentPage === 'fundamentos' && (
              <>
                <button
                  class={{
                    menu__section: true,
                    expanded: this.showComponents,
                  }}
                  onClick={this.toggleComponents}
                >
                  <span class="menu__title">Fundamentos</span>
                  <span class="icon-wrapper">
                    <img 
                      src={this.showComponents ? "/assets/icons/circle-minus.svg" : "/assets/icons/circle-plus.svg"} 
                      alt={this.showComponents ? "Collapse" : "Expand"}
                      class="icon-svg"
                    />
                  </span>
                </button>

                {this.showComponents && (
                  <ul class="submenu">
                    <li><a href="#logo">Logo</a></li>
                    <li><a href="#color" class="active">Color</a></li>
                    <li><a href="#primitivos" class="active-strong">Primitivos</a></li>
                    <li><a href="#tokens">Tokens</a></li>
                    <li><a href="#iconography">Iconography</a></li>
                  </ul>
                )}
              </>
            )}

            {this.currentPage === 'modulos' && (
              <>
                <button
                  class={{
                    menu__section: true,
                    expanded: this.showComponents,
                  }}
                  onClick={this.toggleComponents}
                >
                  <span class="menu__title">Módulos</span>
                  <span class="icon-wrapper">
                    <img 
                      src={this.showComponents ? "/assets/icons/circle-minus.svg" : "/assets/icons/circle-plus.svg"} 
                      alt={this.showComponents ? "Collapse" : "Expand"}
                      class="icon-svg"
                    />
                  </span>
                </button>

                {this.showComponents && (
                  <ul class="submenu">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('list-and-grids'); }} class={this.currentSubPage === 'list-and-grids' ? 'active' : ''}>Listas y rejillas</a></li>
                  </ul>
                )}
              </>
            )}
          </nav>
        </aside>
      </Host>
    );
  }
}
