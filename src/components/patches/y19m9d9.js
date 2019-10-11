import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SFU from '../../images/y19m9d9.jpg';

function y19m9d9() {
    return (
        <div className="patch">

            <div className="patch_headers">
                <h1> Who Am I </h1>
                <h4> Patch 19.9.9 </h4>
            </div> {/* Patch Headers */}

            <img 
                src={SFU} 
                className="patch_image greyscale"
                alt="SFU Vancouver Campus"
            /> {/* Patch Image */}

            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h5 className="patch_p"> 
                        About me questions are always the hardest. "So who are you? So tell me about yourself?".
                        The usual responses start with me, my, and I. But most people are shaped mainly by the 
                        people, places, and events that happen around them. It is not as though we invented coding, computers,
                        philosophy, or the sports and hobbies we do. 
                    <br/><br/>
                        Surely, instead, a large portion of our answers should be about
                        those who influence us. Our motivators and our heros, instead of just vaguely stating, "I am interested in philosophy".
                    <br/><br/>
                        - Andy W
                    </h5>
                </Col>
            </Row> {/* Patch Text */}

        </div> // patch
    ); // return
} // y19m9d9

export default y19m9d9;