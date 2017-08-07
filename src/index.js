import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import News from './components/News/News';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match pattern='/news' component={News} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
		)
}

ReactDOM.render(<Root />, document.getElementById('app'));
registerServiceWorker();
