import React from 'react';
import { render, hydrate } from 'react-dom';
import Application from './Application';
import { loadableReady } from '@loadable/component';
import domReady from 'domready';

domReady(() => {
  loadableReady(() => {
    const { ssr, locale } = window.WEBPACK_ENTRY_DATA;
    const renderer = ssr ? hydrate : render;

    renderer(
      <Application locale={locale} />,
      document.getElementById('container')
    );
  });
});
