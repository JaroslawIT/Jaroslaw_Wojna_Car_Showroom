import { Navbar, Container, Nav, NavDropdown, Form, Button, Image } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" style={{ backgroundColor: '#347B98', color: '#fff' }} sticky="top">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/image/image8.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavDropdown title="Kup" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/nowe" className="d-block">Nowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/uzywane" className="d-block">Używane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav.Link>
                                <Link to="/sprzedaj" className="d-block">Sprzedaj</Link>
                            </Nav.Link>
                            <NavDropdown title="Finansowanie" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/firma" className="d-block">Dla firm</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/prywatnie" className="d-block">Dla osób prywatnych</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav.Link>
                                <Link to="/kontakt" className="d-block">Kontakt</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/premium" className="d-block">O Nas</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/zaloguj" className="d-block">Zaloguj</Link>
                            </Nav.Link>                            
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Szukaj"
                                className="me-2"
                                aria-label="Szukaj"
                            />
                            <Button variant="dark">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
}
