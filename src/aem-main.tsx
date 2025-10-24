import { Component, h, Host } from '@stencil/core';

// Variable global para las rutas de imágenes en AEM
declare global {
  interface Window {
    AEM_ASSETS_PATH: string;
  }
}

@Component({
  tag: 'aem-main',
  shadow: false,
})
export class AemMain {
  componentWillLoad() {
    // Configurar la ruta base de assets para AEM
    if (!window.AEM_ASSETS_PATH) {
      window.AEM_ASSETS_PATH = '/content/dam/spain-info';
    }

    // Inyectar fuentes y librerías usadas en index.html
    const ensureLink = (id: string, href: string, rel: string = 'stylesheet') => {
      if (!document.getElementById(id)) {
        const link = document.createElement('link');
        link.id = id;
        link.rel = rel;
        link.href = href;
        link.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(link);
      }
    };

    ensureLink(
      'fa-6-4-0',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    );
    ensureLink(
      'google-fonts-nunito-merriweather',
      'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Nunito+Sans:wght@400;600;700&display=swap'
    );
    ensureLink(
      'google-fonts-inter',
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    );
    ensureLink(
      'google-fonts-delight',
      'https://fonts.googleapis.com/css2?family=Delight:wght@400;500;600;700&display=swap'
    );
  }

  render() {
    return (
      <Host>
        <app-root></app-root>
      </Host>
    );
  }
}
