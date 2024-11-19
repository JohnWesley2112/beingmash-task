import React, { useRef, useState } from 'react'
import './Style.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef();
    function toggleMenu() {
        navRef.current.classList.toggle('hide-nav-links');
        setIsOpen(!isOpen)
    }
    return (
        <div className='nav-container'>
            <div className="nav-wrapper">
                <img className='logo' src={require('../assets/logo.png')} alt="" />
                <div className="nav-links-wrapper">
                    <button onClick={toggleMenu} className='btn close-btn' type="button"><img src={isOpen ? require('../assets/cross.png') : require('../assets/menu-burger.png')} alt="" /></button>
                    <ul ref={navRef} className='nav-links'>
                        <li ><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Header