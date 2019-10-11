import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SFU from '../../images/y19m8d27.jpg';

function y19m8d27() {
    return (
        <div className="patch">

            <div className="patch_headers">
                <h1> Astellarius Website </h1>
                <h4> Patch 19.8.27 </h4>
            </div> {/* Patch Headers */}

            <img 
                src={SFU} 
                className="patch_image greyscale"
                alt="SFU Vancouver Campus"
            /> {/* Patch Image */}

            <Row>
                <Col xs sm md={{ span: 8, offset: 2 }}>
                    <h5 className="patch_p"> 
                        This will be the first published patch of the new React Astellarius Website, 
                        although it won't be named Patch 1.0.0. Instead, the patch numbers come from yy/mm/dd.
                        This should help for easy understanding of the patch numbering system. 
                    <br/><br/>
                        So why does this website exist? Because I need to get shit done!
                        As my personal profile, Astellarius will keep me focused on completing goals,
                        achieving functional and beautiful products, and having fun creating things.
                        Patch notes are here for me to journal progress, as well as providing an 
                        opportunity to share and teach others (sometimes) useful things. 
                    <br/><br/>
                        Hopefully things will be published soon, and more patch notes will be coming out 
                        with projects to show! 
                    <br/><br/>
                        - Andy W
                    </h5>
                </Col>
            </Row> {/* Patch Text */}


        </div> // patch
    ); // return
} // y19m8d27

export default y19m8d27;