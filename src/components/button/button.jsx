import React from 'react'
import './button.css'
import Basket from '/src/images/basket-svgrepo-com.svg'

const Button = ({btnName, style, style2}) => {
  return (
    <div className="btn" style={style}>
        <img src={Basket} />
        <h2 style={style2}>{btnName}</h2>
    </div>
  )
}

export default Button