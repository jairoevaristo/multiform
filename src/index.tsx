import React from 'react';
import ReactDOM from 'react-dom';

import { FormContextProvider } from './hooks/useForm';
import { WrapperContent } from '../src/components/WrapperContent';
import GlobalStyle from '../src/styles/global';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <WrapperContent>
        <Routes />
        <GlobalStyle />
      </WrapperContent>
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
