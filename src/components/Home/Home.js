import React from 'react';
import axios from 'axios';
import convert from 'xml-to-json-promise';
import { Col, Jumbotron, Button } from 'react-bootstrap';
import './Home.css';
import moment from 'moment';
import PropTypes from 'prop-types';

class Home extends React.Component {
	state = {
		mlb: [],
		avg: "",
		hr: "",
		rbi: "",
		h: "",
		ab: "",
		player: ""
	}; 
    
	componentWillMount(){
		let that = this;
		let year = "year_" + moment().format('YYYY');
		let month = "month_" + moment().format('MMMM');
		let day = "day_" + moment().format('DD');
		console.log(year);
		console.log(month);
		console.log(day);
		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/430945.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {avg: json.batting.$["avg"] } );
				that.setState( {hr: json.batting.$["s_hr"] } );
				that.setState( {rbi: json.batting.$["s_rbi"] } );
				that.setState( {h: json.batting.$["s_h"] } );
				that.setState( {ab: json.batting.$["s_ab"] } );
			});
			console.log(that.state.mlb);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	render() {
		return (
			<div className="home">
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Adam Jones</h1>
					<p>{ this.state.avg } </p>
					<p>{ this.state.hr } </p>
					<p>{ this.state.rbi } </p>
					<p>{ this.state.h } </p>
					<p>{ this.state.ab } </p>
				</Col>
			</div>
			)
	}
}

export default Home;