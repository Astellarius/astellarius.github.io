import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SFU from '../../images/sfusm.jpg';

function y19m8d27() {
    return (
           
        <div className="">
            <div className="patch_headers">
                <h1> Astellarius Website </h1>
                <h4> Patch 19.8.27 </h4>
            </div>

            <img src={SFU} className="patch_img"/>

            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h4 className="patch_para"> 
                        This will be the first published patch of the new React Astellarius Website, 
                        although it won't be named Patch 1.0.0. Instead, the patch numbers come from yy/mm/dd.
                        This should help for easy understanding of the patch numbering system. 
                    </h4>

                    <h4 className="patch_para"> 
                        So why does this website exist? Because I need to get shit done!
                        As my personal profile, Astellarius will keep me focused on completing goals,
                        achieving functional and beautiful products, and having fun creating things.
                        Patch notes are here for me to journal progress, as well as providing an 
                        opportunity to share and teach others (sometimes) useful things. 
                    </h4>

                    <h4 className="patch_para">
                        Hopefully things will be published soon, and more patch notes will be coming out 
                        with projects to show! 
                        <br/><br/>
                        - Andy W
                    </h4>
                </Col>
            </Row>
        </div>

    );
}

export default y19m8d27;