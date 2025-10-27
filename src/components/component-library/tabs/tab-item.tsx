import { Component, h, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'spinf-tab-item',
  shadow: false,
})
export class SpinfTabItem {
  @Prop() index: number = 0;
  @Prop() disabled: boolean = false;
  @State() isActive: boolean = false;
  @State() state: 'active' | 'hover' | 'selected' | 'disabled' = 'active';

  @Listen('click')
  onTabClick() {
    if (!this.disabled) {
      const event = new CustomEvent('tabClick', {
        detail: this.index,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(event);
    }
  }

  componentWillLoad() {
    this.updateState();
  }

  componentDidUpdate() {
    this.updateState();
  }

  private updateState() {
    if (this.disabled) {
      this.state = 'disabled';
    }
  }

  private getButtonClass(): string {
    let base = 'tabs__btn';
    if (this.state === 'active') base += ' tabs__btn--active';
    else if (this.state === 'hover') base += ' tabs__btn--hover';
    else if (this.state === 'selected') base += ' tabs__btn--selected';
    else if (this.state === 'disabled') base += ' tabs__btn--disabled';
    
    if (this.isActive) base += ' tabs__btn--selected';
    
    return base;
  }

  render() {
    return (
      <button
        class={this.getButtonClass()}
        role="tab"
        aria-selected={this.isActive ? 'true' : 'false'}
        disabled={this.disabled}
        data-tab={this.index}
      >
        <slot></slot>
      </button>
    );
  }
}
