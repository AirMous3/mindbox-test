import { render } from 'react-dom';

import { App } from '@/pages';
import { GlobalStyle } from '@/shared';

render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root'),
);
