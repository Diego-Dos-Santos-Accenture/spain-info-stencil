import { Component, h, Host } from '@stencil/core';
import { getAssetPath } from '../../utils/aem-config';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: false,
})
export class AppHeader {
  render() {
    return (
      <Host>
        <header class="header">
          <div class="spinf-header__main-container">
            <div class="header__content">
              <div class="header__left">
                    <div class="header__logo"> 
                      <img src={getAssetPath('TURESPANA')} alt="Spain.Info Logo" />
                    </div>
              </div>
              <div class="header__right">
                <button class="search-button" aria-label="Buscar">
                  <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </header>
      </Host>
    );
  }
}
