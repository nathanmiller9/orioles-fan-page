import React, { Component } from 'react';
import axios from 'axios';
import convert from 'xml-to-json-promise';
import moment from 'moment';
import PropTypes from 'prop-types';

class PageFinder extends React.Component {
	state = {
		epg: [],
		gameIds: [],
		balGameId: "",
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
				let month = "month_" + moment().format('MM');
				let day = "day_" + moment().format('DD');
				console.log(year);
				console.log(month);
				console.log(day);
			axios.get('http://gd2.mlb.com/components/game/mlb/' + year + '/' + month + '/' + day + '/epg.xml')
		.then(function(response) {
			
			that.setState( { epg: response.data } );
			convert.xmlDataToJSON(that.state.epg).then(json => {
				
				that.setState( { gameIds: json.epg.game } );
				
				for (let i = 0; i < that.state.gameIds.length; i++) {
					
					if (that.state.gameIds[i].$.gameday.indexOf('balmlb') !== -1 ) {
						console.log("this is the id you're looking for: " + that.state.gameIds[i].$.gameday);	
						that.setState( { balGameId: that.state.gameIds[i].$.gameday });
						var gameId = that.state.gameIds[i].$.gameday;
					}
					else {
						console.log("not the id you're looking for..");
					}
				}
				
				
					
						
		})


		.catch(function (error) {
			console.log(error);
		});
		
	});
	}

	render() {
		return (
			<div>
				<h1>{this.state.balGameId}</h1>
        	</div>
			)
	}
}

export default PageFinder;
