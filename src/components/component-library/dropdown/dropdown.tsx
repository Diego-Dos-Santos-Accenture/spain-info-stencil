import { Component, Prop, State, Event, EventEmitter, Listen, h, Element } from '@stencil/core';

@Component({
  tag: 'spinf-dropdown',
  styleUrl: 'dropdown.css',
  shadow: false
})
export class Dropdown {
  @Element() el: HTMLElement;

  @Prop() size: 'l' | 'm' | 's' = 'm';
  @Prop() label: string = 'Label';
  @Prop() open: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() selectedValue: string = '';

  @State() isOpen: boolean = false;

  @Event() dropdownChange: EventEmitter<string>;

  componentWillLoad() {
    this.isOpen = this.open;
  }

  private handleTriggerClick = () => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private handleOptionClick = (event: CustomEvent) => {
    this.isOpen = false;
    this.selectedValue = event.detail;
    this.dropdownChange.emit(event.detail);
  };

  @Listen('click', { target: 'document' })
  handleOutsideClick(event: Event) {
    if (!this.el.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  @Listen('optionClick')
  handleOptionClickEvent(event: CustomEvent) {
    this.handleOptionClick(event);
  }

  render() {
    const dropdownClass = `dd dd-${this.size} ${this.isOpen ? 'dd-open' : ''} ${this.disabled ? 'dd-disabled' : ''}`;
    const displayValue = this.selectedValue || this.label;
    
    return (
      <div class={dropdownClass}>
        <button 
          class="dd-trigger" 
          type="button" 
          onClick={this.handleTriggerClick}
          disabled={this.disabled}
        >
          <span class="dd-label">{displayValue}</span>
          <img 
            class="dd-caret" 
            src={`/assets/icons/${this.isOpen ? 'chevron-up.svg' : 'chevron-down.svg'}`} 
            alt={this.isOpen ? 'Close' : 'Open'} 
          />
        </button>
        {this.isOpen && (
          <div class="dd-menu">
            <slot />
          </div>
        )}
      </div>
    );
  }
}
