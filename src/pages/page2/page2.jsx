import React from 'react'
import './page2.css'
import Titlecard from '../../components/title-card/titlecard'

const Page2 = () => {
  return (
    <div className="page2">
        <div className="one">
            <p>REAL CUSTOMERS REVIEWS</p>
        </div>

        <div className="two">
            <h2>Success stories 
            <span> from clients</span></h2>
        </div>

        <div className="three">
            <p>See what our customers have to say about their experience.</p>
        </div>

        <div className="cardspoint">
            <Titlecard />
        </div>
    </div>
  )
}

export default Page2