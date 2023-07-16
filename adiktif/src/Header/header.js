import React from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ scrollToAbout, scrollToWith, scrollToMeet, scrollToService }) => {
    return (
        <div>
            <header>
                <div className='header-content'>
                    <Link to='/'>
                        <img className='logo' src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1689435276/Logo_-_Hitam_dto8ir.png" alt="logo"></img>
                    </Link>
                    <nav>
                        <ul className='nav_links'>
                            <li>
                                <a href="#about" onClick={scrollToAbout}>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#withus" onClick={scrollToWith}>
                                    With Us
                                </a>
                            </li>
                            <li>
                                <a href="#meetus" onClick={scrollToMeet}>
                                    Meet the Team
                                </a>
                            </li>
                            <li>
                                <a href="#ourservices" onClick={scrollToService}>
                                    Our Services
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div >
    )
}

export default Header