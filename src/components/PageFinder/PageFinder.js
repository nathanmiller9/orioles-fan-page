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
		player: "",
		boxscore: [],
		homeTeam: "",
		awayTeam: "",
		homeRuns: "0",
		awayRuns: "0",
		homeHits: "0",
		awayHits: "0",
		homeErrors: "0",
		awayErrors: "0",
		probAwayPitch: "",
		probAwayPitchWins: "",
		probAwayPitchLosses: "",
		probAwayPitchEra: "",
		probHomePitch: "",
		probHomePitchWins: "",
		probHomePitchLosses: "",
		probHomePitchEra: "",
		plays: []
	}; 
	componentWillMount(){
				let that = this;
				let year = "year_" + moment().format('YYYY');
				let month = "month_" + moment().format('MM');
				let day = "day_" + moment().format('DD');
				let gameId = "";
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
						gameId = that.state.gameIds[i].$.gameday;

							axios.get('http://gd2.mlb.com/components/game/mlb/' + year + '/' + month + '/' + day + '/gid_' + gameId + '/linescore.json')

							.then(function(response) {
								that.setState( { boxscore: response.data } );
								console.log(that.state.boxscore.data.game);
								that.setState ( { homeTeam: that.state.boxscore.data.game.home_team_city } );
								that.setState ( { awayTeam: that.state.boxscore.data.game.away_team_city } );
									
									if (that.state.boxscore.data.game.away_team_runs) 
										{
											that.setState ( { homeRuns: that.state.boxscore.data.game.home_team_runs } );
											that.setState ( { awayRuns: that.state.boxscore.data.game.away_team_runs } );
											that.setState ( { homeHits: that.state.boxscore.data.game.home_team_hits } );
											that.setState ( { awayHits: that.state.boxscore.data.game.away_team_hits } );
											that.setState ( { homeErrors: that.state.boxscore.data.game.home_team_errors } );
											that.setState ( { awayErrors: that.state.boxscore.data.game.away_team_errors } );

												axios.get('http://gd2.mlb.com/components/game/mlb/' + year + '/' + month + '/' + day + '/gid_' + gameId + '/plays.json')

													.then(function(response) {
														that.setState( { plays: response.data } );
														console.log(that.state.plays.data.game.atbat.des);
												})	
													.catch(function (error) {
													console.log(error);

												});

												

										}
									else 
										{   
											that.setState ( { probAwayPitch: that.state.boxscore.data.game.away_probable_pitcher.last } );
											that.setState ( { probAwayPitchWins: that.state.boxscore.data.game.away_probable_pitcher.s_wins } );
											that.setState ( { probAwayPitchLosses: that.state.boxscore.data.game.away_probable_pitcher.s_losses } );
											that.setState ( { probAwayPitchEra: that.state.boxscore.data.game.away_probable_pitcher.s_era } );
											that.setState ( { probHomePitch: that.state.boxscore.data.game.home_probable_pitcher.last } );
											that.setState ( { probHomePitchWins: that.state.boxscore.data.game.home_probable_pitcher.s_wins } );
											that.setState ( { probHomePitchLosses: that.state.boxscore.data.game.home_probable_pitcher.s_losses } );
											that.setState ( { probHomePitchEra: that.state.boxscore.data.game.home_probable_pitcher.s_era } );

										}
							})
							.catch(function (error) {
								console.log(error);
							});

					}
					else {
						console.log("not the id you're looking for..");
					}
				}											
		})
		})
		.catch(function (error) {
			console.log(error);
		});
		
	}

	
	render() {
		return (
			<div>
				<h1>{this.state.balGameId}</h1>
				<h3>{this.state.awayTeam}</h3>
				<h3>{this.state.homeTeam}</h3>
				<h3>{this.state.awayRuns}</h3>
				<h3>{this.state.homeRuns}</h3>
				<h3>{this.state.awayHits}</h3>
				<h3>{this.state.homeHits}</h3>
				<h3>{this.state.awayErrors}</h3>
				<h3>{this.state.homeErrors}</h3>
				<h3>{this.state.probAwayPitch}</h3>
				<h3>{this.state.probAwayPitchWins}</h3>
				<h3>{this.state.probAwayPitchLosses}</h3>
				<h3>{this.state.probAwayPitchEra}</h3>
				<h3>{this.state.probHomePitch}</h3>
				<h3>{this.state.probHomePitchWins}</h3>
				<h3>{this.state.probHomePitchLosses}</h3>
				<h3>{this.state.probHomePitchEra}</h3>
        	</div>
			)
	}
}

export default PageFinder;
