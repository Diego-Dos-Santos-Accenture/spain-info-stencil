import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'spinf-button-page',
  styleUrl: 'button.css',
  shadow: false,
})
export class SpinfButtonPage {
  @State() buttonClickCount: number = 0;

  handleButtonClick = () => {
    this.buttonClickCount++;
  };

  render() {
    return (
      <section class="button-page">
        <h1>Botón</h1>
        <p>
          Los botones son elementos interactivos que permiten a los usuarios realizar acciones. 
          Proporcionan una forma clara y accesible de ejecutar comandos, navegar o confirmar decisiones.
        </p>

        <div class="button-demo">
          <h2>Primary</h2>
          <div class="button-section">
            <h3>Sizes</h3>
            <div class="button-row">
              <spinf-button variant="primary" size="l" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="primary" size="m" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="primary" size="xs" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
            </div>
            
            <h3>States</h3>
            <div class="button-row">
              <spinf-button variant="primary" size="l" onButtonClick={this.handleButtonClick}>Active</spinf-button>
              <spinf-button variant="primary" size="l" disabled>Disabled</spinf-button>
            </div>
          </div>

          <h2>Secondary</h2>
          <div class="button-section">
            <h3>Sizes</h3>
            <div class="button-row">
              <spinf-button variant="secondary" size="l" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="secondary" size="m" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="secondary" size="xs" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
            </div>
            
            <h3>States</h3>
            <div class="button-row">
              <spinf-button variant="secondary" size="l" onButtonClick={this.handleButtonClick}>Active</spinf-button>
              <spinf-button variant="secondary" size="l" disabled>Disabled</spinf-button>
            </div>
          </div>

          <h2>Tertiary</h2>
          <div class="button-section">
            <h3>Sizes</h3>
            <div class="button-row">
              <spinf-button variant="tertiary" size="l" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="tertiary" size="m" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="tertiary" size="xs" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
            </div>
            
            <h3>States</h3>
            <div class="button-row">
              <spinf-button variant="tertiary" size="l" onButtonClick={this.handleButtonClick}>Active</spinf-button>
              <spinf-button variant="tertiary" size="l" disabled>Disabled</spinf-button>
            </div>
          </div>

          <h2>Button Link</h2>
          <div class="button-section">
            <h3>Sizes</h3>
            <div class="button-row">
              <spinf-button variant="link" size="l" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="link" size="m" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="link" size="xs" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
            </div>
            
            <h3>States</h3>
            <div class="button-row">
              <spinf-button variant="link" size="l" onButtonClick={this.handleButtonClick}>Active</spinf-button>
              <spinf-button variant="link" size="l" disabled>Disabled</spinf-button>
            </div>
          </div>

          <h2>Dark Theme</h2>
          <div class="button-section dark-theme">
            <h3>All Button Variants - Dark Theme</h3>
            <div class="button-row">
              <spinf-button variant="primary" size="l" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="primary" size="m" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="primary" size="xs" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
            </div>
            
            <h3>Secondary</h3>
            <div class="button-row">
              <spinf-button variant="secondary" size="l" icon="/assets/images/master-icon.png" dark-theme onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="secondary" size="m" icon="/assets/images/master-icon.png" dark-theme onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="secondary" size="xs" icon="/assets/images/master-icon.png" dark-theme onButtonClick={this.handleButtonClick}>Button</spinf-button>
            </div>
            
            <h3>Tertiary</h3>
            <div class="button-row">
              <spinf-button variant="tertiary" size="l" icon="/assets/images/master-icon.png" dark-theme onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="tertiary" size="m" icon="/assets/images/master-icon.png" dark-theme onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="tertiary" size="xs" icon="/assets/images/master-icon.png" dark-theme onButtonClick={this.handleButtonClick}>Button</spinf-button>
            </div>
            
            <h3>Button Link</h3>
            <div class="button-row">
              <spinf-button variant="link" size="l" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="link" size="m" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
              <spinf-button variant="link" size="xs" icon="/assets/images/master-icon.png" onButtonClick={this.handleButtonClick}>Button</spinf-button>
            </div>
          </div>

          {this.buttonClickCount > 0 && (
            <div class="button-feedback">
              <p>Button clicked {this.buttonClickCount} times!</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}
