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

    if (this.currentSubPage === 'dropdown') {
      return (
        <Host>
          <spinf-dropdown-page></spinf-dropdown-page>
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

    if (this.currentSubPage === 'slider') {
      return (
        <Host>
          <spinf-slider-page></spinf-slider-page>
        </Host>
      );
    }

    if (this.currentSubPage === 'table') {
      return (
        <Host>
          <spinf-table-page></spinf-table-page>
        </Host>
      );
    }

    if (this.currentSubPage === 'tabs') {
      return (
        <Host>
          <spinf-tabs-page></spinf-tabs-page>
        </Host>
      );
    }

    if (this.currentSubPage === 'text-field') {
      return (
        <Host>
          <spinf-text-field-page></spinf-text-field-page>
        </Host>
      );
    }

    return (
      <Host>
        <section class="components-page">
          <h1>Introducción a componentes</h1>
          <div class="components-page__description">
            <p>
              Los fundamentos de un sistema de diseño son las reglas básicas que guían la construcción de una interfaz, 
              y que garantizan el seguimiento de una misma línea de diseño en toda la experiencia, 
              desde aspectos visuales (como el uso de la tipografía y el color) hasta otros aspectos clave 
              como la accesibilidad y el tono en los textos.
            </p>
          </div>

          <div class="cards-grid">
            {[
              { name: 'Acordeón', image: getAssetPath('MASTER_ICON'), id: 'acordeon' },
              { name: 'Alerta', image: getAssetPath('MASTER_ICON'), id: 'alert' },
              { name: 'Botones', image: getAssetPath('MASTER_ICON'), id: 'button' },
              { name: 'Desplegable', image: getAssetPath('MASTER_ICON'), id: 'dropdown' },
              { name: 'Paginación', image: getAssetPath('PAGINATION'), id: 'pagination' },
              { name: 'Botón segmentado', image: getAssetPath('MASTER_ICON'), id: 'segmented-buttons' },
              { name: 'Control deslizante', image: getAssetPath('SLIDER'), id: 'slider' },
              { name: 'Tablas', image: getAssetPath('MASTER_ICON'), id: 'table' },
              { name: 'Pestañas', image: getAssetPath('MOBILE'), id: 'tabs' },
              { name: 'Campo de texto', image: getAssetPath('MASTER_ICON'), id: 'text-field' },
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