/** @jsx h */
import { h } from '@stencil/core';
import { enableDragScroll } from '../utils/drag-scroll';
import type { RowData } from '../utils/card-types';

export const renderJourneyCards = (tab: RowData) => (
  <div class="row row--journey-cards" ref={el => enableDragScroll(el)}>
    {tab.items.map((item, index) => (
      index === 0 ? (
        <div class="card card--journey">
          <div class="journey-image-wrapper">
            {item.image && <img src={item.image} alt={item.title} />}
            <img src="/assets/icons/heart.svg" alt="Favorito" class="heart-icon" />
          </div>
          <div class="content">
            <div class="journey-details">
              {item.details?.location && (
                <div class="detail-item">
                  <img src="/assets/icons/map-north.svg" alt="Location" class="detail-icon" />
                  <span>{item.details.location}</span>
                </div>
              )}
              {item.subtitle && (
                <div class="detail-item">
                  <img src="/assets/icons/flag.svg" alt="Route" class="detail-icon" />
                  <span>{item.subtitle}</span>
                </div>
              )}
              {item.details?.duration && (
                <div class="detail-item">
                  <img src="/assets/icons/sun-rise.svg" alt="Duration" class="detail-icon" />
                  <span>{item.details.duration}</span>
                </div>
              )}
              {item.details?.distance && (
                <div class="detail-item">
                  <img src="/assets/icons/route.svg" alt="Distance" class="detail-icon" />
                  <span>{item.details.distance}</span>
                </div>
              )}
            </div>
            <h3>{item.title}</h3>
            <button class="btn btn-explore">
              Explore route
              <img src="/assets/images/explorar-arrow.png" alt="Arrow" class="arrow-icon" />
            </button>
          </div>
        </div>
      ) : (
        <div class="card card--journey-small">
          {item.image && <img src={item.image} alt={item.title} />}
          <img src="/assets/icons/heart.svg" alt="Favorito" class="heart-icon" />
          <div class="overlay">
            <h3>{item.title}</h3>
          </div>
        </div>
      )
    ))}
  </div>
);


