import React from 'react'
import './page5.css'
import PricingCard from '/src/components/Pricing-card/pricing'

const Page5 = () => {
  return (
    <div className="page5">
        <div className="one">
            <p>PRICING PLANS</p>
        </div>

        <div className="two">
            <h2>Tailored pricing plans 
            <span> designed for you
            </span></h2>
        </div>

        <div className="three">
            <p>All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.</p>
        </div>

        <div className="range">
            <input type="range" min="1" max="100"  />
        </div>

        <div className="pricing-cards">
            <PricingCard head="Basic Plan" price="20" 
            Punchline1="Timeline" Punchline2="Basic search" Punchline3="Live chat widget"
            Punchline4="Email marketing"Punchline5="Custom Forms"Punchline6="Traffic analytics"
            oneline="Basic Support" twoline="Only Email" time="24h"
            cardColor={{
                border: '2px solid red',
                backgroundColor: 'red',
            }}
            />

            <PricingCard head="Basic Plan" price="20" 
            Punchline1="Timeline" Punchline2="Timeline" Punchline3="Timeline"
            Punchline4="Timeline"Punchline5="Timeline"Punchline6="Timeline"
            oneline="Basic Support" twoline="Only Email" time="24h" 
            stylingBtn={{
                backgroundColor: "red",
            }}
            />

            <PricingCard head="Basic Plan" price="20" 
            Punchline1="Timeline" Punchline2="Timeline" Punchline3="Timeline"
            Punchline4="Timeline"Punchline5="Timeline"Punchline6="Timeline"
            oneline="Basic Support" twoline="Only Email" time="24h"/>
        </div>

    </div>
  )
}

export default Page5