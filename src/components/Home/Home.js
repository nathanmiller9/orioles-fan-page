import React from 'react';
import { Col, Table } from 'react-bootstrap';
import axios from 'axios';
import convert from 'xml-to-json-promise';
import './Home.css';

class Home extends React.Component {
	state = {
		mlb: [],
		aj_avg: "",
		aj_hr: "",
		aj_rbi: "",
		aj_h: "",
		aj_ab: "",
		aj_double: "",
		aj_triple: "",
		aj_sb: "",
		aj_r: "",
		mm_avg: "",
		mm_hr: "",
		mm_rbi: "",
		mm_h: "",
		mm_ab: "",
		mm_double: "",
		mm_triple: "",
		mm_sb: "",
		mm_r: "",
		js_avg: "",
		js_hr: "",
		js_rbi: "",
		js_h: "",
		js_ab: "",
		js_double: "",
		js_triple: "",
		js_sb: "",
		js_r: "",
		mt_avg: "",
		mt_hr: "",
		mt_rbi: "",
		mt_h: "",
		mt_ab: "",
		mt_double: "",
		mt_triple: "",
		mt_sb: "",
		mt_r: "",
		cd_avg: "",
		cd_hr: "",
		cd_rbi: "",
		cd_h: "",
		cd_ab: "",
		cd_double: "",
		cd_triple: "",
		cd_sb: "",
		cd_r: "",
		tm_avg: "",
		tm_hr: "",
		tm_rbi: "",
		tm_h: "",
		tm_ab: "",
		tm_double: "",
		tm_triple: "",
		tm_sb: "",
		tm_r: "",
		wc_avg: "",
		wc_hr: "",
		wc_rbi: "",
		wc_h: "",
		wc_ab: "",
		wc_double: "",
		wc_triple: "",
		wc_sb: "",
		wc_r: "",
		ss_avg: "",
		ss_hr: "",
		ss_rbi: "",
		ss_h: "",
		ss_ab: "",
		ss_double: "",
		ss_triple: "",
		ss_sb: "",
		ss_r: "",
		jr_avg: "",
		jr_hr: "",
		jr_rbi: "",
		jr_h: "",
		jr_ab: "",
		jr_double: "",
		jr_triple: "",
		jr_sb: "",
		jr_r: "",
		cj_avg: "",
		cj_hr: "",
		cj_rbi: "",
		cj_h: "",
		cj_ab: "",
		cj_double: "",
		cj_triple: "",
		cj_sb: "",
		cj_r: "",
		tb_avg: "",
		tb_hr: "",
		tb_rbi: "",
		tb_h: "",
		tb_ab: "",
		tb_double: "",
		tb_triple: "",
		tb_sb: "",
		tb_r: "",
		rt_avg: "",
		rt_hr: "",
		rt_rbi: "",
		rt_h: "",
		rt_ab: "",
		rt_double: "",
		rt_triple: "",
		rt_sb: "",
		rt_r: "",
		cg_avg: "",
		cg_hr: "",
		cg_rbi: "",
		cg_h: "",
		cg_ab: "",
		cg_double: "",
		cg_triple: "",
		cg_sb: "",
		cg_r: "",
		rf_avg: "",
		rf_hr: "",
		rf_rbi: "",
		rf_h: "",
		rf_ab: "",
		rf_double: "",
		rf_triple: "",
		rf_sb: "",
		rf_r: "",
		db_w: "",
		db_l: "",
		db_era: "",
		db_saves: "",
		db_k: "",
		db_whip: "",
		db_ip: "",
		db_bb: "",
		db_hits: "",
		jh_w: "",
		jh_l: "",
		jh_era: "",
		jh_saves: "",
		jh_k: "",
		jh_whip: "",
		jh_ip: "",
		jh_bb: "",
		jh_hits: "",
		kg_w: "",
		kg_l: "",
		kg_era: "",
		kg_saves: "",
		kg_k: "",
		kg_whip: "",
		kg_ip: "",
		kg_bb: "",
		kg_hits: "",
		uj_w: "",
		uj_l: "",
		uj_era: "",
		uj_saves: "",
		uj_k: "",
		uj_whip: "",
		uj_ip: "",
		uj_bb: "",
		uj_hits: "",
		wm_w: "",
		wm_l: "",
		wm_era: "",
		wm_saves: "",
		wm_k: "",
		wm_whip: "",
		wm_ip: "",
		wm_bb: "",
		wm_hits: "",
		ct_w: "",
		ct_l: "",
		ct_era: "",
		ct_saves: "",
		ct_k: "",
		ct_whip: "",
		ct_ip: "",
		ct_bb: "",
		ct_hits: "",
		zb_w: "",
		zb_l: "",
		zb_era: "",
		zb_saves: "",
		zb_k: "",
		zb_whip: "",
		zb_ip: "",
		zb_bb: "",
		zb_hits: "",
		bb_w: "",
		bb_l: "",
		bb_era: "",
		bb_saves: "",
		bb_k: "",
		bb_whip: "",
		bb_ip: "",
		bb_bb: "",
		bb_hits: "",
		mg_w: "",
		mg_l: "",
		mg_era: "",
		mg_saves: "",
		mg_k: "",
		mg_whip: "",
		mg_ip: "",
		mg_bb: "",
		mg_hits: "",
		do_w: "",
		do_l: "",
		do_era: "",
		do_saves: "",
		do_k: "",
		do_whip: "",
		do_ip: "",
		do_bb: "",
		do_hits: "",
		rb_w: "",
		rb_l: "",
		rb_era: "",
		rb_saves: "",
		rb_k: "",
		rb_whip: "",
		rb_ip: "",
		rb_bb: "",
		rb_hits: "",
		mc_w: "",
		mc_l: "",
		mc_era: "",
		mc_saves: "",
		mc_k: "",
		mc_whip: "",
		mc_ip: "",
		mc_bb: "",
		mc_hits: "",
		dh_w: "",
		dh_l: "",
		dh_era: "",
		dh_saves: "",
		dh_k: "",
		dh_whip: "",
		dh_ip: "",
		dh_bb: "",
		dh_hits: "",
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
		{ 	name: "Tim Beckham",
			id: "542921"
		},
		{	name: "Ruben Tejada",
			id: "514913"
		},
		{	name: "Craig Gentry",
			id: "502226"
		},
		{	name: "Ryan Flaherty",
			id: "475247"
		},
		{	name: "JJ Hardy",
			id: "429666"
		}			
		];

