import { Component, h, State } from '@stencil/core';
import { getAssetPath } from '../../../utils/aem-config';

@Component({
  tag: 'spinf-tabs-page',
  styleUrl: 'tabs.css',
  shadow: false,
})
export class SpinfTabsPage {
  @State() demoState: 'active' | 'hover' | 'selected' = 'active';

  private cycleState = () => {
    if (this.demoState === 'active') {
      this.demoState = 'hover';
    } else if (this.demoState === 'hover') {
      this.demoState = 'selected';
    } else {
      this.demoState = 'active';
    }
  };

  private getButtonClass(): string {
    if (this.demoState === 'active') return 'tabs__btn tabs__btn--active';
    if (this.demoState === 'hover') return 'tabs__btn tabs__btn--hover';
    return 'tabs__btn tabs__btn--selected';
  }

  render() {
    return (
      <section class="tabs-page">
        <h1>Tabs</h1>
        <p>
          Los Tabs permiten organizar contenido en secciones alternables en una misma superficie.
        </p>

        <div class="tabs-info">
          <p>Las tags actúan como elementos interactivos que al pulsarlos pasan a un estado seleccionado y muestran otro contenido.</p>
          <p>En vista mobile, puede hacerse scroll si no caben en el ancho de la pantalla.</p>
        </div>

        <div class="tabs-demo-section">
          <div class="tabs-master">
            <div class="tabs__labels">
              <span class="tabs__label">Active</span>
              <span class="tabs__label">Hover</span>
              <span class="tabs__label">Selected</span>
              <span class="tabs__label">Disabled</span>
            </div>
            <div class="tabs__list" role="tablist" aria-label="Tabs master">
              <button class="tabs__btn tabs__btn--active" role="tab" aria-selected="true">Tab 1</button>
              <button class="tabs__btn tabs__btn--hover" role="tab" aria-selected="false">Tab 2</button>
              <button class="tabs__btn tabs__btn--selected" role="tab" aria-selected="false">Tab 3</button>
              <button class="tabs__btn tabs__btn--disabled" role="tab" aria-selected="false" disabled>Tab 4</button>
              <button class="tabs__btn" role="tab" aria-selected="false">Tab 5</button>
              <button class="tabs__btn" role="tab" aria-selected="false">Tab 6</button>
            </div>
          </div>

          <div class="tabs-title">Example</div>
          <div class="tabs__list" role="tablist" aria-label="Tabs demo">
            <button class={this.getButtonClass()} role="tab" onClick={this.cycleState}>
              Tab
            </button>
            <button class="tabs__btn tabs__btn--disabled" role="tab" disabled>
              Tab
            </button>
          </div>

          <div class="tabs-title">Example - Mobile</div>
          <div class="tabs__mobile-row">
            <img class="tabs__mobile-img" src={getAssetPath('MOBILE')} alt="Tabs mobile example" />
          </div>
        </div>
      </section>
    );
  }
}
