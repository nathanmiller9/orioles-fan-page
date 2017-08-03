import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';


class News extends Component {
  state = {
  	cChat: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get('http://localhost:3001/cChatResult2').then(function (response) {
  		that.setState({cChat:response.data})
  	})
  }
  render () {
    return (
      <div className="redditArticles">
      	
        <h1>Orioles articles on <a href="https://www.camdenchat.com/">Camden Chat</a></h1>
        {
        	this.state.cChat.map(i => <ul><a href={i.link}><li key={i.title}>{i.title}</li></a><span key={i.link}>    Link: {i.link}</span></ul>) 
        }
        
      </div>
      )
  }

}

export default News;