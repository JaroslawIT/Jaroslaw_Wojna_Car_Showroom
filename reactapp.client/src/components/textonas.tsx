import React from 'react';

interface NapisProps {
    text: string;
}

const Napis: React.FC<NapisProps> = ({ text }) => {
    return (
        <div className="marquee-container">
            <div className="marquee-text">{text}</div>
        </div>
    );
};

export default Napis;
