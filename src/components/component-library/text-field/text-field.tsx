import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'spinf-text-field',
  styleUrl: 'text-field.css',
  shadow: true,
})
export class SpinfTextField {
  /** Etiqueta del campo */
  @Prop() label: string = 'Label';
  /** Texto de ayuda o estado */
  @Prop() support: string = 'Supporting text';
  /** Valor controlado (mutable para actualizar desde dentro) */
  @Prop({ mutable: true, reflect: true }) value: string = '';
  /** Tipo de input */
  @Prop() type: 'text' | 'email' | 'password' = 'text';
  /** Tamaño visual */
  @Prop() size: 'm' | 's' = 'm';
  /** Posición de la etiqueta */
  @Prop() labelPosition: 'inside' | 'outside' = 'inside';
  /** Estado de error opcional */
  @Prop() error: string | null = null;

  @State() focused = false;

  @Event() inputChange: EventEmitter<string>;

  private inputEl?: HTMLInputElement;

  private onFocus = () => { this.focused = true; };
  private onBlur = () => { this.focused = false; };
  private onInput = (e: Event) => {
    this.value = (e.target as HTMLInputElement).value;
    this.inputChange.emit(this.value);
  };

  private onClear = (e: MouseEvent) => {
    e.preventDefault();
    this.value = '';
    this.inputChange.emit(this.value);
    if (this.inputEl) this.inputEl.focus();
  };

  render() {
    const hasValue = !!this.value;
    const isPassword = this.type === 'password';
    const showMinLength = isPassword && this.value.length > 0 && this.value.length < 8;
    const supportToShow = showMinLength ? 'Mínimo 8 caracteres' : (this.error ?? '');
    const classes = [
      'text-field',
      `text-field--${this.size}`,
      this.labelPosition === 'inside' ? 'text-field--inside' : 'text-field--outside',
      this.focused ? 'is-focused' : '',
      hasValue ? 'has-value' : '',
      (this.error || showMinLength) ? 'is-error' : '',
    ].filter(Boolean).join(' ');

    return (
      <div class={classes}>
        {this.labelPosition === 'outside' && (
          <label class="text-field__label-outside">{this.label}</label>
        )}
        <div class="text-field__control">
          {this.labelPosition === 'inside' && (
            <label class="text-field__label">{this.label}</label>
          )}
          <input
            class="text-field__input"
            type={this.type}
            value={this.value}
            placeholder={this.labelPosition === 'inside' ? '' : this.label}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onInput={this.onInput}
            ref={(el) => { this.inputEl = el as HTMLInputElement; }}
          />
          {this.value && (
            <button class="text-field__clear" type="button" aria-label="Limpiar" onMouseDown={(e) => e.preventDefault()} onClick={this.onClear}>
              <img src="/assets/icons/circle-x.svg" alt="" />
            </button>
          )}
        </div>
        <div class="text-field__support">{supportToShow}</div>
      </div>
    );
  }
}


