import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import myStore from './Store/Store.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>  
      <App />
    </Provider>
  </StrictMode>
);
