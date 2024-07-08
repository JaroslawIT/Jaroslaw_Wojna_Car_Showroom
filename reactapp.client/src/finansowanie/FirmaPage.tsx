import LoanCalculator from '../components/kalkulator';
import Stopka from '../components/stopka';
import Karuzela2 from '../components/carousel2';
import Animowany from '../components/anim';
import { Row, Col } from 'react-bootstrap';
import Chat from '../components/chat';



export const Firma = function () {
    return (
        
        <div className="resp-container">
            <div className="main-container">
                <div className="top-container">
                    <div className="small-container">
                        <LoanCalculator />
                    </div>
                    <div className="small-container">
                        <Karuzela2 />
                    </div>
                    
                </div>
                <div className="bottom-container"><Animowany /></div>
                <Row>
                    <Col>
                    <Chat color="#ba9bf2" />
                    </Col>
                </Row>
                <footer>
                    <Stopka />
                </footer>
            </div>
            </div>
        
    )
}
export default Firma;