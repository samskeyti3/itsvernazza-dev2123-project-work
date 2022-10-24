import React from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../../constants/RouteEnum";
import { useAppDispatch } from "../../../store/hooks";
import logoApp from "./../../assets/img/logo.svg";

const FormInserimento = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const formSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        //TODO
        //dispatch(userLogin(new UserLoginViewModel()));
        navigate(RouteEnum.Movimenti);
    };


    return (
        <Container className="px-5">
            <Row>
                <Col>
                    <Card className="w-50 mx-auto my-5" bg="light">
                        <Card.Body>
                            <Card.Title className="text-center">

                                <img src={logoApp} width="150" height="50" className="mb-3" alt="logo-app" />
                                <div className="clearfix"></div>
                                <h3 className="mb-3">Effettua l'accesso</h3>

                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form onSubmit={formSubmit}>
                                            <FloatingLabel
                                                controlId="formUserLoginEmail"
                                                label="Username"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" placeholder="name@example.com" />
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="formUserLoginPassword"
                                                label="Password"
                                                className="mb-3"
                                            >
                                                <Form.Control type="password" placeholder="Password" />
                                            </FloatingLabel>

                                            <Row>
                                                <Col className="text-center mt-3">
                                                    <Button variant="primary" type="submit">
                                                        Accedi
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FormInserimento;
