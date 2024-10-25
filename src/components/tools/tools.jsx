import React from 'react'
import './tools.css'

const Tools = ({CodeImg, CodeTitle, CodePara, CodePara2}) => {
  return (
    <div className="toolcard">
        <div className="logo">
            <img src={CodeImg} alt="" />
        </div>
        <div className="logo-title">
            <h3>{CodeTitle}</h3>
        </div>
        <div className="logo-para">
            <p>{CodePara}</p>
            <p>{CodePara2}</p>
        </div>
        
    </div>
  )
}

export default Tools