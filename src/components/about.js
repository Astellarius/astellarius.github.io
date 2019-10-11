import React from 'react';

import Container from 'react-bootstrap/Container';

class About extends React.Component {

    render() {

        return (

            <div className={this.props.color_mode}>
                <Container className="about">
                    <h1>
                        Delusion, But her feet are sensitive; to the ground She never draws close, but walks on the heads of men.
                        <br/>
                        - Homer
                        <br/><br/>
                        As a self taught Developer, Designer and Creator, I spend my time reading, talking and listening, 
                        then creating and organizing projects or events for the communities I belong to. 
                        <br/><br/>
                        My hero's are Elon Musk and Socrates, Elon for his inspirations of human capabilities to transform the world for the better
                        in our pre-techno-dystopian environment, and Socrates for living and dying in pursuit of wisdom. 
                        <br/><br/>
                        If you get me, let's change the world together! 
                    </h1>
                </Container>
            </div>

        ); // About Return

    } // About Render

} // Class About


export default About;