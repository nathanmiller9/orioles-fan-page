import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import './News.css';


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

        <h1 className="newsHeading">Orioles articles <a href="http://www.masnsports.com/orioles/">from MASN writer Roch Kubatko</a></h1>
        {
        	this.state.roch.map(i => <a href={i.link}><p key={i.title}>{i.title}</p></a>) 
        }

        <h1 className="newsHeading">Orioles articles <a href="http://www.masnsports.com/orioles/">from MASN writer Steve Melewski</a></h1>
        {
          this.state.melewski.map(i => <a href={i.link}><p key={i.title}>{i.title}</p></a>) 
        }
        
      </div>
      )
  }

}

export default MASN;