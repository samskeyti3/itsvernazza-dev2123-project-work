import React from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../../constants/RouteEnum";
import { useAppDispatch } from "../../../store/hooks";

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
                                <div className="clearfix"></div>
                                <h3 className="mb-3">Inserisci Bonifico</h3>

                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form onSubmit={formSubmit}>
                                            <FloatingLabel
                                                controlId="formInserimentoDenominazione"
                                                label="Beneficiario"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="denominazione beneficiario" />
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="formInserimentoIBAN"
                                                label="IBAN"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="IBAN Beneficiario" />
                                            </FloatingLabel>

                                            <Row>
                                                <Col className="text-center mt-3">
                                                    <Button variant="primary" type="submit">
                                                        Inserisci
                                                    </Button>
                                                </Col>
                                                <Col className="text-center mt-3">
                                                    <Button variant="secondary" type="submit">
                                                        Annulla
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
