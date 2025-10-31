import { Component, h, State } from '@stencil/core';
import { getAssetPath } from '../../../utils/aem-config';

@Component({
  tag: 'spinf-slider-page',
  styleUrl: 'slider.css',
  shadow: false,
})
export class SpinfSliderPage {
  @State() sliderStep: 1 | 2 | 3 = 1;

  handleSliderChange = (event: CustomEvent<number>) => {
    this.sliderStep = event.detail as 1 | 2 | 3;
  };

  render() {
    return (
      <section class="slider-page">
        <h1>Control deslizante</h1>
        <p>
          El control deslizante es un componente interactivo que permite a los usuarios explorar y navegar por un conjunto de elementos de manera secuencial y dinámica dentro de un espacio reducido.
        </p>

        <div class="slider-info">
            <p>Este componente está diseñado para mostrar contenido en formato horizontal, facilitando el recorrido de elementos como imágenes, tarjetas o testimonios.</p>
            <p>Su uso está asociado al componente "Carousel"</p>
        </div>

        <div class="slider-demo">
          <div class="slider-master">
            
            <div class="slider-examples">
              <img src={getAssetPath('SLIDER')} alt="Slider Master" />
              
              <h4>Example</h4>
              <div class="slider-progress-demo">
                <spinf-slider step={this.sliderStep}></spinf-slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
