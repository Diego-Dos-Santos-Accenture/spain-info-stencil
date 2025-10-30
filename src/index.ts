/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */

export { format } from './utils/utils';
export type * from './components.d.ts';

// Componentes principales
export * from './components/app-header/app-header';
export * from './components/app-footer/app-footer';
export * from './components/app-sidebar/app-sidebar';
export * from './components/app-root/app-root';
export * from './components/app-navbar/app-navbar';
export * from './components/app-components/app-components';

// Component Library
export * from './components/component-library';

// Componente principal para AEM
export * from './aem-main';

// Utilidades para AEM
export * from './utils/aem-config';
