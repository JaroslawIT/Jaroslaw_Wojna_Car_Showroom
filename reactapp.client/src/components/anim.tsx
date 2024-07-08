const Animowany = () => {
    return (
        <div className="resp-container">
            <div style={{ position: 'relative', width: '100%', maxWidth: '1750px', height: '600px' }}>
                <video
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    autoPlay
                    loop
                >
                    <source src="/videos/firma.mp4" type="video/mp4" />
                </video>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', color: 'white', textShadow: '0 0 10px black' }}>
                    <p style={{ fontSize: '1.5em', lineHeight: '1.5em' }}>Nasi Doradcy Bankowi<br /> pracują dzień i noc nad najlepszą ofertą dla Twojej firmy</p>
                </div>
            </div>
        </div>
    );
}

export default Animowany;
