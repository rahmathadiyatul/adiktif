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
                            <img src='your_image_url' alt='Profile' />
                        </div>
                        <div className='memberDetails'>
                            <h2>Name</h2>
                            <p>Title</p>
                        </div>
                    </section>
                    <section className='teamMember'>
                        <div className='profilePicture'>
                            <img src='your_image_url' alt='Profile' />
                        </div>
                        <div className='memberDetails'>
                            <h2>Name</h2>
                            <p>Title</p>
                        </div>
                    </section>
                    <section className='teamMember'>
                        <div className='profilePicture'>
                            <img src='your_image_url' alt='Profile' />
                        </div>
                        <div className='memberDetails'>
                            <h2>Name</h2>
                            <p>Title</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;
