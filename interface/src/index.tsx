// import React from 'react';
// import { render } from 'react-dom';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { Router } from 'react-router';
import { I18nProvider } from '@lingui/react'
import App from './App';

// for debugging
import catalogDe from './locales/de/messages.js'
const catalogs_de = { de: catalogDe };

async function loadMessages(language) {
  return await import(`@lingui/loader!./locales/${language}/messages.po`);
}

function LocalizedApp() {
  const [catalogs, setCatalogs] = useState({});
  const [language, setLanguage] = useState('de');

  async function handleLanguageChange(language) {
    const newCatalog = await loadMessages(language);
    const newCatalogs = { ...catalogs, [language]: newCatalog };
    setCatalogs(newCatalogs);
    setLanguage(language);
  }

  return (
    <Router history={history}>
      <I18nProvider language={language} catalogs={catalogs}>
      {/* <I18nProvider language="de" catalogs={catalogs_de}> */}

        <App
        // language={language}
        // onLanguageChange={handleLanguageChange}
        />

      </I18nProvider>
    </Router>
  );
}

ReactDOM.render(<LocalizedApp />, document.getElementById('root'));
