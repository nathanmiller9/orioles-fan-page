import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import NotFound from './components/NotFound';
import Home from './components/Home/Home';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
		)
}

ReactDOM.render(<Root />, document.querySelector('#app'));
registerServiceWorker();
