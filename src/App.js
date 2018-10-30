import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';
import QuoteGenerator from './quoteGenerator';

const App = () => (
  <MuiThemeProvider>
    <QuoteGenerator />
  </MuiThemeProvider>
);

export default App;
