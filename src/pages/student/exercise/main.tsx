import React from 'react';
import App from './App';

// El componente App se exporta como valor por defecto, por lo que no se necesita "import { App }"
const Main = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default Main;
