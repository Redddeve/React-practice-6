import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import Loader from 'components/Loader';
import { GlobalStyles } from 'styles/GlobalStyles';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <GlobalStyles />
  </React.StrictMode>
);
