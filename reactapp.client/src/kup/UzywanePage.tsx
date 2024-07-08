import React, { useState, ChangeEvent } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chat from '../components/chat';

interface FilterState {
    search: string;
    brand: string;
    minPrice: string;
    maxPrice: string;
    fuelType: string;
    year: string;
}

interface Offer {
    brand: string;
    model: string;
    fuelType: string;
    year: number;
    price: number;
    image: string;
}

export const Uzywane: React.FC = () => {
    const [filters, setFilters] = useState<FilterState>({
        search: '',
        brand: 'all',
        minPrice: 'Wybierz',
        maxPrice: 'Wybierz',
        fuelType: 'all',
        year: 'all'
    });

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const offers: Offer[] = [
        { brand: "Audi", model: "Q2", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/qqq2.png" },
        { brand: "Audi", model: "Q5", fuelType: "Diesiel", year: 2018, price: 140000, image: "/image/q5.png" },
        { brand: "BMW", model: "M3", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/b3.png" },
        { brand: "BMW", model: "M5", fuelType: "Benzyna", year: 2018, price: 140000, image: "/image/mm5.png" },
        { brand: "Citroen", model: "c3", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/cc3.png" },
        { brand: "Citroen", model: "c5", fuelType: "Diesiel", year: 2018, price: 140000, image: "/image/c5.png" },
        { brand: "Dacia", model: "logan", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/mcv2.png" },
        { brand: "Dacia", model: "Sandero", fuelType: "Benzyna", year: 2018, price: 140000, image: "/image/sandero.png" },
        { brand: "Ford", model: "Ka", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/ka.png" },
        { brand: "Ford", model: "Focus", fuelType: "Benzyna", year: 2018, price: 140000, image: "/image/focus2.png" },
        { brand: "Hyundai", model: "Ix35", fuelType: "Hybryda", year: 2019, price: 120000, image: "/image/ix355.png" },
        { brand: "Hyundai", model: "Tucson", fuelType: "Hybryda", year: 2018, price: 140000, image: "/image/tucson.png" },
        { brand: "Kia", model: "Sportage", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/sportage2.png" },
        { brand: "Kia", model: "K5", fuelType: "Benzyna", year: 2018, price: 140000, image: "/image/k5.png" },
        { brand: "Nissan", model: "Juke", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/juke.png" },
        { brand: "Nissan", model: "Qashqai", fuelType: "Benzyna", year: 2018, price: 140000, image: "/image/qashqai.png" },
        { brand: "Opel", model: "Corsa", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/corsa.png" },
        { brand: "Opel", model: "Movano", fuelType: "Diesiel", year: 2018, price: 140000, image: "/image/movano.png" },
        { brand: "Peugeot", model: "408", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/408.png" },
        { brand: "Peugeot", model: "5008", fuelType: "Benzyna", year: 2018, price: 140000, image: "/image/50088.png" },
        { brand: "Skoda", model: "Fabia", fuelType: "Diesiel", year: 2019, price: 120000, image: "/image/fabia.png" },
        { brand: "Skoda", model: "Octavia", fuelType: "Benzyna", year: 2018, price: 140000, image: "/image/octavia.png" },
        { brand: "Wolksvagen", model: "T-Roc", fuelType: "Benzyna", year: 2019, price: 120000, image: "/image/troc.png" },
        { brand: "Wolksvagen", model: "T-Cross", fuelType: "Diesiel", year: 2018, price: 140000, image: "/image/tcross.png" },
    ];

    const [carImage, setCarImage] = useState<string>('');

    const handleMouseEnter = (image: string) => {
        setCarImage(image);
    };

    const filteredOffers = offers.filter(offer => {
        return (

            (offer.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
                offer.model.toLowerCase().includes(filters.search.toLowerCase())) &&
            (filters.brand === 'all' || offer.brand === filters.brand) &&
            (filters.minPrice === 'Wybierz' || offer.price >= parseInt(filters.minPrice, 10)) &&
            (filters.maxPrice === 'Wybierz' || offer.price <= parseInt(filters.maxPrice, 10)) &&
            (filters.fuelType === 'all' || offer.fuelType === filters.fuelType) &&
            (filters.year === 'all' || offer.year === parseInt(filters.year, 10))
        );
    });

    return (
        <>
            <div className="resp-container">
                <div style={{ position: 'relative', width: '100%', maxWidth: '1800px', height: '500px' }}>
                    <video
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        autoPlay
                        loop
                    >
                        <source src="/videos/city.mp4" type="video/mp4" />
                    </video>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', color: 'white', textShadow: '0 0 10px black' }}>
                        <p style={{ fontSize: '1.5em', lineHeight: '1.5em' }}>ZNAJDŹ COŚ DLA SIEBIE<br /> NASZA GAMMA SAMOCHODÓW UŻYWANYCH</p>
                    </div>
                </div>

            <Container fluid>
                <Form>
                    <Row>
                        <Col sm={5}>
                            <Form.Group className="mb-3 mt-5">
                                <Form.Label>Szukaj samochodu po nazwie</Form.Label>
                                <Form.Control type="text" name="search" value={filters.search} onChange={handleFilterChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <Table striped bordered hover style={{ backgroundColor: 'rgba(57, 163, 136, 0.5)' }}>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: '#39A388' }}>Marka pojazdu</th>
                            <th style={{ backgroundColor: '#39A388' }}>Model</th>
                            <th style={{ backgroundColor: '#39A388' }}>Rodzaj paliwa</th>
                            <th style={{ backgroundColor: '#39A388' }}>Rok produkcji</th>
                            <th style={{ backgroundColor: '#39A388' }}>Cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOffers.map((offer, index) => (
                            <tr key={index} onMouseEnter={() => handleMouseEnter(offer.image)}>
                                <td style={{ backgroundColor: '#d0bdf2' }}>{offer.brand}</td>
                                <td style={{ backgroundColor: '#d0bdf2' }}>{offer.model}</td>
                                <td style={{ backgroundColor: '#d0bdf2' }}>{offer.fuelType}</td>
                                <td style={{ backgroundColor: '#d0bdf2' }}>{offer.year}</td>
                                <td style={{ backgroundColor: '#d0bdf2' }}>{offer.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {carImage && (
                    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
                        <img src={carImage} alt="Car" style={{ width: 300, height: 'auto' }} />
                    </div>
                )}
                <Row>
                    <Col>
                        <Chat color="#ba9bf2" />
                    </Col>
                </Row>
                </Container>
            </div>
        </>
    );
};
