import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ymd from '../../images/ymd.jpg';

function ymd() {
    return (
        <div className="patch">

            <div className="patch_headers">
                <h1> Title </h1>
                <h4> Patch 19.m.d </h4>
            </div> {/* Patch Headers */}

            <img 
                src={ymd} 
                className="patch_image greyscale"
                alt=""
            /> {/* Patch Image */}

            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h5 className="patch_p"> 
                        Text
                    <br/><br/>
                        Text
                    <br/><br/>
                        Text
                    <br/><br/>
                        - Andy W
                    </h5>
                </Col>
            </Row> {/* Patch Text */}

        </div> // patch
    ); // return
} // ymd

export default ymd;