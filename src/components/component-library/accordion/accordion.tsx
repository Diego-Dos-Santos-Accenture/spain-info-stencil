import { Component, h, Prop, State } from '@stencil/core';
import { getIconPath } from '../../../utils/aem-config';

@Component({
  tag: 'spinf-accordion-item',
  styleUrl: 'accordion.css',
  shadow: true,
})
export class SpinfAccordionItem {
  @Prop() label: string;
  @State() open = false;
  
  private toggle = () => {
    this.open = !this.open;
    console.log('Accordion toggled, open:', this.open);
  };
  
  render() {
    return (
      <div>
        <button 
          class={`accordion__item ${this.open ? 'open' : ''}`} 
          onClick={this.toggle}
          type="button"
        >
          <span class="accordion__label">{this.label}</span>
          <img 
            class="accordion__icon" 
            src={this.open ? getIconPath('CIRCLE_MINUS') : getIconPath('CIRCLE_PLUS')} 
            alt={this.open ? 'Collapse' : 'Expand'} 
          />
        </button>
        <div 
          class="accordion__panel" 
          role="region" 
          style={{ display: this.open ? 'block' : 'none' }}
        >
          <slot />
        </div>
      </div>
    );
  }
}
