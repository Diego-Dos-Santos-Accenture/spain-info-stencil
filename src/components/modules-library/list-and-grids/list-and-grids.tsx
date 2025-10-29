import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinf-list-and-grids',
  styleUrl: 'list-and-grids.css',
  shadow: false,
})
export class SpinfListAndGrids {
  render() {
    return (
      <section class="modules-page">
        <h1>List and Grids</h1>
        <p>
          Los listados de card son un patrón de presentación de contenido que permite organizar y explorar múltiples elementos de forma clara y estructurada.
        </p>

        <div class="modules-content">

          <p class="info-text">
            El objetivo de las listas y grids de cards es facilitar la navegación, comparación y descubrimiento de destinos, experiencias o recursos dentro de spain.info.
            <br />
            En desktop, se emplean principalmente listados horizontales o en formato grid alterno (Masonry).
            <br />
            En mobile se mostrarán siempre en vertical.
          </p>

          <div class="module-section">
            <div class="module-placeholder">
              <list-and-grids
                section-title="Listados y grids"
                tabs={[
                  {
                    rowType: 'intro-with-cards',
                    items: [
                      {
                        id: 'i0',
                        type: 'intro',
                        title: 'Principado de Asturias',
                        description: 'Atractivo sabor marinero, patrimonio monumental y un urbanismo moderno al borde de la playa.',
                        actionText: 'Adéntrate en la naturaleza'
                      },
                      {
                        id: 'i1',
                        type: 'image',
                        title: 'Gijón',
                        image: '/assets/images/module/list-and-grid/gijon.png'
                      },
                      {
                        id: 'i2',
                        type: 'image',
                        title: 'Lastres',
                        image: '/assets/images/module/list-and-grid/lastres.png'
                      },
                      {
                        id: 'i3',
                        type: 'image',
                        title: 'Oviedo',
                        image: '/assets/images/module/list-and-grid/oviedo.png'
                      }, 
                      {
                        id: 'i4',
                        type: 'image',
                        title: 'Llanes',
                        image: '/assets/images/module/list-and-grid/cangas-de-onis.png'
                      }
                    ]
                  },
                  {
                    rowType: 'photo-list',
                    items: [
                      {
                        id: 'p1',
                        type: 'image',
                        title: 'San Lorenzo a pie de mar',
                        image: '/assets/images/module/list-and-grid/san-lorenzo.png'
                      },
                      {
                        id: 'p2',
                        type: 'image',
                        title: 'Cimavilla histórica',
                        image: '/assets/images/module/list-and-grid/cimavilla.png'
                      },
                      {
                        id: 'p3',
                        type: 'image',
                        title: 'Jardín Botánico Atlántico',
                        image: '/assets/images/module/list-and-grid/jardin-botanico-atlantico.png'
                      },
                      {
                        id: 'p4',
                        type: 'image',
                        title: 'La Laboral, arte y cultura',
                        image: '/assets/images/module/list-and-grid/laboral.png'
                      }
                    ]
                  },
                  {
                    rowType: 'journey-cards',
                    items: [
                      {
                        id: 'j1',
                        type: 'journey',
                        title: 'Journey through the Alhambra and Sierra Nevada',
                        subtitle: 'Seville - Granada',
                        details: {
                          location: 'South',
                          duration: '3 days',
                          distance: '158 km'
                        },
                        image: '/assets/images/module/list-and-grid/sevilla.png'
                      },
                      {
                        id: 'j2',
                        type: 'journey',
                        title: 'Scenic journey through the majestic Pyrenees mountains',
                        image: '/assets/images/module/list-and-grid/pirineos.png'
                      },
                      {
                        id: 'j3',
                        type: 'journey',
                        title: 'Picturesque drive along the Andalusian coast',
                        image: '/assets/images/module/list-and-grid/andalucía.png'
                      },
                      {
                        id: 'j4',
                        type: 'journey',
                        title: 'Picturesque drive along the Andalusian coast',
                        image: '/assets/images/module/list-and-grid/asturias.png'
                      }
                    ]
                  },
                  {
                    rowType: 'masonry-grid',
                    items: [
                      {
                        id: 'm1',
                        type: 'image',
                        title: 'Descubre aventuras sostenibles en los bosques del norte de España',
                        image: '/assets/images/module/list-and-grid/norte.png'
                      },
                      {
                        id: 'm2',
                        type: 'image',
                        title: 'Vibra al ritmo del mar: propuestas sostenibles de turismo azul',
                        image: '/assets/images/module/list-and-grid/esp-azul.png'
                      },
                      {
                        id: 'm3',
                        type: 'image',
                        title: 'Conduce a través de los pueblos costeros de Asturias',
                        image: '/assets/images/module/list-and-grid/asturias.png'
                      },
                      {
                        id: 'm4',
                        type: 'image',
                        title: 'La Rioja, tierra de vinos y paisajes',
                        image: '/assets/images/module/list-and-grid/rioja.png'
                      },
                      {
                        id: 'm5',
                        type: 'image',
                        title: 'Ecoturismo',
                        image: '/assets/images/module/list-and-grid/ecoturismo.png'
                      },
                      {
                        id: 'm6',
                        type: 'image',
                        title: 'Descubre la España subterránea',
                        image: '/assets/images/module/list-and-grid/esp-sub.png'
                      }
                    ]
                  }
                ]}
              ></list-and-grids>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
