import React from 'react'
import './pricing.css'
import Button from '/src/components/button/button'
import tilt from '/src/images/tilt_arrow-removebg-preview.png'
import arrow from '/src/images/arrow-right-solid.svg'


const PricingCard = ({head, price, Punchline1, 
    Punchline2, Punchline3, Punchline4, Punchline5, Punchline6, oneline, twoline, time, stylingBtn, cardColor
}) => {
  return (
    <div className="pricing-card" style={{cardColor}}>
        <div className="title-one">
            <h1>{head}</h1>
        </div>
        <div className="title-two">
            <div className="cover">
            <div className="price">
                <h1><sup>$</sup>{price}</h1>
            </div>
            <div className="price-title">
                <h3>Per month</h3>
                <p>10% off for yearly subscription</p>
            </div>
            </div>

            <div className="arrow">
                <img src={tilt} alt="" />
            </div>
        </div>
        <div className="title-three">
            <div className="style">
                <img src={arrow} alt="" />
                <p>{Punchline1}</p>
            </div>
            <div className="style">
                <img src={arrow} alt="" />
                <p>{Punchline2}</p>
            </div>
            <div className="style">
                <img src={arrow} alt="" />
                <p>{Punchline3}</p>
            </div>
            <div className="style">
                <img src={arrow} alt="" />
                <p>{Punchline4}</p>
            </div>
            <div className="style">
                <img src={arrow} alt="" />
                <p>{Punchline5}</p>
            </div>
            <div className="style">
                <img src={arrow} alt="" />
                <p>{Punchline6}</p>
            </div>
            
        </div>
        <div className="title-four">
            <div className="two-lines">
                <h3>{oneline}</h3>
                <p>{twoline}</p>
            </div>
            <div className="time">
                <div className="golbtn">
                    <h3>AVG. Time:{time}</h3>
                </div>
            </div>
        </div>
        <div className="title-five">
            <Button btnName="Get Started" style={{stylingBtn,
                backgroundColor : '#fff',
                border: '1px solid rgb(140, 88, 255)',
            }} style2={{color: 'rgb(140, 88, 255)',}}/>
        </div>
    </div>
  )
}

export default PricingCard