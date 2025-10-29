import { Component, h, Host, Event, EventEmitter, Prop } from '@stencil/core';
import { getAssetPath } from '../../utils/aem-config';

@Component({
  tag: 'app-modules',
  styleUrl: 'app-modules.css',
  shadow: false,
})
export class AppModulesPage {
  @Prop() currentSubPage: string = '';
  @Event() subNavigation: EventEmitter<string>;

  handleCardClick = (moduleId: string) => {
    this.subNavigation.emit(moduleId);
  };

  render() {
    if (this.currentSubPage === 'list-and-grids') {
      return (
        <Host>
          <spinf-list-and-grids></spinf-list-and-grids>
        </Host>
      );
    }

    return (
      <Host>
        <section class="components-page">
          <h1>Módulos</h1>
          <p>Los módulos son combinaciones de componentes que resuelven necesidades reales y específicas de comunicación y navegación.</p>

          <div class="cards-grid">
            {[
              { name: 'List and Grids', id: 'list-and-grids' },
            ].map((module) => (
              <div part="spinf-card" class="spinf-card" onClick={() => this.handleCardClick(module.id)}>
                <div class="spinf-card__content">
                  <span class="spinf-card__title">{module.name}</span>
                  <a href="#" class="spinf-link--flex" onClick={(e) => { e.preventDefault(); this.handleCardClick(module.id); }}>
                    <span class="spinf-link__text">Explorar</span>
                    <img src={getAssetPath('EXPLORAR_ARROW')} alt="Arrow" class="arrow-image" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Host>
    );
  }
}
