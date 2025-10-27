import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'spinf-table',
  styleUrl: 'table.css',
  shadow: false,
})
export class SpinfTable {
  @Prop() headers: string = '[]';
  @Prop() rows: string = '[]';
  @Prop() variant: string = '';
  @State() headersArray: string[] = [];
  @State() rowsArray: string[][] = [];

  componentWillLoad() {
    this.parseData();
  }

  componentWillUpdate() {
    this.parseData();
  }

  private parseData() {
    try {
      this.headersArray = JSON.parse(this.headers);
    } catch (e) {
      this.headersArray = [];
    }

    try {
      this.rowsArray = JSON.parse(this.rows);
    } catch (e) {
      this.rowsArray = [];
    }
  }

  render() {
    const variantClass = this.variant ? `tb-${this.variant}` : '';

    return (
      <table class={`tb table__table ${variantClass}`}>
        <thead>
          <tr>
            {this.headersArray.map((header, idx) => (
              <th key={`header-${idx}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.rowsArray.map((row, rowIdx) => (
            <tr key={`row-${rowIdx}`}>
              {row.map((cell, cellIdx) => (
                <td key={`cell-${rowIdx}-${cellIdx}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
