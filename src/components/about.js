import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class About extends React.Component {

    render() {

        return (

            <div className="main">
                <Container>

                    <Row>
                        <h1>
                            I am Andy Wang of NanBread, and I love helping others problem solve like philosophers and live like programmers. 
                            <br/><br/>
                            As self taught Developer, Designer and Thinker, I spent the majority of my school-years helping organizations off the ground, 
                            from Student Lead Non-Profits to International Conferences and Aerospace Clubs. My greatest accomplishments are the communities
                            I have fostered and belong to, and I dream of Stars and Galaxies far, far away. 
                            <br/><br/>
                            If you get me, let's change the world together! 
                        </h1>
                    </Row>

                </Container>
            </div>

        ); // About Return

    } // About Render

} // Class About


export default About;