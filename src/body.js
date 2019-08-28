import React from 'react';

import './styles/body.scss'

import logo from './images/logosm.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Hero from './components/hero';
import About from './components/about';
import Patch from './components/patch';

import Clock from './components/nav/clock';

class Body extends React.Component {

    constructor(props) {    
        super(props); // Required Always

        this.state = { 
            activeKey: 0
        }; // constructor state

        this.handle_navOnSelect = this.handle_navOnSelect.bind(this);
        this.display_activeKeyComponent = this.display_activeKeyComponent.bind(this);

    } // Body constructor

    handle_navOnSelect(selectedKey, event) {
        this.setState({ activeKey: selectedKey });
    } // handle nav on select

    display_activeKeyComponent() {
        if ( this.state.activeKey == 0)
            return <Hero />;
        else if ( this.state.activeKey == 1)
            return <About />;
        else if ( this.state.activeKey == 2)
            return <Patch />;
        else
            return <Hero />;
    } // display active key's component

    render() {

        return (
            
            <div className="body">

                <Navbar collapseOnSelect expand="lg" fixed="top" className="navigation">
                    <Container>

                        <Navbar.Brand href="/home">
                            <img
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand> {/* Logo */}

                        <Navbar.Toggle />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto" activeKey={this.state.activeKey} onSelect={this.handle_navOnSelect}>
                                <Nav.Link href="#about" eventKey={0}> Home </Nav.Link>                                
                                <Nav.Link href="#about" eventKey={1}> About </Nav.Link>
                                <Nav.Link href="#patch" eventKey={2}> Patch Notes </Nav.Link>
                                {/* <Nav.Link href="#project" eventKey={3}> Projects </Nav.Link> */}
                                <Nav.Link> <Clock /> </Nav.Link>
                            </Nav> 
                        </Navbar.Collapse>

                    </Container>
                </Navbar>

                {this.display_activeKeyComponent()}

            </div>

        ); // Body Return 
    } // Body Render 

} // Class Body 


export default Body;