import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'react-bootstrap/Image';
import { Outlet } from 'react-router-dom';



const Karuzela = () => {
    return (
        <div className="resp-container">
            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage src="/image/carousel1.png"
                            style={{ width: '100vw', height: 'auto' }}
                            fluid />
                        <Carousel.Caption>
                            <h3>Znajdź najbliższy salon samochodowy</h3>
                            <p>Posiadamy 33 autoryzowane salony oraz serwisy samochodowe znajdujące sie w 8 miastach w Polsce.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src="/image/carousel4.png" />
                        <Carousel.Caption>
                            <h3>Kompleksowa opieka</h3>
                            <p>Nasza misja to nie tylko sprzedaż samochodów, to zbudowanie trwałych relacji opartych na zaufaniu, satysfakcji i profesjonalizmie. Oferujemy kompleksowe doradztwo, profesjonalną obslugę posprzedażową oraz szeroki wachlarz dodatkowych usług.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src="/image/carousel2.png" />
                        <Carousel.Caption>
                            <h3>Znajdź najbliższy serwis samochodowy</h3>
                            <p>Posiadamy 33 autoryzowane salony oraz serwisy samochodowe znajdujące sie w 8 miastach w Polsce.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src="/image/carousel3.png" />
                        <Carousel.Caption>
                            <h3>Nasze marki</h3>
                            <p>
                                Do Twojej dyspozycji udostepniamy 33 salony w całej Polsce. Zapewniamy profesjonalną opiekę i doradztwo na najwyższym poziomie.
                            </p>
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