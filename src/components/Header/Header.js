import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Header.css';

class Header extends React.Component {
  render() {
		return (
      
      <Jumbotron className="heading">
    <h1>The Baltimore Orioles</h1>
    <p>Your best resource for all information relevant to the Baltimore Orioles.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
    
 
  
		
				
);
  			
		
	}

}

export default Header;