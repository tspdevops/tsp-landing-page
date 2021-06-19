import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
// ========Translations imports===========
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import global_fr from './translations/fr/global.json'

i18next.init({
  lng: sessionStorage.getItem('lang') || 'es',
  interpolation:{escapeValue: false},
  resources:{
    es:{
      global: global_es
    },
    en:{
      global: global_en
    },
    fr:{
      global: global_fr
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next} >
        <App/>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

