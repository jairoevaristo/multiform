import React from 'react';
import ReactDOM from 'react-dom';

import { FormContextProvider } from './hooks/useForm';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <Routes />
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
