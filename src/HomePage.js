import React, { useContext } from 'react';
import I18nContext from './I18nContext';

export default function HomePage() {
  const { title } = useContext(I18nContext);

  return <div>Home Page: {title}</div>;
}
