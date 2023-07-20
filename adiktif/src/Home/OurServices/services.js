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
                        <a href='/eventorganizer'>
                            <section className='serviceItem'>
                                <div className='serviceImage'>
                                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689869537/Adiktif/Services/EO_gsuzmt.png' alt='service' />
                                </div>
                                <div className='serviceName'>
                                    <h2>Event Organizer</h2>
                                </div>
                            </section>
                        </a>
                        <a href='eventproduction'>
                            <section className='serviceItem'>
                                <div className='serviceImage'>
                                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689869537/Adiktif/Services/EP_njjx8c.png' alt='service' />
                                </div>
                                <div className='serviceName'>
                                    <h2>Event Production</h2>
                                </div>
                            </section>
                        </a>
                        <a href='mice'>
                            <section className='serviceItem'>
                                <div className='serviceImage'>
                                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689869537/Adiktif/Services/MICE_eev550.png' alt='service' />
                                </div>
                                <div className='serviceName'>
                                    <h2>MICE</h2>
                                    <p>(Meeting, Incentive, <br></br>Convention, and Exhibitions)</p>
                                </div>
                            </section>
                        </a>
                        <a href='streaming'>
                            <section className='serviceItem'>
                                <div className='serviceImage'>
                                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689869537/Adiktif/Services/Streaming_lu1pdq.png' alt='service' />
                                </div>
                                <div className='serviceName'>
                                    <h2>Streaming / <br></br>Hybrid Event</h2>
                                </div>
                            </section>
                        </a>
                        <a href='brandactivity'>
                            <section className='serviceItem'>
                                <div className='serviceImage'>
                                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689869537/Adiktif/Services/Brand_typa10.png' alt='service' />
                                </div>
                                <div className='serviceName'>
                                    <h2>Brand Activity</h2>
                                </div>
                            </section>
                        </a>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default OurServices;
