import * as React from 'react';
import { render } from 'react-dom';
import RouterApp from './routes';
import { AppContainer } from 'react-hot-loader';
import './theming/globalCss';
import NextApp from './routes';

declare var module: { hot: any };

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <RouterApp />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl,
    );
  });
}
