import { Container, Row, Col } from 'react-bootstrap';

const Pytania = () => {
    return (
        <Container fluid className="custom-background">
            <Row className="mt-5">
                <Col>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <h2 style={{ fontWeight: 'bold' }}>Najczęściej zadawane pytania</h2>
                    </div>
                    <div className="mt-5">
                        <details>
                            <summary style={{ fontWeight: 'bold' }}>CZY AUTO JEST ZAREJESTROWANE W POLSCE?</summary>
                            <p>Proste pytanie, które od razu powie wiele o samym sprzedawcy i aucie. Jeśli samochód nie ma dokumentów, spytaj o powód. Dowiedz się, jakie będą dodatkowe koszty związane z rejestracją i innymi opłatami. Ustal także, jaki będzie figurował sprzedawca auta na umowie kupna-sprzedaży. Miej pewność, że nie bierzesz udziału w tak zwanej sprzedaży na Niemca</p>
                        </details>
                    </div>
                    <div className="mt-5">
                        <details>
                            <summary style={{ fontWeight: 'bold' }}>JAK DŁUGO WŁAŚCICIEL JEŹDZIŁ TYM SAMOCHODEM?</summary>
                            <p>Dowiesz się, czy sprzedający rzeczywiście był użytkownikiem auta i nim jeździł, czy jest handlarzem. Jeśli okaże się, że rzeczywiście nim jeździł, ale krótko lub też przez długi czas nie pokonał większego dystansu, spytaj o powody tego stanu rzeczy.</p>
                        </details>
                    </div>
                    <div className="mt-5">
                        <details>
                            <summary style={{ fontWeight: 'bold' }}>ILU BYŁO POPRZEDNICH WŁAŚCICIELI AUTA?</summary>
                            <p>Im mniej, tym lepiej. Mniejsza liczba właścicieli oznacza większe szanse na poznanie przeszłości auta i sugeruje, że cieszyło się ono sympatią użytkowników. To nas prowadzi do kolejnego, najważniejszego pytania.</p>
                        </details>
                    </div>
                    <div className="mt-5 mb-5">
                        <details>
                            <summary style={{ fontWeight: 'bold' }}>JAKI JEST STAN TECHNICZNY AUTA? JAKA JEST JEGO HISTORIA?</summary>
                            <p>Postaraj się o bardziej konkretne pytania. Jakie były ostatnie naprawy wykonywane w aucie? Kiedy wymieniany był rozrząd, olej i filtry, świece czy też pasek klinowy?</p>
                        </details>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Pytania;
