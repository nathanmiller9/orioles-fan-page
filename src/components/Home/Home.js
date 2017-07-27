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
		aj_avg: "",
		aj_hr: "",
		aj_rbi: "",
		aj_h: "",
		aj_ab: "",
		mm_avg: "",
		mm_hr: "",
		mm_rbi: "",
		mm_h: "",
		mm_ab: "",
		js_avg: "",
		js_hr: "",
		js_rbi: "",
		js_h: "",
		js_ab: "",
		mt_avg: "",
		mt_hr: "",
		mt_rbi: "",
		mt_h: "",
		mt_ab: "",
		cd_avg: "",
		cd_hr: "",
		cd_rbi: "",
		cd_h: "",
		cd_ab: "",
		tm_avg: "",
		tm_hr: "",
		tm_rbi: "",
		tm_h: "",
		tm_ab: "",
		wc_avg: "",
		wc_hr: "",
		wc_rbi: "",
		wc_h: "",
		wc_ab: "",
		ss_avg: "",
		ss_hr: "",
		ss_rbi: "",
		ss_h: "",
		ss_ab: "",
		jr_avg: "",
		jr_hr: "",
		jr_rbi: "",
		jr_h: "",
		jr_ab: "",
		cj_avg: "",
		cj_hr: "",
		cj_rbi: "",
		cj_h: "",
		cj_ab: "",
		hs_avg: "",
		hs_hr: "",
		hs_rbi: "",
		hs_h: "",
		hs_ab: ""

	}; 
    
	componentWillMount(){

		const batters = [
		{	name: "Adam Jones",
			id: "430945"
		},
		{ 	name: "Manny Machado",
			id: "592518"
		},
		{	name: "Jonathan Schoop",
			id: "570731"
		},
		{	name: "Mark Trumbo",
			id: "444432"
		},
		{	name: "Chris Davis",
			id: "448801"
		},
		{	name: "Trey Mancini", 
			id: "641820"
		},
		{	name: "Welington Castillo",
			id: "456078"
		},
		{	name: "Seth Smith",
			id: "452234"
		},
		{	name: "Joey Rickard",
			id: "572073"
		},
		{	name: "Caleb Joseph",
			id: "543376"
		},
		{ 	name: "Hyun Soo Kim",
			id: "547957"
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
		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[0]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {aj_avg: json.batting.$["avg"] } );
				that.setState( {aj_hr: json.batting.$["s_hr"] } );
				that.setState( {aj_rbi: json.batting.$["s_rbi"] } );
				that.setState( {aj_h: json.batting.$["s_h"] } );
				that.setState( {aj_ab: json.batting.$["s_ab"] } );
			});
			console.log(that.state.mlb);
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[1]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {mm_avg: json.batting.$["avg"] } );
				that.setState( {mm_hr: json.batting.$["s_hr"] } );
				that.setState( {mm_rbi: json.batting.$["s_rbi"] } );
				that.setState( {mm_h: json.batting.$["s_h"] } );
				that.setState( {mm_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[2]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {js_avg: json.batting.$["avg"] } );
				that.setState( {js_hr: json.batting.$["s_hr"] } );
				that.setState( {js_rbi: json.batting.$["s_rbi"] } );
				that.setState( {js_h: json.batting.$["s_h"] } );
				that.setState( {js_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[3]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {mt_avg: json.batting.$["avg"] } );
				that.setState( {mt_hr: json.batting.$["s_hr"] } );
				that.setState( {mt_rbi: json.batting.$["s_rbi"] } );
				that.setState( {mt_h: json.batting.$["s_h"] } );
				that.setState( {mt_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[4]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {cd_avg: json.batting.$["avg"] } );
				that.setState( {cd_hr: json.batting.$["s_hr"] } );
				that.setState( {cd_rbi: json.batting.$["s_rbi"] } );
				that.setState( {cd_h: json.batting.$["s_h"] } );
				that.setState( {cd_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[5]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {tm_avg: json.batting.$["avg"] } );
				that.setState( {tm_hr: json.batting.$["s_hr"] } );
				that.setState( {tm_rbi: json.batting.$["s_rbi"] } );
				that.setState( {tm_h: json.batting.$["s_h"] } );
				that.setState( {tm_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[6]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {wc_avg: json.batting.$["avg"] } );
				that.setState( {wc_hr: json.batting.$["s_hr"] } );
				that.setState( {wc_rbi: json.batting.$["s_rbi"] } );
				that.setState( {wc_h: json.batting.$["s_h"] } );
				that.setState( {wc_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[7]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {ss_avg: json.batting.$["avg"] } );
				that.setState( {ss_hr: json.batting.$["s_hr"] } );
				that.setState( {ss_rbi: json.batting.$["s_rbi"] } );
				that.setState( {ss_h: json.batting.$["s_h"] } );
				that.setState( {ss_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[8]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {jr_avg: json.batting.$["avg"] } );
				that.setState( {jr_hr: json.batting.$["s_hr"] } );
				that.setState( {jr_rbi: json.batting.$["s_rbi"] } );
				that.setState( {jr_h: json.batting.$["s_h"] } );
				that.setState( {jr_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[9]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {cj_avg: json.batting.$["avg"] } );
				that.setState( {cj_hr: json.batting.$["s_hr"] } );
				that.setState( {cj_rbi: json.batting.$["s_rbi"] } );
				that.setState( {cj_h: json.batting.$["s_h"] } );
				that.setState( {cj_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[10]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				console.log(json);
				console.log(json.batting);
				that.setState( {hs_avg: json.batting.$["avg"] } );
				that.setState( {hs_hr: json.batting.$["s_hr"] } );
				that.setState( {hs_rbi: json.batting.$["s_rbi"] } );
				that.setState( {hs_h: json.batting.$["s_h"] } );
				that.setState( {hs_ab: json.batting.$["s_ab"] } );
		
			console.log(that.state.mlb);
		})

		.catch(function(error) {
			console.log(error);
		});


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
					<p>{ this.state.aj_avg } </p>
					<p>{ this.state.aj_hr } </p>
					<p>{ this.state.aj_rbi } </p>
					<p>{ this.state.aj_h } </p>
					<p>{ this.state.aj_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Manny Machado</h1>
					<p>{ this.state.mm_avg } </p>
					<p>{ this.state.mm_hr } </p>
					<p>{ this.state.mm_rbi } </p>
					<p>{ this.state.mm_h } </p>
					<p>{ this.state.mm_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Jonathan Schoop</h1>
					<p>{ this.state.js_avg } </p>
					<p>{ this.state.js_hr } </p>
					<p>{ this.state.js_rbi } </p>
					<p>{ this.state.js_h } </p>
					<p>{ this.state.js_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Mark Trumbo</h1>
					<p>{ this.state.mt_avg } </p>
					<p>{ this.state.mt_hr } </p>
					<p>{ this.state.mt_rbi } </p>
					<p>{ this.state.mt_h } </p>
					<p>{ this.state.mt_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Chris Davis</h1>
					<p>{ this.state.cd_avg } </p>
					<p>{ this.state.cd_hr } </p>
					<p>{ this.state.cd_rbi } </p>
					<p>{ this.state.cd_h } </p>
					<p>{ this.state.cd_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Trey Mancini</h1>
					<p>{ this.state.tm_avg } </p>
					<p>{ this.state.tm_hr } </p>
					<p>{ this.state.tm_rbi } </p>
					<p>{ this.state.tm_h } </p>
					<p>{ this.state.tm_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Welington Castillo</h1>
					<p>{ this.state.wc_avg } </p>
					<p>{ this.state.wc_hr } </p>
					<p>{ this.state.wc_rbi } </p>
					<p>{ this.state.wc_h } </p>
					<p>{ this.state.wc_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Seth Smith</h1>
					<p>{ this.state.ss_avg } </p>
					<p>{ this.state.ss_hr } </p>
					<p>{ this.state.ss_rbi } </p>
					<p>{ this.state.ss_h } </p>
					<p>{ this.state.ss_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Joey Rickard</h1>
					<p>{ this.state.jr_avg } </p>
					<p>{ this.state.jr_hr } </p>
					<p>{ this.state.jr_rbi } </p>
					<p>{ this.state.jr_h } </p>
					<p>{ this.state.jr_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Caleb Joseph</h1>
					<p>{ this.state.cj_avg } </p>
					<p>{ this.state.cj_hr } </p>
					<p>{ this.state.cj_rbi } </p>
					<p>{ this.state.cj_h } </p>
					<p>{ this.state.cj_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Hyun Soo Kim</h1>
					<p>{ this.state.hs_avg } </p>
					<p>{ this.state.hs_hr } </p>
					<p>{ this.state.hs_rbi } </p>
					<p>{ this.state.hs_h } </p>
					<p>{ this.state.hs_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>JJ Hardy</h1>
					<p>{ this.state.jh_avg } </p>
					<p>{ this.state.jh_hr } </p>
					<p>{ this.state.jh_rbi } </p>
					<p>{ this.state.jh_h } </p>
					<p>{ this.state.jh_ab } </p>
				</Col>
				<Col className xs={4} sm={4} md={4} lg={4}>
					<h1>Reuben Tejada</h1>
					<p>{ this.state.rt_avg } </p>
					<p>{ this.state.rt_hr } </p>
					<p>{ this.state.rt_rbi } </p>
					<p>{ this.state.rt_h } </p>
					<p>{ this.state.rt_ab } </p>
				</Col>
			</div>
			)
	}
}

export default Home;