import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinf-table-page',
  styleUrl: 'table.css',
  shadow: false,
})
export class SpinfTablePage {
  private masterHeaders = ['Category title', 'Category title', 'Category title', 'Category title', 'Category title'];
  private masterRows = Array.from({ length: 5 }).map(() => ['Body text', 'Body text', 'Body text', 'Body text', 'Body text']);

  private exampleHeaders = ['Indicador', 'Valor actual', 'Comparativa con 2024', 'Comparativa con 2019 (pre-pandemia)', 'Notas clave'];
  private exampleRows = [
    ['Turistas internacionales recibidos', '>85,6 millones', '+14,3 %', '+1,9 %', 'Primer año que supera los registros previos a la pandemia'],
    ['Gasto turístico', '>108.692 millones de euros', '+23,9 %', '+18,2 %', 'Fuerte recuperación cualitativa, sobre todo en calidad del turismo (gasto medio)'],
    ['Mercado emisor Estados Unidos', '3,8 millones de turistas', '+39,7 %', '+16,9 %', 'EE.UU. como mercado destacado por crecimiento en gasto y pernoctaciones'],
    ['Llegadas hasta noviembre 2024 / récord acumulado parcial', '>83,6 millones de turistas internacionales hasta noviembre 2024', '+10,7 %', '+13,7 %', '']
  ];

  render() {
    return (
      <section class="table-page">
        <h1>Tablas</h1>
        <p>
          Las tablas organizan y presentan datos en filas y columnas, facilitando su lectura, comparación y análisis.
        </p>

        <div class="table-info">
          <p>Es especialmente útil para mostrar grandes volúmenes de información estructurada de manera clara y accesible. Se recomienda su uso cuando la información se debe presentar de forma comparativa entre listas, categorías o grupos.</p>
          <p>Debe estar compuesta de un número claro de columnas y un número de líneas.</p>
        </div>

        <div class="table-demo">
          <div class="table-card">
            <spinf-table 
              headers={JSON.stringify(this.masterHeaders)}
              rows={JSON.stringify(this.masterRows)}
              variant="master"
            ></spinf-table>
          </div>

          <div class="table-title">Example</div>
          <div class="table-card">
            <spinf-table 
              headers={JSON.stringify(this.exampleHeaders)}
              rows={JSON.stringify(this.exampleRows)}
              variant="example"
            ></spinf-table>
          </div>
        </div>
      </section>
    );
  }
}
