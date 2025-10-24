import { Component, Event, EventEmitter, h, Element } from '@stencil/core';

@Component({
  tag: 'spinf-dropdown-option',
  styleUrl: 'dropdown.css',
  shadow: false
})
export class DropdownOption {
  @Element() el: HTMLElement;
  @Event() optionClick: EventEmitter<string>;

  private handleClick = () => {
    const textContent = this.el?.textContent?.trim() || '';
    this.optionClick.emit(textContent);
  };

  render() {
    return (
      <div class="dd-option" onClick={this.handleClick}>
        <slot />
      </div>
    );
  }
}

