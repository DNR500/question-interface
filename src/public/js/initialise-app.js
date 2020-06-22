import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/App';

export default () => {
  const wrapper = document.getElementById('main');
  if (wrapper) ReactDOM.render(<Index />, wrapper);
};
