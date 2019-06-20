// Depencias
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Rutas
import AppRoutes from './routes';
// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>, 
  document.getElementById('root')
);

serviceWorker.unregister();
