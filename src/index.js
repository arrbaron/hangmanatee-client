import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from "./store";
import './index.css';
import App from './containers/App';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider >
  </MuiThemeProvider>,
 document.getElementById('root'));
