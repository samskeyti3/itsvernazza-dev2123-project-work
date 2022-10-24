import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Template: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Container fluid>
                    <Row>
                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default Template;
