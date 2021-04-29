import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import Application from './Application';

export default async function render({ loadableStats, locale }) {
  const extractor = new ChunkExtractor({ stats: loadableStats });
  const jsx = extractor.collectChunks(<Application locale={locale} />);
  const html = renderToString(jsx);
  const scripts = extractor.getScriptTags();
  const links = extractor.getLinkTags();
  const styles = extractor.getStyleTags();

  return { html, scripts, links, styles };
}
