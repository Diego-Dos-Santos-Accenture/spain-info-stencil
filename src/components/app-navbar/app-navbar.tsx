import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'app-navbar',
  styleUrl: 'app-navbar.css',
  shadow: false,
})
export class AppNavbar {
  @Prop() currentPage: string = 'componentes';
  @Event() navigation: EventEmitter<string>;

  handleClick = (page: string) => {
    this.navigation.emit(page);
  };

  render() {
    return (
      <Host>
        <nav class="navbar">
          <div class="navbar-container">
            <ul>
              <li>
                <a 
                  href="#" 
                  class={{ active: this.currentPage === 'inicio' }}
                  onClick={(e) => { e.preventDefault(); this.handleClick('inicio'); }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  class={{ active: this.currentPage === 'fundamentos' }}
                  onClick={(e) => { e.preventDefault(); this.handleClick('fundamentos'); }}
                >
                  Fundamentos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  class={{ active: this.currentPage === 'componentes' }}
                  onClick={(e) => { e.preventDefault(); this.handleClick('componentes'); }}
                >
                  Componentes
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  class={{ active: this.currentPage === 'modulos' }}
                  onClick={(e) => { e.preventDefault(); this.handleClick('modulos'); }}
                >
                  Módulos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  class={{ active: this.currentPage === 'templates' }}
                  onClick={(e) => { e.preventDefault(); this.handleClick('templates'); }}
                >
                  Templates
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Host>
    );
  }
}
