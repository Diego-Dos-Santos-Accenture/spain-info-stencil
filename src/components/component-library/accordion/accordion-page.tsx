import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinf-accordion-page',
  styleUrl: 'accordion.css',
  shadow: false,
})
export class SpinfAccordionPage {
  render() {
    return (
      <section class="accordion-page">
        <h1>Acordeón</h1>
        <p>
          El acordeón permite mostrar y ocultar secciones de contenido de forma vertical, 
          optimizando el espacio en pantalla y facilitando la navegación por información 
          organizada en categorías.
        </p>

        <div class="accordion-demo">
          <h2>Ejemplo de uso</h2>
          <spinf-accordion>
            <spinf-accordion-item label="¿Qué es y cómo recuperar el IVA?">
              <p>El IVA o impuesto de valor añadido es un impuesto indirecto que grava el consumo final de productos y servicios. Todos los residentes fuera de la Unión Europea pueden solicitar la devolución del importe derivado de compras ocasionales de artículos de uso personal o para regalo.</p>
              <div class="accordion__chip">Llegar en coche</div>
              <div class="accordion__chip">Llegar en avión</div>
            </spinf-accordion-item>
            
            <spinf-accordion-item label="¿Cómo funciona el sistema de transporte público?">
              <p>El sistema de transporte público en España incluye una amplia red de autobuses, metro, trenes y otros medios de transporte que conectan las principales ciudades y regiones del país.</p>
              <div class="accordion__chip">Autobús</div>
              <div class="accordion__chip">Metro</div>
              <div class="accordion__chip">Tren</div>
            </spinf-accordion-item>
            
            <spinf-accordion-item label="¿Cuáles son los requisitos para viajar a España?">
              <p>Los requisitos para viajar a España dependen de tu país de origen y el tipo de viaje que planeas realizar. Aquí te explicamos los principales requisitos y documentación necesaria.</p>
              <div class="accordion__chip">Pasaporte</div>
              <div class="accordion__chip">Visa</div>
              <div class="accordion__chip">Seguro de viaje</div>
            </spinf-accordion-item>
          </spinf-accordion>
        </div>

        <div class="accordion-specs">
          <h2>Especificaciones</h2>
          <div class="spec-grid">
            <div class="spec-item">
              <h3>Comportamiento</h3>
              <ul>
                <li>Click para expandir/contraer</li>
                <li>Animación suave de transición</li>
                <li>Estado visual claro</li>
              </ul>
            </div>
            
            <div class="spec-item">
              <h3>Estados</h3>
              <ul>
                <li>Cerrado (default)</li>
                <li>Hover</li>
                <li>Abierto</li>
              </ul>
            </div>
            
            <div class="spec-item">
              <h3>Accesibilidad</h3>
              <ul>
                <li>Soporte para navegación por teclado</li>
                <li>Roles ARIA apropiados</li>
                <li>Indicadores visuales claros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
