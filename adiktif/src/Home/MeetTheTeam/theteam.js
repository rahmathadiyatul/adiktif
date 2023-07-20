import React from 'react';
import { Box } from '@mui/material';
import './theteam.css';

const MeetTheTeam = () => {
    return (
        <div className='theTeam'>
            <div className='teamContent'>
                <h1>Meet The Team</h1>
                <div className='teamMembers'>
                    <section className='teamMember'>
                        <div className='profilePicture'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689873473/Adiktif/The%20Team/Satria_qso8ca.png' alt='Profile' />
                        </div>
                        <div className='memberDetails'>
                            <h2>Satria</h2>
                            <p>Marketing Communication</p>
                        </div>
                    </section>
                    <section className='teamMember'>
                        <div className='profilePicture'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689873565/Adiktif/The%20Team/Bella_l0pql2.png' alt='Profile' />
                        </div>
                        <div className='memberDetails'>
                            <h2>Bella Stefani</h2>
                            <p>Director</p>
                        </div>
                    </section>
                    <section className='teamMember'>
                        <div className='profilePicture'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689873473/Adiktif/The%20Team/Sasmita_r4d0zg.png' alt='Profile' />
                        </div>
                        <div className='memberDetails'>
                            <h2>Paramayuga A  Sasmita</h2>
                            <p>Technical Production</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;
