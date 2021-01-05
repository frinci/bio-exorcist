import React from 'react'
import '../styles/Header.css'

import logo from '../images/beetlejuiceLogo.png'

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/" ><img src={logo} className='headerLogo' alt="hometown homicide logo"/></a>

                <ul>
                    <li><a href="/">Contact</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Episodes">Qualifications</a></li>
                </ul>
            </nav>
        </div>
    )
}
 
export default Header