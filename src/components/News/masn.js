import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';


class MASN extends Component {
  state = {
  	roch: [],
    melewski: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get('http://localhost:3001/roch').then(function (response) {
  		that.setState({roch:response.data})
  	})
    axios.get('http://localhost:3001/melewski').then(function (response) {
      that.setState({melewski:response.data})
    })
  }
  render () {
    return (
      <div className="masn">

        <h1>Orioles articles on <a href="http://www.masnsports.com/orioles/">from MASN writer Roch Kubatko</a></h1>
        {
        	this.state.roch.map(i => <ul><a href={i.link}><li key={i.title}>{i.title}</li></a><span key={i.link}>    Link: {i.link}</span></ul>) 
        }

        <h1>Orioles articles on <a href="http://www.masnsports.com/orioles/">from MASN writer Steve Melewski</a></h1>
        {
          this.state.melewski.map(i => <ul><a href={i.link}><li key={i.title}>{i.title}</li></a><span key={i.link}>    Link: {i.link}</span></ul>) 
        }
        
      </div>
      )
  }

}

export default MASN;