import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppPet } from './AppPet';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(process.env);

root.render(
  <React.StrictMode>
    <AppPet />
  </React.StrictMode>
);

