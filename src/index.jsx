import { render } from 'react-dom';

import { App } from '@/components';
import { GlobalStyle } from '@/shared/styles/global-styles/global-styles';

render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root'),
);
