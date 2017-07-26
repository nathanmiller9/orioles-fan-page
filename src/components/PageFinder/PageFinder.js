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
		var batters = [
		{	name: "Adam Jones",
			id: "430945"
		},
		{ 	name: "Hyun Soo Kim",
			id: "547957"
		},
		{ 	name: "Manny Machado",
			id: "592518"
		},
		{	name: "Mark Trumbo",
			id: "444432"
		},
		{	name: "Chris Davis",
			id: "448801"
		},
		{	name: "Seth Smith",
			id: "452234"
		},
		{	name: "Welington Castillo",
			id: "456078"
		},
		{	name: "Caleb Joseph",
			id: "543376"
		},
		{	name: "Jonathan Schoop",
			id: "570731"
		},
		{	name: "Joey Rickard",
			id: "572073"
		},
		{	name: "Trey Mancini", 
			id: "641820"
		}	
		];

		var pitchers = {
		"ubaldoJimenez": "434622",
		"wadeMiley": "489119",
		"chrisTillman": "501957",
		"zachBritton": "502154",
		"darrenOday": "503285",
		"richardBleier": "542947",
		"bradBrach": "542960",
		"mychalGivens": "571710",
		"kevinGausman": "592332",
		"dylanBundy": "605164",
		"miguelCastro": "612434",
		"donnieHart": "643354"
		};


		
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
				
				
					axios.get('http://gd2.mlb.com/components/game/mlb/' + year + '/' + month + '/' + day + '/gid_' + gameId + '/batters/' + batters[0]["id"] + '.xml')
			
		.then(function(response) {
			console.log(response);
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
			});
			console.log(that.state.mlb);
			})
		.catch(function (error) {
			console.log(error);
		});
						
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
