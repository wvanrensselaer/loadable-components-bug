import React from 'react';
import loadable from '@loadable/component';
import HomePage from './HomePage';
import I18nContext from './I18nContext';

// const Translations = loadable.lib((props) =>
//   import(`./translations.${props.locale}.json`)
// );

const Translations = loadable((props) => import(`./test.${props.locale}.js`));

export default function Application(props) {
  return (
    <Translations locale={props.locale} />
    // <Translations fallback="Loading translations..." locale={props.locale}>
    //   {(translations) => (
    //     <I18nContext.Provider value={translations}>
    //       <div>
    //         Application
    //         <HomePage />
    //       </div>
    //     </I18nContext.Provider>
    //   )}
    // </Translations>
  );
}
