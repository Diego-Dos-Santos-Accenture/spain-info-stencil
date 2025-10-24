import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';
import { getAssetPath } from '../../../utils/aem-config';

@Component({
  tag: 'spinf-segmented-buttons',
  styleUrl: 'segmented-buttons.css',
  shadow: true,
})
export class SpinfSegmentedButtons {
  @Prop() options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  @Prop() selectedIndex: number = 0;
  
  @State() internalSelectedIndex: number = 0;
  
  @Event() optionChange: EventEmitter<{ index: number; value: string }>;
  
  componentWillLoad() {
    this.internalSelectedIndex = this.selectedIndex;
  }
  
  @Watch('selectedIndex')
  selectedIndexChanged(newValue: number) {
    this.internalSelectedIndex = newValue;
  }
  
  private handleOptionClick = (index: number) => {
    this.internalSelectedIndex = index;
    this.optionChange.emit({
      index: index,
      value: this.options[index]
    });
  };
  
  render() {
    return (
      <div class="segmented-buttons">
        {this.options.map((option, index) => (
          <button
            key={index}
            class={{
              'sb-option': true,
              'sb-active': this.internalSelectedIndex === index
            }}
            onClick={() => this.handleOptionClick(index)}
          >
            <span class="sb-text">{option}</span>
            <img 
              src={getAssetPath('MASTER_ICON')} 
              alt="Icon" 
              class="sb-icon" 
            />
          </button>
        ))}
      </div>
    );
  }
}
