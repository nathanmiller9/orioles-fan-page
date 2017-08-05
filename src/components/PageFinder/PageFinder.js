import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import axios from 'axios';
import convert from 'xml-to-json-promise';
import moment from 'moment';
import PropTypes from 'prop-types';
import News from '../../components/News/News';
import BSun from '../../components/News/bsun';
import MASN from '../../components/News/masn';
import './PageFinder.css';

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
														console.log(gameId);
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
				<Col className="pageFinder" xs={4} sm={4} md={4} lg={4}>
					<h3>Today's Game</h3>
					<Table responsive>
					    <thead>
					      <tr>
					        <th className="scoreBoard">Teams</th>
					        <th>Runs</th>
					        <th>Hits</th>
					        <th>Errors</th>
					      </tr>
					    </thead>
					    <tbody>
					      <tr>
					        <td className="scoreBoard" >{this.state.awayTeam}</td>
					        <td>{this.state.awayRuns}</td>
					        <td>{this.state.awayHits}</td>
					        <td>{this.state.awayErrors}</td>
					      </tr>
					      <tr>
					        <td className="scoreBoard">{this.state.homeTeam}</td>
					        <td>{this.state.homeRuns}</td>
					        <td>{this.state.homeHits}</td>
					        <td>{this.state.homeErrors}</td>
					      </tr>
						</tbody>
					  </Table>

					  <h4>Probable Starters</h4>
					  	<p className="probableStarters">{this.state.probAwayPitch}
					  		<span> </span>
					  		<span>{this.state.probAwayPitchWins}<span>-</span></span>
					  		<span>{this.state.probAwayPitchLosses}</span>
					  		<span> </span>
					  		<span>{this.state.probAwayPitchEra}</span>
					  		<span> vs. </span>
					  		<span>{this.state.probHomePitch}</span>
					  		<span> {this.state.probHomePitchWins}</span>
					  		<span>-</span>
					  		<span>{this.state.probHomePitchLosses} </span>
					  		<span>{this.state.probHomePitchEra}</span>
					  	</p>
					  	<MASN />
        				<BSun />
        				<News />					
				</Col>
        	</div>
			)
	}
}

export default PageFinder;
