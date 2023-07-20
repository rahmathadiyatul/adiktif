import React from 'react';
import { Box } from '@mui/material';
import './services.css';

const OurServices = () => {
    return (
        <div className='services'>
            <div className='serviceContent'>
                <h1>Our Specialties & Services</h1>
                <main>
                    <div className='serviceItems'>
                        <section className='serviceItem'>
                            <div className='serviceImage'>
                                <img src='your_image_url' alt='service' />
                            </div>
                            <div className='serviceName'>
                                <h2>Name</h2>
                            </div>
                        </section>
                        <section className='serviceItem'>
                            <div className='serviceImage'>
                                <img src='your_image_url' alt='service' />
                            </div>
                            <div className='serviceName'>
                                <h2>Name</h2>
                            </div>
                        </section>
                        <section className='serviceItem'>
                            <div className='serviceImage'>
                                <img src='your_image_url' alt='service' />
                            </div>
                            <div className='serviceName'>
                                <h2>Name</h2>
                            </div>
                        </section>
                        <section className='serviceItem'>
                            <div className='serviceImage'>
                                <img src='your_image_url' alt='service' />
                            </div>
                            <div className='serviceName'>
                                <h2>Name</h2>
                            </div>
                        </section>
                        <section className='serviceItem'>
                            <div className='serviceImage'>
                                <img src='your_image_url' alt='service' />
                            </div>
                            <div className='serviceName'>
                                <h2>Name</h2>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default OurServices;
