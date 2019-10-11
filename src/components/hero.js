import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo_black from '../images/logo_black.png';
import logo_white from '../images/logo_white.png';

import bebop from '../images/bebop.gif';


class Hero extends React.Component {

    render() {

        let logo;
        if( this.props.color_mode == 'light_mode' )
            logo = logo_black;
        else 
            logo = logo_white;

        return (

            <div className={this.props.color_mode}>
                <div className="intro">
                    <Container>

                        <Row>
                            <Col md xs="12">
                                <img
                                    src={logo}
                                    alt="Astellarius Logo"
                                />
                            </Col>
                            <Col className="my-auto" md xs="12">
                                <h1 className="intro_h1"> Hello, World! </h1>
                                <h5 className="intro_p"> My name is Andy Wang, and I do not want to live in a techno-dystopian, meaningless future. </h5>
                            </Col>
                        </Row>

                    </Container>
                </div> {/* intro */}

                <div className="status">
                    <Container>

                        <Row>
                            <Col className="my-auto" md xs="12" >
                                <h1 className="status_h1"> Status: Developing </h1>
                                <h5 className="status_p">
                                    The website is currently in development, 
                                    with projects and mobile support coming soon.
                                </h5>
                            </Col>
                            <Col md xs="12">
                                <img
                                    className="status_img greyscale"
                                    src={bebop}
                                    alt="Bebop"
                                />
                            </Col>
                        </Row>

                    </Container>
                </div> {/* status */}

                <div className="footer">
                    <Container>
                        <h3 className="footer-h3"> 
                            <a className={this.props.color_mode} href="https://github.com/astellarius">github</a> 
                            &nbsp; • &nbsp;
                            <a className={this.props.color_mode} href="https://www.instagram.com/astellarius/">instagram</a> 
                        </h3>
                    </Container>
                </div> {/* footer */}

            </div> // Hero Div
    
        ); // Hero Return
   } // Hero Render

} // Class Hero


export default Hero;