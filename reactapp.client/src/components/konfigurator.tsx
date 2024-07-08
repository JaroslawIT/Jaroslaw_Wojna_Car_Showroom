import { useState } from 'react';


interface Car {
    id: number;
    model: string;
    year: number;
    mileage: string;
    imageUrl: string;
}

interface OfferProps {
    basePrice: number;
    car: Car;
}

const Offer: React.FC<OfferProps> = ({ basePrice, car }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleOptionChange = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const getTotalPrice = () => {
        const totalOptionsPrice = selectedOptions.reduce((acc, option) => {
            switch (option) {
                case 'skora':
                    return acc + 5000;
                case 'Navi':
                    return acc + 9000;
                case 'Zimowe':
                    return acc + 3000;
                case 'Klimatyzacja':
                    return acc + 2000;
                default:
                    return acc;
            }
        }, 0);
        return basePrice + totalOptionsPrice;
    };

    return (
        <div className="offer">
            <h2>Nasza oferta:</h2>
            <ul>
                <li>Podstawowa cena: {basePrice} zł</li>
                <li>
                    Wybrane opcje:
                    <ul>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes('skora')}
                                    onChange={() => handleOptionChange('skora')}
                                />
                                Skórzana tapicerka (+5000 zł)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes('Navi')}
                                    onChange={() => handleOptionChange('Navi')}
                                />
                                Pakiet Nawigacyjny (+9000 zł)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes('Zimowe')}
                                    onChange={() => handleOptionChange('Zimowe')}
                                />
                                Dodatkowe opony zimowe (+3000 zł)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes('Klimatyzacja')}
                                    onChange={() => handleOptionChange('Klimatyzacja')}
                                />
                                Klimatyzacja (+2000 zł)
                            </label>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Całkowita cena: {getTotalPrice()} zł</strong>
                </li>
                <div className="car-card">
                    <img
                        src={car.imageUrl}
                        alt="Samochód"
                        className="car-image"
                    />
                    <div className="car-details">
                        <h2>{car.model}</h2>
                        <p>Rok produkcji: {car.year}</p>
                        <p>Przebieg: {car.mileage}</p>
                    </div>
                </div>
            </ul>
        </div>
    );
};

const CarList = () => {
    const basePrice = 100000;
    const cars = [
        {
            id: 1,
            model: 'Peugeot 408',
            year: 2024,
            mileage: '10500km',
            imageUrl: '/image/408.png'
        },
        {
            id: 2,
            model: 'Nissan Qashqai',
            year: 2024,
            mileage: '15000km',
            imageUrl: '/image/qashqai.png'
        },
        {
            id: 3,
            model: 'VW T-cross',
            year: 2024,
            mileage: '20000km',
            imageUrl: '/image/tcross.png'
        }
    ];

    return (
        <div className="car-list">
            <div className="offers-container">
                {cars.map(car => (
                    <Offer key={car.id} basePrice={basePrice} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarList;
