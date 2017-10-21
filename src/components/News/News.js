import React, { Component } from 'react';
import axios from 'axios';
import './News.css';


class News extends Component {
  state = {
  	cChat: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get('https://localhost:3000/cChatResult2').then(function (response) {
  		that.setState({cChat:response.data})
  	})
  }
  render () {
    return (
      <div className="news">
      	
        <h1 className="newsHeading">Orioles articles on <a href="https://www.camdenchat.com/">Camden Chat</a></h1>
        {
        	this.state.cChat.map(i => <a key={i.link} href={i.link}><p key={i.title}>{i.title}</p></a>) 
        }
        
      </div>
      )
  }

}

export default News;