		const pitchers = [
		{	name: "Dylan Bundy",
			id: "605164"
		},
		{	name: "Jeremy Hellickson",
			id: "476451"
		},
		{	name: "Kevin Gausman",
			id: "592332"
		},
		{	name: "Ubaldo Jimenez",
			id: "434622"
		},	
		{	name: "Wade Miley",
			id: "489119"
		},
		{	name: "Chris Tillman",
			id: "501957"
		},
		{	name: "Zach Britton",
			id: "502154"
		},
		{	name: "Brad Brach",
			id: "542960"
		},
		{	name: "Mychal Givens",
			id: "571710"
		},
		{	name: "Darren O'Day",
			id: "503285"
		},
		{	name: "Richard Bleier",
			id: "542947"
		},
		{	name: "Miguel Castro",
			id: "612434"
		},
		{	name: "Donnie Hart",
			id: "643354"
		}
		];

		let that = this;
		axios.get('https://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[0]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {aj_avg: json.batting.$["avg"] } );
				that.setState( {aj_hr: json.batting.$["s_hr"] } );
				that.setState( {aj_rbi: json.batting.$["s_rbi"] } );
				that.setState( {aj_h: json.batting.$["s_h"] } );
				that.setState( {aj_ab: json.batting.$["s_ab"] } );
				that.setState( {aj_double: json.batting.$["s_double"] } );
				that.setState( {aj_triple: json.batting.$["s_triple"] } );
				that.setState( {aj_sb: json.batting.$["s_sb"] } );
				that.setState( {aj_r: json.batting.$["s_r"] } );
			});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[1]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {mm_avg: json.batting.$["avg"] } );
				that.setState( {mm_hr: json.batting.$["s_hr"] } );
				that.setState( {mm_rbi: json.batting.$["s_rbi"] } );
				that.setState( {mm_h: json.batting.$["s_h"] } );
				that.setState( {mm_ab: json.batting.$["s_ab"] } );
				that.setState( {mm_double: json.batting.$["s_double"] } );
				that.setState( {mm_triple: json.batting.$["s_triple"] } );
				that.setState( {mm_sb: json.batting.$["s_sb"] } );
				that.setState( {mm_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[2]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {js_avg: json.batting.$["avg"] } );
				that.setState( {js_hr: json.batting.$["s_hr"] } );
				that.setState( {js_rbi: json.batting.$["s_rbi"] } );
				that.setState( {js_h: json.batting.$["s_h"] } );
				that.setState( {js_ab: json.batting.$["s_ab"] } );
				that.setState( {js_double: json.batting.$["s_double"] } );
				that.setState( {js_triple: json.batting.$["s_triple"] } );
				that.setState( {js_sb: json.batting.$["s_sb"] } );
				that.setState( {js_r: json.batting.$["s_r"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[3]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {mt_avg: json.batting.$["avg"] } );
				that.setState( {mt_hr: json.batting.$["s_hr"] } );
				that.setState( {mt_rbi: json.batting.$["s_rbi"] } );
				that.setState( {mt_h: json.batting.$["s_h"] } );
				that.setState( {mt_ab: json.batting.$["s_ab"] } );
				that.setState( {mt_double: json.batting.$["s_double"] } );
				that.setState( {mt_triple: json.batting.$["s_triple"] } );
				that.setState( {mt_sb: json.batting.$["s_sb"] } );
				that.setState( {mt_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[4]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {cd_avg: json.batting.$["avg"] } );
				that.setState( {cd_hr: json.batting.$["s_hr"] } );
				that.setState( {cd_rbi: json.batting.$["s_rbi"] } );
				that.setState( {cd_h: json.batting.$["s_h"] } );
				that.setState( {cd_ab: json.batting.$["s_ab"] } );
				that.setState( {cd_double: json.batting.$["s_double"] } );
				that.setState( {cd_triple: json.batting.$["s_triple"] } );
				that.setState( {cd_sb: json.batting.$["s_sb"] } );
				that.setState( {cd_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[5]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {tm_avg: json.batting.$["avg"] } );
				that.setState( {tm_hr: json.batting.$["s_hr"] } );
				that.setState( {tm_rbi: json.batting.$["s_rbi"] } );
				that.setState( {tm_h: json.batting.$["s_h"] } );
				that.setState( {tm_ab: json.batting.$["s_ab"] } );
				that.setState( {tm_double: json.batting.$["s_double"] } );
				that.setState( {tm_triple: json.batting.$["s_triple"] } );
				that.setState( {tm_sb: json.batting.$["s_sb"] } );
				that.setState( {tm_r: json.batting.$["s_r"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[6]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {wc_avg: json.batting.$["avg"] } );
				that.setState( {wc_hr: json.batting.$["s_hr"] } );
				that.setState( {wc_rbi: json.batting.$["s_rbi"] } );
				that.setState( {wc_h: json.batting.$["s_h"] } );
				that.setState( {wc_ab: json.batting.$["s_ab"] } );
				that.setState( {wc_double: json.batting.$["s_double"] } );
				that.setState( {wc_triple: json.batting.$["s_triple"] } );
				that.setState( {wc_sb: json.batting.$["s_sb"] } );
				that.setState( {wc_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[7]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {ss_avg: json.batting.$["avg"] } );
				that.setState( {ss_hr: json.batting.$["s_hr"] } );
				that.setState( {ss_rbi: json.batting.$["s_rbi"] } );
				that.setState( {ss_h: json.batting.$["s_h"] } );
				that.setState( {ss_ab: json.batting.$["s_ab"] } );
				that.setState( {ss_double: json.batting.$["s_double"] } );
				that.setState( {ss_triple: json.batting.$["s_triple"] } );
				that.setState( {ss_sb: json.batting.$["s_sb"] } );
				that.setState( {ss_r: json.batting.$["s_r"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[8]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {jr_avg: json.batting.$["avg"] } );
				that.setState( {jr_hr: json.batting.$["s_hr"] } );
				that.setState( {jr_rbi: json.batting.$["s_rbi"] } );
				that.setState( {jr_h: json.batting.$["s_h"] } );
				that.setState( {jr_ab: json.batting.$["s_ab"] } );
				that.setState( {jr_double: json.batting.$["s_double"] } );
				that.setState( {jr_triple: json.batting.$["s_triple"] } );
				that.setState( {jr_sb: json.batting.$["s_sb"] } );
				that.setState( {jr_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[9]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {cj_avg: json.batting.$["avg"] } );
				that.setState( {cj_hr: json.batting.$["s_hr"] } );
				that.setState( {cj_rbi: json.batting.$["s_rbi"] } );
				that.setState( {cj_h: json.batting.$["s_h"] } );
				that.setState( {cj_ab: json.batting.$["s_ab"] } );
				that.setState( {cj_double: json.batting.$["s_double"] } );
				that.setState( {cj_triple: json.batting.$["s_triple"] } );
				that.setState( {cj_sb: json.batting.$["s_sb"] } );
				that.setState( {cj_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[10]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {tb_avg: json.batting.$["avg"] } );
				that.setState( {tb_hr: json.batting.$["s_hr"] } );
				that.setState( {tb_rbi: json.batting.$["s_rbi"] } );
				that.setState( {tb_h: json.batting.$["s_h"] } );
				that.setState( {tb_ab: json.batting.$["s_ab"] } );
				that.setState( {tb_double: json.batting.$["s_double"] } );
				that.setState( {tb_triple: json.batting.$["s_triple"] } );
				that.setState( {tb_sb: json.batting.$["s_sb"] } );
				that.setState( {tb_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[11]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {rt_avg: json.batting.$["avg"] } );
				that.setState( {rt_hr: json.batting.$["s_hr"] } );
				that.setState( {rt_rbi: json.batting.$["s_rbi"] } );
				that.setState( {rt_h: json.batting.$["s_h"] } );
				that.setState( {rt_ab: json.batting.$["s_ab"] } );
				that.setState( {rt_double: json.batting.$["s_double"] } );
				that.setState( {rt_triple: json.batting.$["s_triple"] } );
				that.setState( {rt_sb: json.batting.$["s_sb"] } );
				that.setState( {rt_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[12]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {cg_avg: json.batting.$["avg"] } );
				that.setState( {cg_hr: json.batting.$["s_hr"] } );
				that.setState( {cg_rbi: json.batting.$["s_rbi"] } );
				that.setState( {cg_h: json.batting.$["s_h"] } );
				that.setState( {cg_ab: json.batting.$["s_ab"] } );
				that.setState( {cg_double: json.batting.$["s_double"] } );
				that.setState( {cg_triple: json.batting.$["s_triple"] } );
				that.setState( {cg_sb: json.batting.$["s_sb"] } );
				that.setState( {cg_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[13]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {rf_avg: json.batting.$["avg"] } );
				that.setState( {rf_hr: json.batting.$["s_hr"] } );
				that.setState( {rf_rbi: json.batting.$["s_rbi"] } );
				that.setState( {rf_h: json.batting.$["s_h"] } );
				that.setState( {rf_ab: json.batting.$["s_ab"] } );
				that.setState( {rf_double: json.batting.$["s_double"] } );
				that.setState( {rf_triple: json.batting.$["s_triple"] } );
				that.setState( {rf_sb: json.batting.$["s_sb"] } );
				that.setState( {rf_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/batters/' + batters[14]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {jh_avg: json.batting.$["avg"] } );
				that.setState( {jh_hr: json.batting.$["s_hr"] } );
				that.setState( {jh_rbi: json.batting.$["s_rbi"] } );
				that.setState( {jh_h: json.batting.$["s_h"] } );
				that.setState( {jh_ab: json.batting.$["s_ab"] } );
				that.setState( {jh_double: json.batting.$["s_double"] } );
				that.setState( {jh_triple: json.batting.$["s_triple"] } );
				that.setState( {jh_sb: json.batting.$["s_sb"] } );
				that.setState( {jh_r: json.batting.$["s_r"] } );
		})
		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[0]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {db_w: json.pitching.$["w"] } );
				that.setState( {db_l: json.pitching.$["l"] } );
				that.setState( {db_era: json.pitching.$["era"] } );
				that.setState( {db_saves: json.pitching.$["s_sv"] } );
				that.setState( {db_k: json.pitching.$["s_k"] } );
				that.setState( {db_whip: json.pitching.$["whip"] } );
				that.setState( {db_ip: json.pitching.$["s_ip"] } );
				that.setState( {db_bb: json.pitching.$["s_bb"] } );
				that.setState( {db_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[1]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {jh_w: json.pitching.$["w"] } );
				that.setState( {jh_l: json.pitching.$["l"] } );
				that.setState( {jh_era: json.pitching.$["era"] } );
				that.setState( {jh_saves: json.pitching.$["s_sv"] } );
				that.setState( {jh_k: json.pitching.$["s_k"] } );
				that.setState( {jh_whip: json.pitching.$["whip"] } );
				that.setState( {jh_ip: json.pitching.$["s_ip"] } );
				that.setState( {jh_bb: json.pitching.$["s_bb"] } );
				that.setState( {jh_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[2]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {kg_w: json.pitching.$["w"] } );
				that.setState( {kg_l: json.pitching.$["l"] } );
				that.setState( {kg_era: json.pitching.$["era"] } );
				that.setState( {kg_saves: json.pitching.$["s_sv"] } );
				that.setState( {kg_k: json.pitching.$["s_k"] } );
				that.setState( {kg_whip: json.pitching.$["whip"] } );
				that.setState( {kg_ip: json.pitching.$["s_ip"] } );
				that.setState( {kg_bb: json.pitching.$["s_bb"] } );
				that.setState( {kg_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[3]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {uj_w: json.pitching.$["w"] } );
				that.setState( {uj_l: json.pitching.$["l"] } );
				that.setState( {uj_era: json.pitching.$["era"] } );
				that.setState( {uj_saves: json.pitching.$["s_sv"] } );
				that.setState( {uj_k: json.pitching.$["s_k"] } );
				that.setState( {uj_whip: json.pitching.$["whip"] } );
				that.setState( {uj_ip: json.pitching.$["s_ip"] } );
				that.setState( {uj_bb: json.pitching.$["s_bb"] } );
				that.setState( {uj_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[4]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {wm_w: json.pitching.$["w"] } );
				that.setState( {wm_l: json.pitching.$["l"] } );
				that.setState( {wm_era: json.pitching.$["era"] } );
				that.setState( {wm_saves: json.pitching.$["s_sv"] } );
				that.setState( {wm_k: json.pitching.$["s_k"] } );
				that.setState( {wm_whip: json.pitching.$["whip"] } );
				that.setState( {wm_ip: json.pitching.$["s_ip"] } );
				that.setState( {wm_bb: json.pitching.$["s_bb"] } );
				that.setState( {wm_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[5]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {ct_w: json.pitching.$["w"] } );
				that.setState( {ct_l: json.pitching.$["l"] } );
				that.setState( {ct_era: json.pitching.$["era"] } );
				that.setState( {ct_saves: json.pitching.$["s_sv"] } );
				that.setState( {ct_k: json.pitching.$["s_k"] } );
				that.setState( {ct_whip: json.pitching.$["whip"] } );
				that.setState( {ct_ip: json.pitching.$["s_ip"] } );
				that.setState( {ct_bb: json.pitching.$["s_bb"] } );
				that.setState( {ct_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[6]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {zb_w: json.pitching.$["w"] } );
				that.setState( {zb_l: json.pitching.$["l"] } );
				that.setState( {zb_era: json.pitching.$["era"] } );
				that.setState( {zb_saves: json.pitching.$["s_sv"] } );
				that.setState( {zb_k: json.pitching.$["s_k"] } );
				that.setState( {zb_whip: json.pitching.$["whip"] } );
				that.setState( {zb_ip: json.pitching.$["s_ip"] } );
				that.setState( {zb_bb: json.pitching.$["s_bb"] } );
				that.setState( {zb_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[7]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {bb_w: json.pitching.$["w"] } );
				that.setState( {bb_l: json.pitching.$["l"] } );
				that.setState( {bb_era: json.pitching.$["era"] } );
				that.setState( {bb_saves: json.pitching.$["s_sv"] } );
				that.setState( {bb_k: json.pitching.$["s_k"] } );
				that.setState( {bb_whip: json.pitching.$["whip"] } );
				that.setState( {bb_ip: json.pitching.$["s_ip"] } );
				that.setState( {bb_bb: json.pitching.$["s_bb"] } );
				that.setState( {bb_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[8]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {mg_w: json.pitching.$["w"] } );
				that.setState( {mg_l: json.pitching.$["l"] } );
				that.setState( {mg_era: json.pitching.$["era"] } );
				that.setState( {mg_saves: json.pitching.$["s_sv"] } );
				that.setState( {mg_k: json.pitching.$["s_k"] } );
				that.setState( {mg_whip: json.pitching.$["whip"] } );
				that.setState( {mg_ip: json.pitching.$["s_ip"] } );
				that.setState( {mg_bb: json.pitching.$["s_bb"] } );
				that.setState( {mg_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[9]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {do_w: json.pitching.$["w"] } );
				that.setState( {do_l: json.pitching.$["l"] } );
				that.setState( {do_era: json.pitching.$["era"] } );
				that.setState( {do_saves: json.pitching.$["s_sv"] } );
				that.setState( {do_k: json.pitching.$["s_k"] } );
				that.setState( {do_whip: json.pitching.$["whip"] } );
				that.setState( {do_ip: json.pitching.$["s_ip"] } );
				that.setState( {do_bb: json.pitching.$["s_bb"] } );
				that.setState( {do_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[10]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {rb_w: json.pitching.$["w"] } );
				that.setState( {rb_l: json.pitching.$["l"] } );
				that.setState( {rb_era: json.pitching.$["era"] } );
				that.setState( {rb_saves: json.pitching.$["s_sv"] } );
				that.setState( {rb_k: json.pitching.$["s_k"] } );
				that.setState( {rb_whip: json.pitching.$["whip"] } );
				that.setState( {rb_ip: json.pitching.$["s_ip"] } );
				that.setState( {rb_bb: json.pitching.$["s_bb"] } );
				that.setState( {rb_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[11]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {mc_w: json.pitching.$["w"] } );
				that.setState( {mc_l: json.pitching.$["l"] } );
				that.setState( {mc_era: json.pitching.$["era"] } );
				that.setState( {mc_saves: json.pitching.$["s_sv"] } );
				that.setState( {mc_k: json.pitching.$["s_k"] } );
				that.setState( {mc_whip: json.pitching.$["whip"] } );
				that.setState( {mc_ip: json.pitching.$["s_ip"] } );
				that.setState( {mc_bb: json.pitching.$["s_bb"] } );
				that.setState( {mc_hits: json.pitching.$["s_h"] } );
		})

		.catch(function(error) {
			console.log(error);
		});
		})

		axios.get('http://gd2.mlb.com/components/game/mlb/year_2017/pitchers/' + pitchers[12]["id"] + '.xml')
		.then(function(response) {
			that.setState( { mlb: response.data } );
			convert.xmlDataToJSON(that.state.mlb).then(json => {
				that.setState( {dh_w: json.pitching.$["w"] } );
				that.setState( {dh_l: json.pitching.$["l"] } );
				that.setState( {dh_era: json.pitching.$["era"] } );
				that.setState( {dh_saves: json.pitching.$["s_sv"] } );
				that.setState( {dh_k: json.pitching.$["s_k"] } );
				that.setState( {dh_whip: json.pitching.$["whip"] } );
				that.setState( {dh_ip: json.pitching.$["s_ip"] } );
				that.setState( {dh_bb: json.pitching.$["s_bb"] } );
				that.setState( {dh_hits: json.pitching.$["s_h"] } );
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
			<Col className="stats" xs={8} sm={8} md={8} lg={8}>
			<h3>Batting Statistics</h3>
				<Table responsive>
    <thead>
      <tr>
        <th className="playerHead">Player</th>
        <th>Average</th>
        <th>RBI</th>
        <th>HR</th>
        <th>H</th>
        <th>AB</th>
        <th>Doubles</th>
        <th>Triples</th>
        <th>SB</th>
        <th>Runs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="playerHead">Adam Jones</td>
        <td>{ this.state.aj_avg } </td>
        <td>{ this.state.aj_hr } </td>
        <td>{ this.state.aj_rbi } </td>
        <td>{ this.state.aj_h }</td>
        <td>{ this.state.aj_ab } </td>
        <td>{ this.state.aj_double } </td>
        <td>{ this.state.aj_triple } </td>
        <td>{ this.state.aj_sb } </td>
        <td>{ this.state.aj_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Manny Machado</td>
        <td>{ this.state.mm_avg } </td>
        <td>{ this.state.mm_hr } </td>
        <td>{ this.state.mm_rbi } </td>
        <td>{ this.state.mm_h }</td>
        <td>{ this.state.mm_ab } </td>
        <td>{ this.state.mm_double } </td>
        <td>{ this.state.mm_triple } </td>
        <td>{ this.state.mm_sb } </td>
        <td>{ this.state.mm_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Jonathan Schoop</td>
        <td>{ this.state.js_avg } </td>
        <td>{ this.state.js_hr } </td>
        <td>{ this.state.js_rbi } </td>
        <td>{ this.state.js_h }</td>
        <td>{ this.state.js_ab } </td>
        <td>{ this.state.js_double } </td>
        <td>{ this.state.js_triple } </td>
        <td>{ this.state.js_sb } </td>
        <td>{ this.state.js_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Chris Davis</td>
        <td>{ this.state.cd_avg } </td>
        <td>{ this.state.cd_hr } </td>
        <td>{ this.state.cd_rbi } </td>
        <td>{ this.state.cd_h }</td>
        <td>{ this.state.cd_ab } </td>
        <td>{ this.state.cd_double } </td>
        <td>{ this.state.cd_triple } </td>
        <td>{ this.state.cd_sb } </td>
        <td>{ this.state.cd_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Mark Trumbo</td>
        <td>{ this.state.mt_avg } </td>
        <td>{ this.state.mt_hr } </td>
        <td>{ this.state.mt_rbi } </td>
        <td>{ this.state.mt_h }</td>
        <td>{ this.state.mt_ab } </td>
        <td>{ this.state.mt_double } </td>
        <td>{ this.state.mt_triple } </td>
        <td>{ this.state.mt_sb } </td>
        <td>{ this.state.mt_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Trey Mancini</td>
        <td>{ this.state.tm_avg } </td>
        <td>{ this.state.tm_hr } </td>
        <td>{ this.state.tm_rbi } </td>
        <td>{ this.state.tm_h }</td>
        <td>{ this.state.tm_ab } </td>
        <td>{ this.state.tm_double } </td>
        <td>{ this.state.tm_triple } </td>
        <td>{ this.state.tm_sb } </td>
        <td>{ this.state.tm_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Welington Castillo</td>
        <td>{ this.state.wc_avg } </td>
        <td>{ this.state.wc_hr } </td>
        <td>{ this.state.wc_rbi } </td>
        <td>{ this.state.wc_h }</td>
        <td>{ this.state.wc_ab } </td>
        <td>{ this.state.wc_double } </td>
        <td>{ this.state.wc_triple } </td>
        <td>{ this.state.wc_sb } </td>
        <td>{ this.state.wc_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Seth Smith</td>
        <td>{ this.state.ss_avg } </td>
        <td>{ this.state.ss_hr } </td>
        <td>{ this.state.ss_rbi } </td>
        <td>{ this.state.ss_h }</td>
        <td>{ this.state.ss_ab } </td>
        <td>{ this.state.ss_double } </td>
        <td>{ this.state.ss_triple } </td>
        <td>{ this.state.ss_sb } </td>
        <td>{ this.state.ss_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Joey Rickard</td>
        <td>{ this.state.jr_avg } </td>
        <td>{ this.state.jr_hr } </td>
        <td>{ this.state.jr_rbi } </td>
        <td>{ this.state.jr_h }</td>
        <td>{ this.state.jr_ab } </td>
        <td>{ this.state.jr_double } </td>
        <td>{ this.state.jr_triple } </td>
        <td>{ this.state.jr_sb } </td>
        <td>{ this.state.jr_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Caleb Joseph</td>
        <td>{ this.state.cj_avg } </td>
        <td>{ this.state.cj_hr } </td>
        <td>{ this.state.cj_rbi } </td>
        <td>{ this.state.cj_h }</td>
        <td>{ this.state.cj_ab } </td>
        <td>{ this.state.cj_double } </td>
        <td>{ this.state.cj_triple } </td>
        <td>{ this.state.cj_sb } </td>
        <td>{ this.state.cj_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Tim Beckham</td>
        <td>{ this.state.tb_avg } </td>
        <td>{ this.state.tb_hr } </td>
        <td>{ this.state.tb_rbi } </td>
        <td>{ this.state.tb_h }</td>
        <td>{ this.state.tb_ab } </td>
        <td>{ this.state.tb_double } </td>
        <td>{ this.state.tb_triple } </td>
        <td>{ this.state.tb_sb } </td>
        <td>{ this.state.tb_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Ruben Tejada</td>
        <td>{ this.state.rt_avg } </td>
        <td>{ this.state.rt_hr } </td>
        <td>{ this.state.rt_rbi } </td>
        <td>{ this.state.rt_h }</td>
        <td>{ this.state.rt_ab } </td>
        <td>{ this.state.rt_double } </td>
        <td>{ this.state.rt_triple } </td>
        <td>{ this.state.rt_sb } </td>
        <td>{ this.state.rt_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Craig Gentry</td>
        <td>{ this.state.cg_avg } </td>
        <td>{ this.state.cg_hr } </td>
        <td>{ this.state.cg_rbi } </td>
        <td>{ this.state.cg_h }</td>
        <td>{ this.state.cg_ab } </td>
        <td>{ this.state.cg_double } </td>
        <td>{ this.state.cg_triple } </td>
        <td>{ this.state.cg_sb } </td>
        <td>{ this.state.cg_r }</td>
      </tr>
      <tr>
        <td className="playerHead">Ryan Flaherty</td>
        <td>{ this.state.rf_avg } </td>
        <td>{ this.state.rf_hr } </td>
        <td>{ this.state.rf_rbi } </td>
        <td>{ this.state.rf_h }</td>
        <td>{ this.state.rf_ab } </td>
        <td>{ this.state.rf_double } </td>
        <td>{ this.state.rf_triple } </td>
        <td>{ this.state.rf_sb } </td>
        <td>{ this.state.rf_r }</td>
      </tr>
      <tr>
        <td className="playerHead">JJ Hardy</td>
        <td>{ this.state.jh_avg } </td>
        <td>{ this.state.jh_hr } </td>
        <td>{ this.state.jh_rbi } </td>
        <td>{ this.state.jh_h }</td>
        <td>{ this.state.jh_ab } </td>
        <td>{ this.state.jh_double } </td>
        <td>{ this.state.jh_triple } </td>
        <td>{ this.state.jh_sb } </td>
        <td>{ this.state.jh_r }</td>
      </tr>
    </tbody>
  </Table>

  <h1>Pitchers</h1>
				<Table responsive>
    <thead>
      <tr>
        <th className="playerHead">Player</th>
        <th>IP</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>ERA</th>
        <th>K</th>
        <th>Hits</th>
        <th>BB</th>        
        <th>WHIP</th>
        <th>Saves</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="playerHead">Dylan Bundy</td>
        <td>{ this.state.db_ip } </td>
        <td>{ this.state.db_w } </td>
        <td>{ this.state.db_l } </td>
        <td>{ this.state.db_era } </td>
        <td>{ this.state.db_k } </td>
        <td>{ this.state.db_hits }</td>
        <td>{ this.state.db_bb } </td>       
        <td>{ this.state.db_whip } </td>
        <td>{ this.state.db_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Jeremy Hellickson</td>
        <td>{ this.state.jh_ip } </td>
        <td>{ this.state.jh_w } </td>
        <td>{ this.state.jh_l } </td>
        <td>{ this.state.jh_era } </td>
        <td>{ this.state.jh_k } </td>
        <td>{ this.state.jh_hits }</td>
        <td>{ this.state.jh_bb } </td>       
        <td>{ this.state.jh_whip } </td>
        <td>{ this.state.jh_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Kevin Gausman</td>
        <td>{ this.state.kg_ip } </td>
        <td>{ this.state.kg_w } </td>
        <td>{ this.state.kg_l } </td>
        <td>{ this.state.kg_era } </td>
        <td>{ this.state.kg_k } </td>
        <td>{ this.state.kg_hits }</td>
        <td>{ this.state.kg_bb } </td>       
        <td>{ this.state.kg_whip } </td>
        <td>{ this.state.kg_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Ubaldo Jimenez</td>
        <td>{ this.state.uj_ip } </td>
        <td>{ this.state.uj_w } </td>
        <td>{ this.state.uj_l } </td>
        <td>{ this.state.uj_era } </td>
        <td>{ this.state.uj_k } </td>
        <td>{ this.state.uj_hits }</td>
        <td>{ this.state.uj_bb } </td>       
        <td>{ this.state.uj_whip } </td>
        <td>{ this.state.uj_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Wade Miley</td>
        <td>{ this.state.wm_ip } </td>
        <td>{ this.state.wm_w } </td>
        <td>{ this.state.wm_l } </td>
        <td>{ this.state.wm_era } </td>
        <td>{ this.state.wm_k } </td>
        <td>{ this.state.wm_hits }</td>
        <td>{ this.state.wm_bb } </td>       
        <td>{ this.state.wm_whip } </td>
        <td>{ this.state.wm_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Chris Tillman</td>
        <td>{ this.state.ct_ip } </td>
        <td>{ this.state.ct_w } </td>
        <td>{ this.state.ct_l } </td>
        <td>{ this.state.ct_era } </td>
        <td>{ this.state.ct_k } </td>
        <td>{ this.state.ct_hits }</td>
        <td>{ this.state.ct_bb } </td>       
        <td>{ this.state.ct_whip } </td>
        <td>{ this.state.ct_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Zach Britton</td>
        <td>{ this.state.zb_ip } </td>
        <td>{ this.state.zb_w } </td>
        <td>{ this.state.zb_l } </td>
        <td>{ this.state.zb_era } </td>
        <td>{ this.state.zb_k } </td>
        <td>{ this.state.zb_hits }</td>
        <td>{ this.state.zb_bb } </td>       
        <td>{ this.state.zb_whip } </td>
        <td>{ this.state.zb_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Brad Brach</td>
        <td>{ this.state.bb_ip } </td>
        <td>{ this.state.bb_w } </td>
        <td>{ this.state.bb_l } </td>
        <td>{ this.state.bb_era } </td>
        <td>{ this.state.bb_k } </td>
        <td>{ this.state.bb_hits }</td>
        <td>{ this.state.bb_bb } </td>       
        <td>{ this.state.bb_whip } </td>
        <td>{ this.state.bb_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Mychal Givens</td>
        <td>{ this.state.mg_ip } </td>
        <td>{ this.state.mg_w } </td>
        <td>{ this.state.mg_l } </td>
        <td>{ this.state.mg_era } </td>
        <td>{ this.state.mg_k } </td>
        <td>{ this.state.mg_hits }</td>
        <td>{ this.state.mg_bb } </td>       
        <td>{ this.state.mg_whip } </td>
        <td>{ this.state.mg_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Darren O'Day</td>
        <td>{ this.state.do_ip } </td>
        <td>{ this.state.do_w } </td>
        <td>{ this.state.do_l } </td>
        <td>{ this.state.do_era } </td>
        <td>{ this.state.do_k } </td>
        <td>{ this.state.do_hits }</td>
        <td>{ this.state.do_bb } </td>       
        <td>{ this.state.do_whip } </td>
        <td>{ this.state.do_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Richard Bleier</td>
        <td>{ this.state.rb_ip } </td>
        <td>{ this.state.rb_w } </td>
        <td>{ this.state.rb_l } </td>
        <td>{ this.state.rb_era } </td>
        <td>{ this.state.rb_k } </td>
        <td>{ this.state.rb_hits }</td>
        <td>{ this.state.rb_bb } </td>       
        <td>{ this.state.rb_whip } </td>
        <td>{ this.state.rb_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Miguel Castro</td>
        <td>{ this.state.mc_ip } </td>
        <td>{ this.state.mc_w } </td>
        <td>{ this.state.mc_l } </td>
        <td>{ this.state.mc_era } </td>
        <td>{ this.state.mc_k } </td>
        <td>{ this.state.mc_hits }</td>
        <td>{ this.state.mc_bb } </td>       
        <td>{ this.state.mc_whip } </td>
        <td>{ this.state.mc_saves }</td>
      </tr>
      <tr>
        <td className="playerHead">Donnie Hart</td>
        <td>{ this.state.dh_ip } </td>
        <td>{ this.state.dh_w } </td>
        <td>{ this.state.dh_l } </td>
        <td>{ this.state.dh_era } </td>
        <td>{ this.state.dh_k } </td>
        <td>{ this.state.dh_hits }</td>
        <td>{ this.state.dh_bb } </td>       
        <td>{ this.state.dh_whip } </td>
        <td>{ this.state.dh_saves }</td>
      </tr>
    </tbody>
    </Table>
    </Col>
			</div>
			)
	}
}

export default Home;