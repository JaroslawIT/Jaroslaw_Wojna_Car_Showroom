
import { Container, Row, Col, Card } from 'react-bootstrap';
import Stopka from '../components/stopka';
import Napis from '../components/textonas';
import Chat from '../components/chat';

export const Premium = () => {
    return (
        <>
            <div className="resp-container">
            <Container>
                <Row className="mt-1">
                    <Col className="text-center mt-5 mb-5">
                        <h2 style={{ fontSize: '2.5rem' }}>O nas</h2>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6}>
                        <Card className="zoom-on-hover">
                            <Card.Body>
                                <h3>Kim jesteśmy ?</h3>
                                <p>
                                    Zdobyliśmy pozycję rynkową, która klasyfikuje spółkę w ścisłej czołówce polskich firm dystrybuujących leasing i kredyty samochodowe największych instytucji finansowych.
                                    Jesteśmy częścią największego holdingu spółek e-commerce w Polsce – Wirtualna Polska Holding S.A. i wspieramy Polaków w tak ważnych decyzjach, jak zakup i finansowanie nowego samochodu.
                                    Z Naszej oferty skorzystało już ponad 30 000 Klientów.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="zoom-on-hover">
                            <Card.Body>
                                <h3>Dlaczego My?</h3>
                                <p>
                                    Jesteśmy ekspertem od finansowania samochodów. Nie tylko dopasujemy najlepszy kredyt czy leasing, ale też dopełnimy za Ciebie formalności. www.superauto.pl
                                    Współpracujemy z salonami i dealerami w całej Polsce, dzięki czemu możemy Ci zaproponować dużo korzystniejsze ceny na wybrane auta. www.superauto.pl
                                    Wymarzony samochód z finansowaniem - wygodniej, taniej, z gwarancją i bez żmudnych formalności. Czy może być coś lepszego?
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h2>Nasz zespół</h2>
                        <p>
                            Poznaj naszych pracowników i ekspertów w dziedzinie.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <Card className="zoom-on-hover">
                            <Card.Img variant="top" src="/image/ddd.png" />
                            <Card.Body>
                                <h4>Jarek Kowalski</h4>
                                <p>Sprzedawca samochodów Nowych</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="zoom-on-hover">
                            <Card.Img variant="top" src="/image/ccc.png" />
                            <Card.Body>
                                <h4>Marek Kowalski</h4>
                                <p>Sprzedawca samochodów poleasingowych</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="zoom-on-hover">
                            <Card.Img variant="top" src="/image/eee.png" />
                            <Card.Body>
                                <h4>Darek Kowalski</h4>
                                <p>Sprzedawca samochodów Używanych</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <div>
                            <Napis text="Skontaktuj się z Nami już dzisiaj!" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Chat color="#ba9bf2" />
                    </Col>
                </Row>
            </Container>
            <footer>
                <Stopka />
                </footer>
            </div>
        </>
    );
}

export default Premium;
