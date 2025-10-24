import { Component, h, Host, Event, EventEmitter, Prop } from '@stencil/core';
import { getAssetPath } from '../../utils/aem-config';

@Component({
  tag: 'app-components',
  styleUrl: 'app-components.css',
  shadow: false,
})
export class AppComponents {
  @Prop() currentSubPage: string = '';
  @Event() subNavigation: EventEmitter<string>;

  handleCardClick = (componentId: string) => {
    this.subNavigation.emit(componentId);
  };


  render() {
    if (this.currentSubPage === 'acordeon') {
      return (
        <Host>
          <spinf-accordion-page></spinf-accordion-page>
        </Host>
      );
    }

    if (this.currentSubPage === 'alert') {
      return (
        <Host>
          <spinf-alert-page></spinf-alert-page>
        </Host>
      );
    }

    if (this.currentSubPage === 'button') {
      return (
        <Host>
          <spinf-button-page></spinf-button-page>
        </Host>
      );
    }

    if (this.currentSubPage === 'pagination') {
      return (
        <Host>
          <spinf-pagination-page></spinf-pagination-page>
        </Host>
      );
    }

    if (this.currentSubPage === 'segmented-buttons') {
      return (
        <Host>
          <spinf-segmented-buttons-page></spinf-segmented-buttons-page>
        </Host>
      );
    }

    return (
      <Host>
        <section class="components-page">
          <h1>Introducción a componentes</h1>
          <p>
            Los fundamentos de un sistema de diseño son las reglas básicas que guían la construcción de una interfaz, 
            y que garantizan el seguimiento de una misma línea de diseño en toda la experiencia, 
            desde aspectos visuales (como el uso de la tipografía y el color) hasta otros aspectos clave 
            como la accesibilidad y el tono en los textos.
          </p>

          <div class="cards-grid">
            {[
              { name: 'Acordeón', image: getAssetPath('MASTER_ICON'), id: 'acordeon' },
              { name: 'Alert', image: getAssetPath('MASTER_ICON'), id: 'alert' },
              { name: 'Button', image: getAssetPath('MASTER_ICON'), id: 'button' },
              { name: 'Pagination', image: getAssetPath('PAGINATION'), id: 'pagination' },
              { name: 'Segmented Buttons', image: getAssetPath('MASTER_ICON'), id: 'segmented-buttons' },
            ].map((component) => (
              <div part="spinf-card" class="spinf-card" onClick={() => this.handleCardClick(component.id)}>
                <div class="spinf-card__content">
                  <span class="spinf-card__title">{component.name}</span>
                  <a href="#" class="spinf-link--flex" onClick={(e) => { e.preventDefault(); this.handleCardClick(component.id); }}>
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