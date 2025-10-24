import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { getAssetPath } from '../../../utils/aem-config';

@Component({
  tag: 'spinf-alert',
  styleUrl: 'alert.css',
  shadow: true,
})
export class SpinfAlert {
  @Prop() variant: 'brand' | 'normal' | 'info' | 'warning' | 'error' | 'success' = 'normal';
  @Prop() alertTitle: string = '';
  @Prop() description: string = '';
  @Prop() showClose: boolean = false;
  @Prop() showButton: boolean = false;
  @Prop() buttonText: string = 'Button';
  @Prop() leadingIcon: string = '';
  @Prop() showIcon: boolean = true;
  @Prop() height: string = '';
  
  @Event() close: EventEmitter<void>;
  @Event() buttonClick: EventEmitter<void>;
  
  private handleClose = () => {
    this.close.emit();
  };
  
  private handleButtonClick = () => {
    this.buttonClick.emit();
  };
  
  render() {
    const alertClass = `alert-card alert-${this.variant}`;
    const defaultIcon = getAssetPath('MASTER_ICON');
    const style = this.height ? { height: this.height } : undefined;
    
    return (
      <div class={alertClass} style={style}>
        {this.showIcon && (
          this.leadingIcon
            ? <span class="alert-icon-text">{this.leadingIcon}</span>
            : <img src={defaultIcon} alt="Icon" class="alert-icon-img" />
        )}
        
        <div class="alert-body">
          {this.alertTitle && <div class="alert-title">{this.alertTitle}</div>}
          {this.description && <div class="alert-desc">{this.description}</div>}
        </div>
        
        <div class="alert-actions">
          {this.showClose && (
            <button class="alert-close" onClick={this.handleClose}>×</button>
          )}
          {this.showButton && (
            <button class="alert-btn" onClick={this.handleButtonClick}>
              {this.buttonText}
            </button>
          )}
        </div>
      </div>
    );
  }
}
