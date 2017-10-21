import React, { Component } from 'react';
import axios from 'axios';
import './News.css';


class BSun extends Component {
  state = {
  	bsun: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get('https://localhost:3000/bsun').then(function (response) {
  		that.setState({bsun:response.data})
  	})
  }
  render () {
    return (
      <div className="bsun">

        <h1 className="newsHeading">Orioles articles on <a href="https://www.baltimoresun.com/sports/orioles/blog/">The Baltimore Sun Orioles Blog</a></h1>
        {
        	this.state.bsun.map(i => <a key={i.link} href={i.link}><p key={i.title}>{i.title}</p></a>) 
        }
        
      </div>
      )
  }

}

export default BSun;