import React from 'react';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import Base from './Base.jsx';

import { Provider } from 'react-redux';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <Base />
    </Provider>
  );
};

export default App;
