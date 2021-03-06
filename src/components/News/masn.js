import React, { Component } from 'react';
import axios from 'axios';
import './News.css';


class MASN extends Component {
  state = {
  	roch: [],
    melewski: []
  }
  componentDidMount(){
  	let that = this;
  	axios.get('/roch').then(function (response) {
  		that.setState({roch:response.data})
  	})
    axios.get('/melewski').then(function (response) {
      that.setState({melewski:response.data})
    })
  }
  render () {
    return (
      <div className="masn">

        <h1 className="newsHeading">Orioles articles <a href="http://www.masnsports.com/orioles/">from MASN writer Roch Kubatko</a></h1>
        {
        	this.state.roch.map(i => <a key={i.link} href={i.link}><p key={i.title}>{i.title}</p></a>) 
        }

        <h1 className="newsHeading">Orioles articles <a href="http://www.masnsports.com/orioles/">from MASN writer Steve Melewski</a></h1>
        {
          this.state.melewski.map(i => <a key={i.link} href={i.link}><p key={i.title}>{i.title}</p></a>) 
        }
        
      </div>
      )
  }

}

export default MASN;