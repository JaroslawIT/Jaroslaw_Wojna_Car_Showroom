import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
/*import Image from 'react-bootstrap/Image';*/
//import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'react-bootstrap/Image';
//import Card from 'react-bootstrap/Card';
///*import Placeholder from 'react-bootstrap/Placeholder';*/
//import Button from 'react-bootstrap/Button';
import Karuzela from './components/carousel';
import Text from './components/text1';
import KartyMenu from './components/kartymenu';
import Stopka from './components/stopka';
import Chat from './components/chat';

function App() {
    return (
        <div className="resp-container">
        <Container fluid>

            <Row>
                <Col>
                    <div>
                        <Karuzela />
                    </div>
                    <div>
                        <Text />
                    </div>
                    <div>
                        <KartyMenu />
                    </div>
                    <div>
                        <Chat color="#ba9bf2" />
                    </div>
                    <footer>
                        <Stopka />
                    </footer>

                </Col>
            </Row>
            </Container>
        </div>
    );
}
export default App;