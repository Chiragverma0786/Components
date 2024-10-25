import React from 'react'
import './titlecard.css'
import linkdin from '/src/images/linkedin-in-brands-solid (1).svg'
import facebook from '/src/images/facebook-brands-solid.svg'
import instagram from '/src/images/instagram-brands-solid (1).svg'


const Titlecard = ({personImg, ColorOne, ColorTwo, name, job}) => {
  return (
    <div className="cardka">
        <div style={{
            background: `linear-gradient(to top, ${ColorOne} 75%, ${ColorTwo} 25%)`,
        }} 
        className="person">
            <img src={personImg} alt="" />
        </div>
        <div className="lower">
            <div className="name">{name}</div>
            <div className="job">{job}</div>
            <div className="socialmedia">
              <img src={instagram} alt="" />
              <img src={linkdin} alt="" />
              <img src={facebook} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Titlecard