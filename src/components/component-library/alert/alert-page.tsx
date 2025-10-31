import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinf-alert-page',
  styleUrl: 'alert.css',
  shadow: false,
})
export class SpinfAlertPage {
  render() {
    return (
      <section class="alert-page">
        <h1>Alerta</h1>
        <p>
          Las alertas permiten mostrar mensajes importantes al usuario de forma clara y diferenciada 
          según el tipo de información. Pueden indicar errores, advertencias, confirmaciones de éxito 
          o información relevante que influya en la interacción.
        </p>

        <div class="alert-demo">
          <div class="alert-row">
            <div class="alert-variant-label">Brand</div>
            <spinf-alert variant="brand" alert-title="Title" description="Description" show-button="true" show-close="true"></spinf-alert>
          </div>

          <div class="alert-row">
            <div class="alert-variant-label">Normal</div>
            <spinf-alert variant="normal" alert-title="Title" description="Description" show-button="true" show-close="true"></spinf-alert>
          </div>

          <div class="alert-row">
            <div class="alert-variant-label">Info</div>
            <spinf-alert variant="info" alert-title="Title" description="Description" show-button="true" show-close="true"></spinf-alert>
          </div>

          <div class="alert-row">
            <div class="alert-variant-label">Warning</div>
            <spinf-alert variant="warning" alert-title="Title" description="Description" show-button="true" show-close="true"></spinf-alert>
          </div>

          <div class="alert-row">
            <div class="alert-variant-label">Error</div>
            <spinf-alert variant="error" alert-title="Title" description="Description" show-button="true" show-close="true"></spinf-alert>
          </div>

          <div class="alert-row">
            <div class="alert-variant-label">Success</div>
            <spinf-alert variant="success" alert-title="Title" description="Description" show-button="true" show-close="true"></spinf-alert>
          </div>

          <div class="alert-row example">
            <div class="alert-variant-label">Ejemplo</div>
            <spinf-alert variant="success" alert-title="Congratulations!" description="You successfully subscribed to our newsletter." show-close="true" show-button="false" show-icon="false" height="124px"></spinf-alert>
          </div>
        </div>
      </section>
    );
  }
}
