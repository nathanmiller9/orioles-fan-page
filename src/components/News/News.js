import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';


class News extends Component {
  state = {
  	result: []
  }
  componentWillMount(){
  	let that = this;
  	axios.get('http://localhost:3000/cChatResult2').then(function (response) {
  		that.setState({result:response.data})
  	}).catch(function (err) {
    console.log(err);
  });
  }
  render () {
    return (
      <div className="redditArticles">
      	<Col className xs={12} sm={12} md={12} lg={12}>
        <h1>Listing of the latest Cryptocurrency discussions on <a href="https://www.reddit.com/r/CryptoCurrency/">Reddit</a></h1>
        {
        	this.state.result.map(i => <ul><a href={i.link}><li key={i.title}>{i.title}</li></a><span key={i.link}>    Link: {i.link}</span></ul>) 
        }
        </Col>
      </div>
      )
  }

}

export default News;