import React from 'react';

import Container from 'react-bootstrap/Container';

class Projects extends React.Component {

    render() {

        return (

            <div className={this.props.color_mode} >
                <Container className="projects">
                    <h1> Nanbread </h1>
                    <h1> Software Systems Student Society </h1>
                    <h1> Model United Nations </h1>                    
                    <h1> SFU Aerospace </h1>
                    <br/>
                    <h3> Team Guardian </h3>
                    <h3> Team Phantom </h3>
                    <h3> Badminton </h3>
                    <h3> Guitar </h3>
                </Container>
            </div>

        ); // Projects Return

    } // Projects Render

} // Class Projects


export default Projects;