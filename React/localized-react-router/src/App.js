import React, { StrictMode } from 'react';
import * as views from './views'
import { LocalizedRouter } from './modules/i18n'

const App = () => (
  <StrictMode>
    <LocalizedRouter>
      <views.Home />
    </LocalizedRouter>
  </StrictMode>
)


export default App;
