import React from 'react';
import axios from 'axios';
import convert from 'xml-to-json-promise';
import { Jumbotron, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Home extends React.Component {
	state = {
		mlb: [],
		avg: "",
		hr: "",
		rbi: ""
	};
	componentWillMount(){
		let that = this;
		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/430945.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				console.log(json.batting.$["avg"]);
				console.log(json.batting.$["s_hr"]);
				console.log(json.batting.$["s_rbi"]);
				that.setState( {avg: json.batting.$["avg"] } );
				that.setState( {hr: json.batting.$["s_hr"] } );
				that.setState( {rbi: json.batting.$["s_rbi"] } );
			});
			console.log(that.state.mlb);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	render() {
		return (
			<div>
				<Jumbotron>
				    <h1>O's</h1>
				    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				    <p><Button bsStyle="primary">Learn more</Button></p>
				</Jumbotron>
				<h1>Let's Go O's!!!!</h1>
				<p>{ this.state.avg } </p>
				<p>{ this.state.hr } </p>
				<p>{ this.state.rbi } </p>
			</div>
			)
	}
}

export default Home;