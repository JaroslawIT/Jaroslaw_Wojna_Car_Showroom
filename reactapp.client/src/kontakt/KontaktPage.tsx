import { Container, Row, Col } from 'react-bootstrap';
import Kontakt2 from '../components/fkontakt';
import Animowany2 from '../components/anim2';
import Pytania from '../components/pytania';
import Chat from '../components/chat';

export const Kontakt = function () {
    return (
        <div className="resp-container">
        <Container>
            <Row>
                <Col md={6}>
                    <Kontakt2 />
                </Col>
                <Col md={6}>
                    <Pytania />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Animowany2 />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Chat color="#ba9bf2" />  
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default Kontakt;
