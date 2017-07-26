import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import NotFound from './components/NotFound';
import Home from './components/Home/Home';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
		)
}

ReactDOM.render(<Root />, document.getElementById('app'));
registerServiceWorker();
