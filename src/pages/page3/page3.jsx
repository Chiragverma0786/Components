import React from 'react';
import './page3.css'
import CardSlider from '../../components/cards/cardslider';

const Page3 = () => {
    const cards = [
        <div>Card 1</div>,
        <div>Card 2</div>,
        <div>Card 3</div>,
        <div>Card 4</div>,
        <div>Card 5</div>,
    ];

    return (
        <div className='page3'>
            <div className="slider">
            <h1>Vertical Card Slider</h1>
            <CardSlider cards={cards} />
            </div>
        </div>
    );
};

export default Page3;