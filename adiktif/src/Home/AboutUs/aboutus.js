import React, { useEffect } from 'react';
import './aboutus.css';

const AboutUs = () => {
    useEffect(() => {
        const slideSections = () => {
            const p1 = document.querySelector('.p-1');
            const p2 = document.querySelector('.p-2');
            const title = document.querySelector('.title');

            const slideInAt = (window.scrollY + window.innerHeight) - p1.offsetHeight / 2;
            const sectionBottom = p1.offsetTop + p1.offsetHeight;
            const isHalfShown = slideInAt > p1.offsetTop;
            const isNotScrolledPast = window.scrollY < sectionBottom;

            if (isHalfShown && isNotScrolledPast) {
                p1.style.transform = 'translateX(0)';
            } else {
                p1.style.transform = 'translateX(-100%)';
            }

            const slideInAt2 = (window.scrollY + window.innerHeight) - p2.offsetHeight / 2;
            const sectionBottom2 = p2.offsetTop + p2.offsetHeight;
            const isHalfShown2 = slideInAt2 > p2.offsetTop;
            const isNotScrolledPast2 = window.scrollY < sectionBottom2;

            if (isHalfShown2 && isNotScrolledPast2) {
                p2.style.transform = 'translateX(0)';
            } else {
                p2.style.transform = 'translateX(100%)';
            }

            const titleTop = title.offsetTop;
            const titleBottom = title.offsetTop + title.offsetHeight;
            const isPartiallyVisible = window.scrollY > titleTop - window.innerHeight;
            const isFullyVisible = window.scrollY > titleTop && window.scrollY < titleBottom;

            if (isPartiallyVisible) {
                const scrollRatio = (window.scrollY - titleTop + window.innerHeight) / window.innerHeight;
                title.style.opacity = scrollRatio.toFixed(2);
                title.style.transform = `translateY(${scrollRatio * 50}px)`;
            } else {
                title.style.opacity = '0';
                title.style.transform = 'translateY(-50px)';
            }
        };

        window.addEventListener('scroll', slideSections);

        return () => {
            window.removeEventListener('scroll', slideSections);
        };
    }, []);


    return (
        <div className="aboutUs">
            <div className="aboutContent">
                <h1 className="title">About Us</h1>
                <section className="p-1">
                    <div>
                        <p>"Adiktif" is an acronym for the name of a company</p>
                        <h1>PT ANUGERAH DANAKIRTI KREATIF</h1>
                        <p>
                            We can break down the words and assign each letter to <br />
                            a specific term or concept related to the company's products or services.
                        </p>
                    </div>
                    <div>
                        <img
                            className="about-img-1"
                            src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1689435276/Logo_-_Hitam_dto8ir.png"
                            alt="Company Logo"
                        />
                    </div>
                </section>
                <section className="p-2">
                    <div>
                        <p>
                            Adiktif is actually an acronym that represents the core values and offerings of our company.
                            Apart from that, we create experiences that are highly engaging, <br></br>capturing the attention,
                            and interest of our audience.
                        </p>
                    </div>
                    <div>
                        <img
                            className="about-img-2"
                            src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1689457672/Adiktif/company_um6lhw.png"
                            alt="Company Logo"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
