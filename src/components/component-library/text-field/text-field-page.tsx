import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinf-text-field-page',
  styleUrl: 'text-field.css',
  shadow: false,
})
export class SpinfTextFieldPage {
  render() {
    return (
      <section class="tf-page">
        <h1>Campo de texto</h1>
        <p>El campo de texto es un componente fundamental para la entrada de datos en formularios e interfaces.</p>

        <div class="info-text">
          <p>Se utiliza para capturar información escrita por el usuario, ya sea en campos simples (nombre, email) o entradas más complejas. Debe mantener siempre claridad, accesibilidad y consistencia visual, con etiquetas visibles y estados diferenciados.</p>
        </div>

        <div class="tf-title">Estados</div>
        <div class="tf-grid-spec" style={{ margin: '24px 0' }}>
          <img src="/assets/images/TextField-structure.png" alt="Text Field Structure Image" />
        </div>

        <div class="tf-title">Content & Supporting text</div>
        <div class="tf-card" style={{ marginBottom: '24px' }}>
          <img src="/assets/images/Content&Support.png" alt="Content & Support Image" />
        </div>

        <div class="tf-title">Examples</div>
        <div class="tf-card-examples" style={{ padding: '24px' }}>
          <div class="tf-example-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 80px' }}>
            <div>
              <spinf-text-field label="Nombre" support="Supporting text"></spinf-text-field>
            </div>
            <div>
              <spinf-text-field label="Correo" type="email" support="Supporting text"></spinf-text-field>
            </div>
            <div>
              <spinf-text-field label="Contraseña" type="password" support="Mínimo 8 caracteres"></spinf-text-field>
            </div>
            <div>
              <spinf-text-field label="Contraseña" type="password" support="Mínimo 8 caracteres"></spinf-text-field>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


