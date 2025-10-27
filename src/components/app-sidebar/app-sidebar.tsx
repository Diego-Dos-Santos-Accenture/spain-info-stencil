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
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('alert'); }} class={this.currentSubPage === 'alert' ? 'active' : ''}>Alert</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('button'); }} class={this.currentSubPage === 'button' ? 'active' : ''}>Button</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('pagination'); }} class={this.currentSubPage === 'pagination' ? 'active' : ''}>Pagination</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('segmented-buttons'); }} class={this.currentSubPage === 'segmented-buttons' ? 'active' : ''}>Segmented Buttons</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('dropdown'); }} class={this.currentSubPage === 'dropdown' ? 'active' : ''}>Dropdown</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('slider'); }} class={this.currentSubPage === 'slider' ? 'active' : ''}>Slider</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('table'); }} class={this.currentSubPage === 'table' ? 'active' : ''}>Table</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); this.handleSubNavigation('tabs'); }} class={this.currentSubPage === 'tabs' ? 'active' : ''}>Tabs</a></li>
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
          </nav>
        </aside>
      </Host>
    );
  }
}
