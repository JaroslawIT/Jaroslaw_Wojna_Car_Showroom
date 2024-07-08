import LoanCalculator from '../components/kalkulator';
import Stopka from '../components/stopka';
import Karuzela2 from '../components/carousel2';
import Animowany2 from '../components/animpriv';
import { Row, Col } from 'react-bootstrap';
import Chat from '../components/chat';
export const Prywatnie = function () {
    return (
        
            <div className="main-container">
                <div className="top-container">
                    <div className="small-container">
                        <LoanCalculator />
                    </div>
                    <div className="small-container">
                        <Karuzela2 />
                    </div>
                </div>
                <div className="bottom-container"><Animowany2 /></div>
                <Row>
                    <Col>
                    <Chat color="#ba9bf2" />
                    </Col>
                </Row>
                <footer>
                    <Stopka />
                </footer>
            </div>
        
    )
}
export default Prywatnie;