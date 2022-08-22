import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import "./Logo.scss";
import logoImg from "../../assets/img/home-svgrepo-com.svg"

interface ILogo
{
    width: number
    height: number
    text: number
}

const Logo : FC<ILogo> = ({height, width, text}) => {
  return (
    <Link to="/" className='logo'>
        <img width={width} height={height} src={logoImg} alt="Logo" />
        <h3 style={{fontSize: text}} className='logo__text'>Real<br/>Estate</h3>
    </Link>
  )
}

export default Logo