import React, { useEffect } from 'react';
import ActionAreaCard from './cards';
import './aboutus.css';

const AboutUs = () => {
    useEffect(() => {
        const slideSections = () => {
            const p1 = document.querySelector('.p-1');
            const p2 = document.querySelector('.p-2');
            const p3 = document.querySelector('.p-3');
            const p4 = document.querySelector('.p-4');
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
                p2.style.transform = 'translateX(-100%)';
            }

            const slideInAt3 = (window.scrollY + window.innerHeight) - p3.offsetHeight / 2; // Added slideInAt3 calculation
            const sectionBottom3 = p3.offsetTop + p3.offsetHeight; // Added sectionBottom3 calculation
            const isHalfShown3 = slideInAt3 > p3.offsetTop; // Added isHalfShown3 calculation
            const isNotScrolledPast3 = window.scrollY < sectionBottom3; // Added isNotScrolledPast3 calculation

            if (isHalfShown3 && isNotScrolledPast3) {
                p3.style.transform = 'translateX(0)';
            } else {
                p3.style.transform = 'translateX(-100%)';
            }

            const slideInAt4 = (window.scrollY + window.innerHeight) - p4.offsetHeight / 2; // Added slideInAt4 calculation
            const sectionBottom4 = p4.offsetTop + p4.offsetHeight; // Added sectionBottom4 calculation
            const isHalfShown4 = slideInAt4 > p4.offsetTop; // Added isHalfShown4 calculation
            const isNotScrolledPast4 = window.scrollY < sectionBottom4; // Added isNotScrolledPast4 calculation

            if (isHalfShown4 && isNotScrolledPast4) {
                p4.style.transform = 'translateX(0)';
            } else {
                p4.style.transform = 'translateX(-100%)';
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
                        <p>"Adiktif" is an acronym for the name of the company</p>
                        <h1>PT ANUGERAH DANAKIRTI KREATIF</h1>
                        <p>
                            We can break down the words and assign each letter to
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
                            Apart from that, we create experiences that are highly engaging, capturing the attention,<br></br>
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
                <section className="p-3">
                    <div className='acronym' >
                        <ActionAreaCard
                            url='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689457672/Adiktif/company_um6lhw.png'
                            acro="Anugerah"
                            text="represents the notion of a divine or extraordinary gift or favor that is bestowed upon someone, emphasizing the importance of gratitude, humility, and the responsible use of such blessings in Indonesian culture.">
                        </ActionAreaCard>
                        <ActionAreaCard
                            url='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689457672/Adiktif/company_um6lhw.png'
                            acro="Danakirti"
                            text="in Indonesian culture signifies honor, recognition and positive
                            reputation achieved through acts of charitable giving. It reflects Indonesian
                            values of generosity, philanthropy and belief in the power of giving to bring
                            about positive change in society.">
                        </ActionAreaCard>
                        <ActionAreaCard
                            url='https://res.cloudinary.com/dxyxg3egs/image/upload/v1689457672/Adiktif/company_um6lhw.png'
                            acro="Kreatif"
                            text="refers to the quality of being creative and encompasses the ability to
                            generate original, innovative, and imaginative ideas, solutions, or expressions.
                            It is a highly regarded trait that is valued across different domains of life.">
                        </ActionAreaCard>
                    </div>
                </section>
                <section className="p-4">
                    <div>
                        <p>
                            By explaining each letter of the acronym in relation to the company's values or offerings,
                            you can convey that "adiktif" represents the essence of the company and its commitment to
                            delivering compelling and captivating experiences and is a company engaged in the field
                            of Event Organizer and Event Production. <br></br><br></br>
                            As event organizers, we are responsible for the overall event management and coordination.
                            The focus is on the logistical and administrative aspects of planning, organizing and
                            executing events. Event production refers to the technical and creative aspects of an
                            event which involves the design, coordination, and execution of various elements of the
                            production to enhance the overall experience for the participants.
                        </p>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default AboutUs;
