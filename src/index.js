import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import { MuiThemeProvider, CssBaseline} from '@material-ui/core';



ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>,
    document.getElementById('root')
);
