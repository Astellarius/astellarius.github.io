import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Y19m8d27 from './patches/y19m8d27';
import Y19m9d9 from './patches/y19m9d9';

class About extends React.Component {

    render() {
        return (

            <div className={this.props.color_mode}>
                <Container>
                    <Y19m9d9 />
                    <Y19m8d27 />
                </Container>
            </div>

        ); // About Return

    } // About Render

} // Class About


export default About;