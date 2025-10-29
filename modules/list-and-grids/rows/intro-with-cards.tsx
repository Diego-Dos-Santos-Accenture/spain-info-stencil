/** @jsx h */
import { h } from '@stencil/core';
import { enableDragScroll } from '../utils/drag-scroll';
import type { RowData } from '../utils/card-types';

export const renderIntroWithCards = (tab: RowData) => (
  <div class="row row--intro-with-cards" ref={el => enableDragScroll(el)}>
    {tab.items.map(item => (
      <div
        class={{
          card: true,
          'card--intro': item.type === 'intro',
          'card--image': item.type === 'image',
        }}
      >
        {item.type === 'intro' ? (
          <div class="intro-card">
            <h2>{item.title}</h2>
            {item.description && <p>{item.description}</p>}
            {item.actionText && <button class="btn">{item.actionText} →</button>}
          </div>
        ) : (
          <div class="card-image">
            {item.image && <img src={item.image} alt={item.title} />}
            <img src="/assets/icons/heart.svg" alt="Favorito" class="heart-icon" />
            <div class="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);


