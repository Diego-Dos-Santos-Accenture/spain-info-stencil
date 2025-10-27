import { Component, h, Prop, State, Listen, Watch, Event, EventEmitter } from '@stencil/core';
import { getIconPath } from '../../../utils/aem-config';

@Component({
  tag: 'spinf-slider',
  styleUrl: 'slider.css',
  shadow: true,
})
export class SpinfSlider {
  @Prop({ mutable: true, reflect: true }) step: 1 | 2 | 3 = 1;
  @State() left: string = '0%';
  @Event() slideChange: EventEmitter<number>;

  componentWillLoad() {
    this.updatePosition();
  }

  @Watch('step')
  watchHandler() {
    this.updatePosition();
  }

  @Listen('click')
  onHostClick(ev: Event) {
    const target = (ev.composedPath()[0] as HTMLElement);
    if (target && target.getAttribute) {
      if (target.getAttribute('data-prev') !== null && this.step > 1) {
        this.step = (this.step - 1) as any;
        this.updatePosition();
        this.slideChange.emit(this.step);
      }
      if (target.getAttribute('data-next') !== null && this.step < 3) {
        this.step = (this.step + 1) as any;
        this.updatePosition();
        this.slideChange.emit(this.step);
      }
    }
  }

  private updatePosition() {
    if (this.step === 1) {
      this.left = '0%';
    } else if (this.step === 2) {
      this.left = '30%';
    } else {
      this.left = '60%';
    }
  }

  render() {
    const prevDisabled = this.step === 1;
    const nextDisabled = this.step === 3;
    
    return (
      <div class="prg" role="group" aria-label="Carousel progress">
        <div class="prg-line">
          <div class="prg-fill" style={{ left: this.left }} />
        </div>
        <div class="prg-actions">
          <button class="prg-btn" data-prev disabled={prevDisabled} aria-label="Anterior">
            <img src={getIconPath('ARROW_LEFT')} alt="Anterior" class="prg-icon" />
          </button>
          <button class="prg-btn" data-next disabled={nextDisabled} aria-label="Siguiente">
            <img src={getIconPath('ARROW_RIGHT')} alt="Siguiente" class="prg-icon" />
          </button>
        </div>
      </div>
    );
  }
}
