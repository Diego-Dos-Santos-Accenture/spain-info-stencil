import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinf-accordion',
  styleUrl: 'accordion.css',
  shadow: true,
})
export class SpinfAccordion {
  render() {
    return (
      <div class="accordion">
        <slot />
      </div>
    );
  }
}
