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
                    <div className="aboutUs">Contact Us</div>
                    <div className='icons'>
                        <Instagram sx={{ margin: '0 0.5em' }}></Instagram>
                        <WhatsApp sx={{ margin: '0 0.5em' }}></WhatsApp>
                    </div>
                </Box>
            </Box>
        </div >
    )
}

export default Footer
