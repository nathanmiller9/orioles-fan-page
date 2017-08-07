import React from 'react';
import { Col } from 'react-bootstrap';
import './Header.css';

class Header extends React.Component {
  render() {
		return (
      
      <div className="heading">
        <Col xs={3} sm={3} md={3} lg={3}>
          <Col className="sideSection" xs={12} sm={12} md={12} lg={12}>
          </Col>
          <Col className="centerSideSection" xs={12} sm={12} md={12} lg={12}>
            <img className="headerImage centerHeaderImage" src={require("./BaltimoreOriolesCap.PNG")} alt="Orioles cartoon logo"/>
          </Col>
          <Col className="sideSection" xs={12} sm={12} md={12} lg={12}>
          </Col>  
        </Col>

        <Col xs={6} sm={6} md={6} lg={6}>
          <Col className="middleTopSection" xs={12} sm={12} md={12} lg={12}>
            <img className="headerImage centerHeaderImage" src={require("./Baltimore-Orioles-Logo.gif")} alt="Orioles text logo with baseball diamond"/>
          </Col>
          <Col className="middleCenterSection" xs={12} sm={12} md={12} lg={12}>
            
            
          </Col>
          <Col className="middleLowSection" xs={12} sm={12} md={12} lg={12}>
            
            <p className="subHeader">The Best Resource for Baltimore Orioles News and Information</p>
          </Col>
          
          
        </Col>

        <Col xs={3} sm={3} md={3} lg={3}>
          <Col className="sideSection" xs={12} sm={12} md={12} lg={12}>
          </Col>
          <Col className="centerSideSection" xs={12} sm={12} md={12} lg={12}>
            <img className="headerImage rightHeaderImage" src={require("./AdamJones.png")} alt="Adam Jones swinging the bat"/>
          </Col>
          <Col className="sideSection" xs={12} sm={12} md={12} lg={12}>
          </Col>  
        </Col>
    
        
    
  </div>
    
 
  
		
				
);
  			
		
	}

}

export default Header;