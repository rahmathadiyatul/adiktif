import React from 'react';
import './withus.css';
import Boxes from './boxes';

const WithUs = () => {
    return (
        <div className='withUs'>
            <div className='withContent'>
                <h1>With Us</h1>
                <section className='content'>
                    <p>As a company engaged in the service industry, we always remember, providing exceptional
                        service is an ongoing effort. Here are some key points to consider when you join make
                        a plan or dream become realize with us</p>
                </section>
                <Boxes></Boxes>
            </div>
        </div>
    );
};

export default WithUs;
