import { Component, h, Prop, State, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'spinf-tabs',
  styleUrl: 'tabs.css',
  shadow: true,
})
export class SpinfTabs {
  @Prop() activeTab: number = 0;
  @State() currentTab: number = 0;
  @Event() tabChange: EventEmitter<number>;

  componentWillLoad() {
    this.currentTab = this.activeTab;
  }

  @Listen('click')
  onHostClick(ev: Event) {
    const target = (ev.composedPath()[0] as HTMLElement);
    if (target && target.getAttribute && target.getAttribute('data-tab') !== null) {
      const tabIndex = parseInt(target.getAttribute('data-tab') || '0');
      this.setActiveTab(tabIndex);
    }
  }

  private setActiveTab(index: number) {
    this.currentTab = index;
    this.tabChange.emit(index);
  }

  render() {
    return (
      <div class="tabs__list" role="tablist" aria-label="Tabs">
        <slot></slot>
      </div>
    );
  }
}
