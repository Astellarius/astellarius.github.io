import React from 'react';

import '../styles/patch.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Y19m8d27 from './patches/y19m8d27';

class About extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Y19m8d27 />
                    </Row>
                </Container>
            </div>
        ); // About Return

    } // About Render

} // Class About


export default About;