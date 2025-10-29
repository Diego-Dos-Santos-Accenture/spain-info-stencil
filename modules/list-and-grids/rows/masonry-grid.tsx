/** @jsx h */
import { h } from '@stencil/core';
import type { RowData } from '../utils/card-types';

export const renderMasonryGrid = (tab: RowData) => (
  <div class="masonry-grid">
    {/* Columna 1: items 0 y 3 */}
    <div class="masonry-column">
      {[tab.items[0], tab.items[3]].map((item, i) => {
        const isSmall = i === 1; // segundo card de esta columna es el pequeño
        return (
          <div class="masonry-card">
            <div class="masonry-card-image">
              {item?.image && <img src={item.image} alt={item.title} />}
            </div>
            <div class={`masonry-card-description ${isSmall ? 'masonry-card-description--small' : 'masonry-card-description--large'}`}>
              <h3>{item?.title}</h3>
            </div>
          </div>
        );
      })}
    </div>

    {/* Columna 2: items 1 y 4 */}
    <div class="masonry-column">
      {[tab.items[1], tab.items[4]].map((item, i) => {
        const isSmall = i === 0; // primer card de esta columna es el pequeño
        return (
          <div class="masonry-card">
            <div class="masonry-card-image">
              {item?.image && <img src={item.image} alt={item.title} />}
            </div>
            <div class={`masonry-card-description ${isSmall ? 'masonry-card-description--small' : 'masonry-card-description--large'}`}>
              <h3>{item?.title}</h3>
            </div>
          </div>
        );
      })}
    </div>

    {/* Columna 3: items 2 y 5 */}
    <div class="masonry-column">
      {[tab.items[2], tab.items[5]].map((item, i) => {
        const isSmall = i === 1; // segundo card de esta columna es el pequeño
        return (
          <div class="masonry-card">
            <div class="masonry-card-image">
              {item?.image && <img src={item.image} alt={item.title} />}
            </div>
            <div class={`masonry-card-description ${isSmall ? 'masonry-card-description--small' : 'masonry-card-description--large'}`}>
              <h3>{item?.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);


