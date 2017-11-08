import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import {cyan700} from 'material-ui/styles/colors';
import {grey400} from 'material-ui/styles/colors';
import {pinkA200} from 'material-ui/styles/colors';
import {grey100} from 'material-ui/styles/colors';
import {grey500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({

  palette: {
    primary1Color: '#009688',
    primary2Color: '#00796B',
    primary3Color: '#B2DFDB',
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: cyan500,
  },
  appBar: {
    height: 50
  }
});

const Page = () => (<MuiThemeProvider muiTheme={muiTheme}>
  <App/>
</MuiThemeProvider>);

ReactDOM.render(<Page/>, document.getElementById('root'));
registerServiceWorker();
