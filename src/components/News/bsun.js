import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';


class BSun extends Component {
  state = {
  	bsun: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get('http://localhost:3001/bsun').then(function (response) {
  		that.setState({bsun:response.data})
  	})
  }
  render () {
    return (
      <div className="bsun">

        <h1>Orioles articles on <a href="http://www.baltimoresun.com/sports/orioles/blog/">The Baltimore Sun Orioles Blog</a></h1>
        {
        	this.state.bsun.map(i => <ul><a href={i.link}><li key={i.title}>{i.title}</li></a><span key={i.link}>    Link: {i.link}</span></ul>) 
        }
        
      </div>
      )
  }

}

export default BSun;