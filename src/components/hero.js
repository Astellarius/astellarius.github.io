import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo from '../images/logosm.png';
import bebop from '../images/bebop.gif';


class Hero extends React.Component {
    
    render() {
        return (

            <div>
                <div className="hero">
                    <Container>

                        <Row>
                            <Col>
                                <img
                                    src={logo}
                                    width="100%"
                                    alt="React Bootstrap logo"
                                />
                            </Col>
                            <Col className="my-auto">
                                <h1> Hello, World! </h1>
                                <p> My name is Andy Wang, and I like to help people. </p>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="about">
                    <Container>

                        <Row>
                            <Col className="my-auto">
                                <h1> In Development </h1>
                                <p>
                                    The website is currently in development, 
                                    with projects and mobile support coming soon.
                                </p>
                            </Col>
                            <Col>
                                <img
                                    src={bebop}
                                    width="100%"
                                    alt="Bebop"
                                />
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="footer">
                    <Container>
                        <h3 className="footer-h3"> 
                            <a href="https://github.com/Astellarius">github</a> 
                            &nbsp; • &nbsp;
                            <a href="https://www.instagram.com/astellarius/">instagram</a> 
                        </h3>
                    </Container>
                </div>
            </div> // Hero Div
        
        ); // Hero Return
   } // Hero Render

} // Class Hero


export default Hero;