import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuArray } from '../../../types/menu'
import './Nav.scss'

const Nav : FC = () => {
  return (
    <nav className="nav">
        <ul className="nav__list">
            {MenuArray.map(item => (
                <li key={item.link} className="nav__item">
                    <Link className='nav__link' to={item.link} >{item.name}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Nav