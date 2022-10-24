import classNames from "classnames";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import RouteEnum from "../constants/RouteEnum";
import logoApp from "./../assets/img/logo.svg";

const Header: React.FC = (): JSX.Element => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logoApp} width="50" height="50" className="mx-3" alt="logo-app" />
                    </Navbar.Brand>
                    <Navbar.Brand>Vernazza HomeBank</Navbar.Brand>
                    <Navbar.Toggle aria-controls="app-navbar-nav" />
                    <Navbar.Collapse id="app-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Nav.Link>
                                    <NavLink
                                        to={RouteEnum.Login}
                                        className={({ isActive }) => classNames(
                                            "text-decoration-none text-white",
                                            { "active": isActive }
                                        )}
                                    >
                                        Accedi
                                    </NavLink>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link>
                                    <NavLink
                                        to={RouteEnum.Movimenti}
                                        className={({ isActive }) => classNames(
                                            "text-decoration-none text-white",
                                            { "active": isActive }
                                        )}
                                    >
                                        Movimenti
                                    </NavLink>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link>
                                    <NavLink
                                        to={RouteEnum.AtmSimulato}
                                        className={({ isActive }) => classNames(
                                            "text-decoration-none text-white",
                                            { "active": isActive }
                                        )}
                                    >
                                        ATM Simulato
                                    </NavLink>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link>
                                    <NavLink
                                        to={RouteEnum.Gestione}
                                        className={({ isActive }) => classNames(
                                            "text-decoration-none text-white",
                                            { "active": isActive }
                                        )}
                                    >
                                        Profilo
                                    </NavLink>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
