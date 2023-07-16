import React, { useRef } from 'react'
import TagLine from './TagLine/tagline'
import AboutUs from './AboutUs/aboutus'
import WithUs from './WithUs/withus'
import MeetTheTeam from './MeetTheTeam/theteam'
import OurServices from './OurServices/services'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import '@fontsource/montserrat'
import '@fontsource/inter'
import './home.css'

const Home = () => {
    const aboutSectionRef = useRef(null);
    const withSectionRef = useRef(null);
    const teamSectionRef = useRef(null);
    const serviceSectionRef = useRef(null);

    const scrollToAboutSection = () => {
        if (aboutSectionRef.current) {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToWithSection = () => {
        if (withSectionRef.current) {
            withSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToTeamSection = () => {
        if (teamSectionRef.current) {
            teamSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToServiceSection = () => {
        if (serviceSectionRef.current) {
            serviceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            {/* <div className="background-image"></div> */}
            <div className='fullweb'>
                <Header
                    scrollToAbout={scrollToAboutSection}
                    scrollToWith={scrollToWithSection}
                    scrollToMeet={scrollToTeamSection}
                    scrollToService={scrollToServiceSection}
                ></Header>
                <div className='tagline'>
                    <TagLine></TagLine>
                </div>
                <div className="aboutus-main" ref={aboutSectionRef}>
                    <AboutUs />
                </div>
                <div className="withus-main" ref={withSectionRef}>
                    <WithUs />
                </div>
                <div className="theteam-main" ref={teamSectionRef}>
                    <MeetTheTeam />
                </div>
                <div className="ourservices-main" ref={serviceSectionRef}>
                    <OurServices />
                </div>
                <Footer></Footer>
            </div>
        </div >
    )
}

export default Home
