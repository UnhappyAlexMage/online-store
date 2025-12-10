import { Provider } from 'react-redux';
import { store } from './store/store.js'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.js';

async function enableMocking() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");

    return worker.start();
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);})

reportWebVitals();
