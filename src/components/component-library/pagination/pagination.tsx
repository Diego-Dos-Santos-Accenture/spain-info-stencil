import { Component, h, Prop, Event, EventEmitter, State, Element } from '@stencil/core';
import { getIconPath } from '../../../utils/aem-config';

@Component({
  tag: 'spinf-pagination',
  styleUrl: 'pagination.css',
  shadow: true,
})
export class SpinfPagination {
  @Element() el: HTMLElement;
  @Prop() currentPage: number = 1;
  @Prop() totalPages: number = 10;
  @Prop() showNumbers: boolean = false;
  @Prop() size: 's' | 'm' = 'm';
  @Prop() darkTheme: boolean = false;
  
  @State() internalCurrentPage: number = 1;
  
  @Event() pageChange: EventEmitter<number>;
  
  componentWillLoad() {
    this.internalCurrentPage = this.currentPage;
    this.ensureFontAwesome();
  }
  
  private ensureFontAwesome = () => {
    // Verificar si Font Awesome ya está cargado
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(link);
    }
  };
  
  componentWillUpdate() {
    this.internalCurrentPage = this.currentPage;
  }
  
  private handlePrevClick = () => {
    if (this.internalCurrentPage > 1) {
      this.internalCurrentPage--;
      this.pageChange.emit(this.internalCurrentPage);
    }
  };
  
  private handleNextClick = () => {
    if (this.internalCurrentPage < this.totalPages) {
      this.internalCurrentPage++;
      this.pageChange.emit(this.internalCurrentPage);
    }
  };
  
  render() {
    const isFirstPage = this.internalCurrentPage === 1;
    const isLastPage = this.internalCurrentPage === this.totalPages;
    
    const paginationClass = `pagination pg-${this.size} ${this.darkTheme ? 'pg-dark' : ''}`;
    const prevBtnClass = `pg-btn ${isFirstPage ? 'pg-disabled' : 'pg-active'}`;
    const nextBtnClass = `pg-btn ${isLastPage ? 'pg-disabled' : 'pg-active'}`;
    
    return (
      <div class={paginationClass}>
        <button 
          class={prevBtnClass}
          disabled={isFirstPage}
          onClick={this.handlePrevClick}
        >
          <img src={getIconPath('ARROW_LEFT')} alt="Previous" class="pg-icon" />
        </button>
        
        {this.showNumbers && (
          <div class="pg-number">
            {this.internalCurrentPage} - {this.totalPages}
          </div>
        )}
        
        <button 
          class={nextBtnClass}
          disabled={isLastPage}
          onClick={this.handleNextClick}
        >
          <img src={getIconPath('ARROW_RIGHT')} alt="Next" class="pg-icon" />
        </button>
      </div>
    );
  }
}
