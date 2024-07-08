import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const KartyMenu = () => {
    return (
        <div className="resp-container">
        <Container fluid>
            <div style={{ padding: "40px" }}>
                <div className="d-flex justify-content-around">
                    <div className="car-card">
                        <Card style={{ width: '19rem', height: '22rem', border: 'none', backgroundColor: 'transparent' }}>
                            <Card.Img variant="top" src="/image/ht2.png" />
                            <Card.Body>
                                <Card.Title>Hyundai Tucson 2023</Card.Title>
                                <Card.Text>
                                    Hybryda, 15000km, Rok produkcji 2023, 4x4,
                                </Card.Text>
                                <div className="text-right text-top">
                                    <Link to="/kontakt" className="d-block">
                                        <Button variant="secondary">Kontakt</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="car-card">
                        <Card style={{ width: '19rem', height: '22rem', border: 'none', backgroundColor: 'transparent' }}>
                            <Card.Img variant="top" src="/image/kiaa.png" />
                            <Card.Body>
                                <Card.Title>Kia K5</Card.Title>
                                <Card.Text>
                                    Benzyna, 700km, Rok produkcji 2022, 4x4,
                                </Card.Text>
                                <div className="text-right text-top">
                                    <Link to="/kontakt" className="d-block">
                                        <Button variant="secondary">Kontakt</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="car-card">
                        <Card style={{ width: '19rem', height: '22rem', border: 'none', backgroundColor: 'transparent' }}>
                            <Card.Img variant="top" src="/image/camry.png" />
                            <Card.Body>
                                <Card.Title>Toyota Camry</Card.Title>
                                <Card.Text>
                                    Hybryda, 200km, Rok produkcji 2021, 4x4
                                </Card.Text>
                                <div className="text-right text-top">
                                    <Link to="/kontakt" className="d-block">
                                        <Button variant="secondary">Kontakt</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            </Container>
        </div>


    );
};
export default KartyMenu;