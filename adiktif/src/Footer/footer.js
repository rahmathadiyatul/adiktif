import React from 'react';
import { Box } from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';
import '@fontsource/poppins';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <Box className="main" >
                <Box className="controlBox">
                    <div className="contactUs">Contact Us</div>
                    <div className='icons'>
                        <section><Instagram className='ig' sx={{ margin: '0 0.5em' }}></Instagram></section>
                        <section><WhatsApp className='wa' sx={{ margin: '0 0.5em' }}></WhatsApp></section>
                    </div>
                </Box>
            </Box>
        </div >
    )
}

export default Footer
