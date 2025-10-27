// Configuración global para AEM
export const AEM_CONFIG = {
  // Ruta base de assets en AEM
  ASSETS_PATH: '/content/dam/spain-info',
  
  // Rutas específicas de imágenes
  IMAGES: {
    TURESPANA: '/content/dam/spain-info/images/turespana.png',
    PAGINATION: '/content/dam/spain-info/images/Pagination_v1.png',
    SLIDER: '/content/dam/spain-info/images/Slider.png',
    MASTER_ICON: '/content/dam/spain-info/images/master-icon.png',
    EXPLORAR_ARROW: '/content/dam/spain-info/images/explorar-arrow.png',
    GOB_LOGO: '/content/dam/spain-info/images/gob-logo.png',
    SPAIN_LOGO: '/content/dam/spain-info/images/Logo-españa.png'
  },
  
  ICONS: {
    CIRCLE_PLUS: '/content/dam/spain-info/icons/circle-plus.svg',
    CIRCLE_MINUS: '/content/dam/spain-info/icons/circle-minus.svg',
    ARROW_LEFT: '/content/dam/spain-info/icons/arrow-left.svg',
    ARROW_RIGHT: '/content/dam/spain-info/icons/arrow-right.svg'
  },
  
  // Configuración de componentes
  COMPONENTS: {
    ACCORDION: {
      DEFAULT_OPEN: false,
      ANIMATION_DURATION: 200
    }
  }
};

// Función helper para obtener rutas de assets
export const getAssetPath = (assetName: keyof typeof AEM_CONFIG.IMAGES): string => {
  // En desarrollo, usar rutas locales
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    const localPaths: Record<string, string> = {
      TURESPANA: '/assets/images/turespana.png',
      PAGINATION: '/assets/images/Pagination_v1.png',
      SLIDER: '/assets/images/Slider.png',
      MASTER_ICON: '/assets/images/master-icon.png',
      EXPLORAR_ARROW: '/assets/images/explorar-arrow.png',
      GOB_LOGO: '/assets/images/gob-logo.png',
      SPAIN_LOGO: '/assets/images/Logo-españa.png'
    };
    return localPaths[assetName] || AEM_CONFIG.IMAGES[assetName];
  }
  
  // En AEM, usar rutas AEM
  return AEM_CONFIG.IMAGES[assetName];
};

// Función helper para obtener rutas de iconos
export const getIconPath = (iconName: keyof typeof AEM_CONFIG.ICONS): string => {
  // En desarrollo, usar rutas locales
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    const localIconPaths: Record<string, string> = {
      CIRCLE_PLUS: '/assets/icons/circle-plus.svg',
      CIRCLE_MINUS: '/assets/icons/circle-minus.svg',
      ARROW_LEFT: '/assets/icons/arrow-left.svg',
      ARROW_RIGHT: '/assets/icons/arrow-right.svg'
    };
    return localIconPaths[iconName] || AEM_CONFIG.ICONS[iconName];
  }
  
  // En AEM, usar rutas AEM
  return AEM_CONFIG.ICONS[iconName];
};

// Función para configurar rutas dinámicas en AEM
export const configureAemPaths = (basePath: string = '/content/dam/spain-info') => {
  AEM_CONFIG.ASSETS_PATH = basePath;
  
  // Actualizar todas las rutas de imágenes
  Object.keys(AEM_CONFIG.IMAGES).forEach(key => {
    const assetKey = key as keyof typeof AEM_CONFIG.IMAGES;
    const fileName = AEM_CONFIG.IMAGES[assetKey].split('/').pop();
    AEM_CONFIG.IMAGES[assetKey] = `${basePath}/images/${fileName}`;
  });
};
