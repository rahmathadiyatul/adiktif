import React from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

    return (
        <div>
            <header>
                <Link to='/'>
                    <img className='logo' src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1665861626/SoupProject/image_1_1_tj3sdx.png" alt="logo"></img>
                </Link>
                <nav>
                    <ul className='nav_links'>
                        <li><Link to='/myclass'>About Us</Link></li>
                        <li><Link to='/invoice'>Our Services</Link></li>
                    </ul>
                </nav>
            </header>
        </div >
    )
}

export default Header