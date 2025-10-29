/** @jsx h */
import { h } from '@stencil/core';
import { enableDragScroll } from '../utils/drag-scroll';
import type { RowData } from '../utils/card-types';

export const renderPhotoList = (tab: RowData) => (
  <div class="row row--photo-list" ref={el => enableDragScroll(el)}>
    {tab.items.map(item => (
      <div class="card card--photo">
        {item.image && <img width="341" height="255" src={item.image} alt={item.title} />}
        <h4>{item.title}</h4>
      </div>
    ))}
  </div>
);


