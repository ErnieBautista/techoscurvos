import React from 'react'
import "./customHeader.css"
import avatar from "../../assets/imgs/logo2.webp";


export const CustomHeader = () => {
  return (
    <div className='contenedor margin-y-2'>
      <img className='chatbotImg' src={avatar} alt="imagen de usuario" />
      <div className='pb-0'>
        <h3 className='usuario'>Rosy</h3>
        <div className='onlineStatus'>
        <span className='onlineIcon position-absolute start-10'></span> 
        <span className='disponible'>
        Disponible ahora
        </span>
        </div>
      </div>
    </div>
  )
}
