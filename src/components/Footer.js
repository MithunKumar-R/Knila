import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
    return <div className="footer-base">
        <Row className="footer-head">
            Knila IT Solutions
        </Row>
        <Row>
            <Col md='1'></Col>
            <Col md='5' xs='12' className="footer-address mt-3 mb-3">
                KNILA IT Solutions India Pvt Ltd,
                Mohan Business Park, 3rd floor,
                opp. SNS Academy, Vellakinar Village, Coimbatore.
                Phone: 1800 419 3466
                Email:info@knila.com
            </Col>
            <Col md='6' xs='12' className="mt-3 mb-3">
                © 2022 Knila IT Solutions. All Rights Reserved
            </Col>
        </Row>
    </div>
}

export default Footer;