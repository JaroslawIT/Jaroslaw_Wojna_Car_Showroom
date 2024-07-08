import Stopka from "./stopka";
import { BsArrowDown } from 'react-icons/bs';
const CarAnim = () => {
    return (
        <>
            <div style={{ padding: "40px" }}>
                <header style={{ textAlign: 'center', padding: '40px', background: 'linear-gradient(135deg, #1774b3, #5c2abf)', color: '#d0bdf2' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Sprawdź gammę Naszych Nowych Samochodów dostępnych od ręki!</h1>
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Znajdź swoje wymarzone auto spośród najnowszych modeli od najlepszych producentów.</p>
                    <div style={{ marginTop: '40px' }}>
                        <BsArrowDown style={{ fontSize: '3rem', animation: 'bounce 2s infinite', color: '#f2f2f2' }} />
                    </div>
                </header>
                <div className="d-flex justify-content-around">
                    <div className="car-card">
                        <img
                            src="/image/408.png"
                            alt="Samochód"
                            className="car-image"
                        />
                        <div className="car-details">
                            <h2>Peugeot 408</h2>
                            <p>Rok produkcji: 2024</p>

                        </div>
                    </div>
                    <div className="car-card">
                        <img
                            src="/image/c5.png"
                            alt="Samochód"
                            className="car-image"
                        />
                        <div className="car-details">
                            <h2>Citroen C5</h2>
                            <p>Rok produkcji: 2024</p>

                        </div>
                    </div>
                    <div className="car-card">
                        <img
                            src="/image/car2.png"
                            alt="Samochód"
                            className="car-image"
                        />
                        <div className="car-details">
                            <h2>Suzuki Vitarra</h2>
                            <p>Rok produkcji: 2024</p>

                        </div>
                    </div>
                    <div className="car-card">
                        <img
                            src="/image/tucson.png"
                            alt="Samochód"
                            className="car-image"
                        />
                        <div className="car-details">
                            <h2>Hyundai Tucson</h2>
                            <p>Rok produkcji: 2024</p>

                        </div>
                    </div>
                    <div className="car-card">
                        <img
                            src="/image/tcross.png"
                            alt="Samochód"
                            className="car-image"
                        />
                        <div className="car-details">
                            <h2>Volkswagen T-Cross</h2>
                            <p>Rok produkcji: 2024</p>

                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Stopka />
            </footer>
        </>
    );
};

export default CarAnim;