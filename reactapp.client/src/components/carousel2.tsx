import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'react-bootstrap/Image';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Karuzela = () => {
    return (
        <div className="resp-container">
            <Container fluid className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage src="/image/car2.png" className="logos1" />
                        <Carousel.Caption>
                            <div className="text-right text-top">
                                <Link to="/kontakt" className="d-block">
                                    <Button variant="secondary">Kontakt</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src="/image/car4.png" className="logos1" />
                        <Carousel.Caption>
                            <div className="text-right text-top">
                                <Link to="/kontakt" className="d-block">
                                    <Button variant="secondary">Kontakt</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src="/image/car3.png" className="logos1" />
                        <Carousel.Caption>
                            <div className="text-right text-top">
                                <Link to="/kontakt" className="d-block">
                                    <Button variant="secondary">Kontakt</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>

                    </Carousel.Item>

                </Carousel>
            </Container>
            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>


        </div>
    );
};

export default Karuzela;