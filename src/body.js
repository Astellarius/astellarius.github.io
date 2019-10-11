import React from 'react';

import './styles/main.scss';

import logo_black from './images/logo_black.png';
import logo_white from './images/logo_white.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Hero from './components/hero';
import About from './components/about';
import Patch from './components/patch';
import Projects from './components/projects';

import Clock from './components/nav/clock';

class Body extends React.Component {

    constructor(props) {    
        super(props); // Required Always

        this.state = { 
            activeKey: 0,
            color_mode: 'light_mode'
        }; // constructor state

        this.handle_navOnSelect = this.handle_navOnSelect.bind(this);
        this.display_activeKeyComponent = this.display_activeKeyComponent.bind(this);
        this.toggle_color_mode = this.toggle_color_mode.bind(this);

    } // Body constructor

    handle_navOnSelect(selectedKey, event) {
        this.setState({ activeKey: selectedKey });
    } // handle nav on select

    display_activeKeyComponent() {
        if ( this.state.activeKey == 0)
            return <Hero color_mode={this.state.color_mode} />;
        else if ( this.state.activeKey == 1 )
            return <About color_mode={this.state.color_mode} />;
        else if ( this.state.activeKey == 2 )
            return <Patch color_mode={this.state.color_mode} />;
        else if ( this.state.activeKey == 3 )
            return <Projects color_mode={this.state.color_mode} />;
    } // display active key's component

    toggle_color_mode() {
        if( this.state.color_mode == 'light_mode' )
            this.setState({ color_mode: 'dark_mode' })
        else 
            this.setState({ color_mode: 'light_mode' })
    }

    render() {

        let logo;
        if( this.state.color_mode == 'light_mode' )
            logo = logo_black;
        else 
            logo = logo_white;

        return (
            
            <div > {/* Color mode */}

                <Navbar collapseOnSelect expand="lg" fixed="top" className={this.state.color_mode}>
                    <Container className="body_container">

                        <Navbar.Brand onClick={this.toggle_color_mode}>
                            <img
                                src={logo}
                                className="nav_logo d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand> {/* Logo */}

                        <Clock />

                        <Navbar.Toggle className={this.state.color_mode} />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto navbar-nav" activeKey={this.state.activeKey} onSelect={this.handle_navOnSelect}>
                                <Nav.Link href="#hero" eventKey={0} className={this.state.color_mode}> Home </Nav.Link>                                
                                <Nav.Link href="#about" eventKey={1} className={this.state.color_mode}> About </Nav.Link>
                                <Nav.Link href="#patch" eventKey={2} className={this.state.color_mode}> Patch Notes </Nav.Link>
                                <Nav.Link href="#project" eventKey={3} className={this.state.color_mode}> Projects </Nav.Link>
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