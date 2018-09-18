import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { CardBack } from './components/Card';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />  
        <div style={{width: 200, margin: 20, border: '3px solid red'}}>
          <CardBack />
          <CardBack horizontal />
        </div> 
      </MuiThemeProvider>
    );
  }
}

export default App;
