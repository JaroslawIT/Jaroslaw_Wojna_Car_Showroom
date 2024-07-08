
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useState, ChangeEvent } from 'react';
import Stopka from '../components/stopka';
import Chat from '../components/chat';

interface Car {
    marka: string;
    model: string;
    paliwo: string;
    skrzynia: string;
}

export const Sprzedaj: React.FC = () => {
    const [selectedCar, setSelectedCar] = useState<Car>({ marka: '', model: '', paliwo: '', skrzynia: '' });
    const [randomPrice, setRandomPrice] = useState<string>('');

    const generateRandomPrice = () => {
        const { marka, model } = selectedCar;

        const prices: { [key: string]: { [key: string]: number } } = {
            'BMW': {
                'Serie 3': 150000,
                'Serie 5': 170000,
                'X5': 190000
            },
            'Audi': {
                'A4': 145000,
                'A6': 165000,
                'Q7': 185000
            },
            'Mercedes': {
                'Klasa C': 155000,
                'Klasa E': 175000,
                'GLC': 195000
            },
            'Kia': {
                'Rio': 155000,
                'Sportage': 175000,
                'K5': 195000
            },
            'Nissan': {
                'Juke': 155000,
                'Qashqai': 175000,
                '350Z': 195000
            },
            'Hyundai': {
                'i20': 155000,
                'ix35': 175000,
                'Tucson': 195000
            },
            'Opel': {
                'Zafira': 155000,
                'Astra': 175000,
                'Mokka': 195000
            },
            'Peugeot': {
                '206': 155000,
                '408': 175000,
                '2008': 195000
            }
        };

        if (prices[marka] && prices[marka][model]) {
            setRandomPrice(prices[marka][model].toString());
        } else {
            setRandomPrice('Brak danych');
        }
    };

    const brands = ['BMW', 'Audi', 'Mercedes', 'Kia', 'Nissan', 'Hyundai', 'Opel', 'Peugeot'];

    const models: { [key: string]: string[] } = {
        'BMW': ['Serie 3', 'Serie 5', 'X5'],
        'Audi': ['A4', 'A6', 'Q7'],
        'Mercedes': ['Klasa C', 'Klasa E', 'GLC'],
        'Kia': ['Rio', 'Sportage', 'K5'],
        'Nissan': ['Juke', 'Qashqai', '350Z'],
        'Hyundai': ['i20', 'ix35', 'Tucson'],
        'Opel': ['Zafira', 'Astra', 'Mokka'],
        'Peugeot': ['206', '408', '2008']
    };

    const fuels = ['Benzyna', 'Diesel'];

    const transmissions = ['Manualna', 'Automatyczna'];

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSelectedCar(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <div className="resp-container">
            <Container fluid>
                <Form>
                    <Row>
                        <Tabs
                            defaultActiveKey="danePodstawowe"
                            id="daneTowaru"
                            className="mb-3 justify-content-center"
                        >
                            <Tab eventKey="danePodstawowe" title="Sprzedaj swój samochód">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Marka</Form.Label>
                                            <Form.Select name="marka" onChange={handleSelectChange}>
                                                <option value="">Wybierz markę</option>
                                                {brands.map((brand, index) => (
                                                    <option key={index} value={brand}>{brand}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Model</Form.Label>
                                            <Form.Select name="model" onChange={handleSelectChange} disabled={!selectedCar.marka}>
                                                <option value="">Wybierz model</option>
                                                {selectedCar.marka && models[selectedCar.marka] && models[selectedCar.marka].map((model, index) => (
                                                    <option key={index} value={model}>{model}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Rodzaj paliwa</Form.Label>
                                            <Form.Select name="paliwo" onChange={handleSelectChange}>
                                                <option value="">Wybierz rodzaj paliwa</option>
                                                {fuels.map((fuel, index) => (
                                                    <option key={index} value={fuel}>{fuel}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Skrzynia biegów</Form.Label>
                                            <Form.Select name="skrzynia" onChange={handleSelectChange}>
                                                <option value="">Wybierz rodzaj skrzyni biegów</option>
                                                {transmissions.map((transmission, index) => (
                                                    <option key={index} value={transmission}>{transmission}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick={generateRandomPrice}>Oblicz</Button>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Row>
                </Form>
                {selectedCar.marka && selectedCar.model && selectedCar.paliwo && selectedCar.skrzynia && (
                    <div className="text-center mt-4">
                        <h4>Proponowana kwota za {selectedCar.marka} {selectedCar.model}:</h4>
                        <p>{randomPrice} zł</p>
                    </div>
                )}

                <section className="py-5 mt-5">
                    <Container>
                        <h2 className="text-center mb-4">Opinie klientów</h2>
                        <Row>
                            <Col md={4}>
                                <Card className="testimonial-card zoom-on-hover">
                                    <Card.Body>
                                        <Card.Text>
                                            Bardzo profesjonalna obsługa. Samochód w świetnym stanie, dokładnie taki, jak opisano.
                                        </Card.Text>
                                        <Card.Title>Jan Kowalski</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Klient zadowolony</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="testimonial-card zoom-on-hover">
                                    <Card.Body>
                                        <Card.Text>
                                            Polecam wszystkim, którzy szukają solidnego samochodu.
                                        </Card.Text>
                                        <Card.Title>Maria Nowak</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Klientka zadowolona</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="testimonial-card zoom-on-hover">
                                    <Card.Body>
                                        <Card.Text>
                                            Wspaniała oferta i bardzo konkurencyjne ceny. Na pewno wrócę do Was w przyszłości.
                                        </Card.Text>
                                        <Card.Title>Adam Wiśniewski</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Klient zadowolony</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <h2 className="text-center mb-5"></h2>
                        <Row>
                            <Col md={4}>
                                <Card className="testimonial-card zoom-on-hover">
                                    <Card.Body>
                                        <Card.Text>
                                            Bardzo profesjonalna obsługa. Samochód w świetnym stanie, dokładnie taki, jak opisano.
                                        </Card.Text>
                                        <Card.Title>Patryk Nowak</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Klient zadowolony</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="testimonial-card zoom-on-hover">
                                    <Card.Body>
                                        <Card.Text>
                                            Polecam wszystkim, którzy szukają solidnego samochodu.
                                        </Card.Text>
                                        <Card.Title>Maria Poremba</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Klientka zadowolona</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="testimonial-card zoom-on-hover">
                                    <Card.Body>
                                        <Card.Text>
                                            Wspaniała oferta i bardzo konkurencyjne ceny. Na pewno wrócę do Was w przyszłości.
                                        </Card.Text>
                                        <Card.Title>Wojciech Bomba</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Klient zadowolony</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Chat color="#ba9bf2" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Container>
            <footer>
                <Stopka />
                </footer>
            </div>
        </>
    );
};
