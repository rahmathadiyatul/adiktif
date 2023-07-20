import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
        <div>
            <header>
                <div className='header-content'>
                    <Link to='/'>
                        <img className='logo' src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1689435276/Logo_-_Hitam_dto8ir.png" alt="logo"></img>
                    </Link>
                </div>
            </header>
        </div >
    )
}

export default Header2