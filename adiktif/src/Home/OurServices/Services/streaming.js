import React from 'react';
import { Box } from '@mui/material';
import '../services.css';
import Header from '../../../Header/header2';

const Streaming = () => {
    return (
        <div className='services'>
            <Header></Header>
            <div className='serviceContent'>
                <h1 style={{ color: 'black' }} className='underConstructionText'>404 Page Under Construction</h1>
                <img
                    className='constructionImage'
                    src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689871120/Adiktif/How-to-Make-Under-Construction-Page-WordPress_cjidzx.png'
                    alt='Under Construction'
                />
            </div>
        </div>
    );
};

export default Streaming;
