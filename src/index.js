import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker';

library.add(fab, faPause, faPlay);
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
