import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'spinf-button',
  styleUrl: 'button.css',
  shadow: false,
})
export class SpinfButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'link' = 'primary';
  @Prop() size: 'l' | 'm' | 'xs' = 'm';
  @Prop() disabled: boolean = false;
  @Prop() icon: string = '';
  @Prop() darkTheme: boolean = false;
  
  @Event() buttonClick: EventEmitter<void>;
  
  private handleClick = () => {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  };
  
  render() {
    const buttonClass = `btn btn-${this.variant} btn-${this.size} ${this.darkTheme ? 'dark-theme' : ''}`;
    
    return (
      <button 
        class={buttonClass} 
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        <slot />
        {this.icon && <img class="btn-icon" src={this.icon} alt="icon" />}
      </button>
    );
  }
}
