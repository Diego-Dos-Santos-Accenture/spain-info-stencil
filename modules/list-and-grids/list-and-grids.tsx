/** @jsx h */
import { Component, h, Prop } from '@stencil/core';
import type { RowData } from './utils/card-types';
import { renderIntroWithCards } from './rows/intro-with-cards';
import { renderPhotoList } from './rows/photo-list';
import { renderJourneyCards } from './rows/journey-cards';
import { renderMasonryGrid } from './rows/masonry-grid';

@Component({ tag: 'list-and-grids', styleUrl: 'list-and-grids.css', shadow: true })
export class ListAndGrids {
  @Prop() sectionTitle?: string;
  @Prop() tabs: RowData[] = [];

  private renderRow(tab: RowData) {
    switch (tab.rowType) {
      case 'intro-with-cards':
        return renderIntroWithCards(tab);
      case 'photo-list':
        return renderPhotoList(tab);
      case 'journey-cards':
        return renderJourneyCards(tab);
      case 'masonry-grid':
        return renderMasonryGrid(tab);
      default:
        return null;
    }
  }

  render() {
    const scrollableRows = this.tabs.filter(tab => tab.rowType !== 'masonry-grid');
    const masonryRow = this.tabs.find(tab => tab.rowType === 'masonry-grid');

    return (
      <>
        <section class="list-and-grids-module">
          {this.sectionTitle && <h2 class="module-title">{this.sectionTitle}</h2>}
          {scrollableRows.map(tab => this.renderRow(tab))}
        </section>
        {masonryRow && (
          <section class="masonry-section">
            <h2 class="masonry-title">Listado cards grid/masonry - Desktop</h2>
            {this.renderRow(masonryRow)}
          </section>
        )}
      </>
    );
  }
}


