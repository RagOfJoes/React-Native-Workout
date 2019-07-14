import { store } from './Redux/store';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Index from './Components/Index';

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;