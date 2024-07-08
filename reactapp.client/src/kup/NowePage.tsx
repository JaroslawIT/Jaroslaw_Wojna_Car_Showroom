import React from 'react';
import CarList from '../components/konfigurator';
import CarAnim from '../components/anim3';
import { BsArrowDown } from 'react-icons/bs';
import Chat from '../components/chat';

const Naglowek: React.FC = () => {
    const arrows: number[] = Array.from({ length: 5 }, (_, index) => index + 1);
    return (
        <header style={{ textAlign: 'center', padding: '20px', fontFamily: 'Roboto, sans-serif' }}>
            <h1>Wybierz swój nowy samochód z naszej bogatej oferty!</h1>
            <p>Znajdź swoje wymarzone auto spośród najnowszych modeli od najlepszych producentów.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {arrows.map((_, index) => (
                    <div key={index} style={{ margin: '0 10px', animation: `fadeIn 0.5s ${index * 0.1}s forwards` }}>
                        <BsArrowDown style={{ fontSize: '2rem' }} />
                    </div>
                ))}
            </div>
        </header>
    );
};

export const Nowe: React.FC = () => {
    return (
        <div className="resp-container">
            <Naglowek />
            <CarList />
            <CarAnim />
            <Chat color="#ba9bf2" />
        </div>
    );
};

export default Nowe;
