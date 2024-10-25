// CardSlider.js
import React, { useEffect, useState } from 'react';
import './cardslider.css'; // For custom styles

const CardSlider = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatic scrolling every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cards.length / 3));
        }, 2000);
        return () => clearInterval(interval);
    }, [cards.length]);

    // Handle click on slider points
    const handlePointClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="maincontainer">
        <div className="card-slider">
            <div className="card-slider-wrapper" style={{ transform: `translateX(-${currentIndex * (100 / 1)}%)` }}>
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        {card}
                    </div>
                ))}
            </div>
            <div className="slider-points">
                {Array.from({ length: Math.ceil(cards.length / 1) }, (_, index) => (
                    <div
                        key={index}
                        className={`slider-point ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handlePointClick(index)}
                    />
                ))}
            </div>
        </div>
        </div>
    );
};

export default CardSlider;
