import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'spain-info-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  devServer: {
    port: 3333,
  },
};