import React from 'react';
import { Box } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';
import '@fontsource/poppins';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Box className="main" >
                <Box className="controlBox">
                    <div className="contactUs">Contact Us</div>
                    <div className='icons'>
                        <section><Instagram className='ig' sx={{ margin: '0 0.5em' }}></Instagram></section>
                        <section><Email className='email' sx={{ margin: '0 0.5em' }}></Email></section>
                    </div>
                </Box>
            </Box>
        </div >
    )
}

export default Footer
