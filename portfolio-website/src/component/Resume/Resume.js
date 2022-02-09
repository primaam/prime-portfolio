import React, { useEffect, useState } from 'react';
import "./Resume.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/scrollService';
import Animations from '../../utilities/animations';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});


    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreens(props.id);
    };
    const fadeInSubscription = ScrollService.cureentScreenFadeIn._subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>

                    <a href={props.link}>
                        <span>{props.heading ? props.heading : ""}</span>
                    </a>

                    {props.startDate && props.endDate ?
                        (
                            <div className="heading-date">
                                {props.startDate + "-" + props.endDate}
                            </div>
                        ) : (
                            <div></div>
                        )
                    }

                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>);
    };

    const resumeBullets = [
        {
            label: "Education",
            logoSrc: "education.svg"
        },
        {
            label: "Work History",
            logoSrc: "work-history.svg"
        },
        {
            label: "Programming Skills",
            logoSrc: "programming-skills.svg"
        },
        {
            label: "Projects",
            logoSrc: "projects.svg"
        },
        {
            label: "Interests",
            logoSrc: "interests.svg"
        },
    ];

    const programmingSkillsDetails = [
        {
            skill: "JavaScript",
            percentage: 80
        },
        {
            skill: "React Native",
            percentage: 85
        },
        {
            skill: "React Js",
            percentage: 75
        },
        {
            skill: "Redux",
            percentage: 85
        },
        {
            skill: "CSS",
            percentage: 85
        },
        {
            skill: "HTML",
            percentage: 70
        },
        {
            skill: "Node Js",
            percentage: 65
        },
        {
            skill: "TypeScript",
            percentage: 75
        }
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { start: 2022, end: 2022 },
            description: "A Personal Portfolio Website to show my profile in one place",
            subHeading: "Technologies Used: React Js, Bootstrap, Node Js, Express Js",
            link: ""
        },
        {
            title: "BibToGo Apps",
            duration: { start: 2021, end: "Present" },
            description: "BibToGo is the Goethe-Institut library app and personal library account. It gives access to their media and services",
            subHeading: "Technologies Used: React Native, TypeScript, Redux",
            link: "https://play.google.com/store/apps/details?id=com.goethe&hl=en&gl=US"
        },
        {
            title: "Glints Academy Final Project: VET",
            duration: { start: 2020, end: 2020 },
            description: "VET is a pet health services portal that connected veterinarian and pet owner",
            subHeading: "Technologies Used: React Native, Redux",
            link: "https://drive.google.com/drive/folders/1aubb_QFBTaY1eLFbG_RH60tFNFHjeNZK?usp=sharing"
        }
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Glints Academy Bootcamp"}
                subHeading={"React Native Developer"}
                startDate={"2020"}
                endDate={"2020"}
            />
            <ResumeHeading
                heading={"Sebelas Maret University"}
                subHeading={"Bachelor’s Degree in Civil Engineer"}
                startDate={"2015"}
                endDate={"2020"}
            />
            <ResumeHeading
                heading={"SMA Negeri 1 Jakarta (Public Senior High School)"}
                subHeading={"Major in Science"}
                startDate={"2013"}
                endDate={"2015"}
            />
        </div>
        ,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
                heading={"Datacakra"}
                subHeading={"Junior Front-End Engineer"}
                startDate={"2021"}
                endDate={"Present"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    Currently working as Junior Front-End Engineer for web and mobile apps
                </span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">
                    - Create and develop new and existing features that are requested by the client with React framework
                </span>
                <br />
                <span className="resume-description-text">
                    - Develop an User Interface for mobile and web based on designs
                </span>
                <br />
                <span className="resume-description-text">
                    - Integrated data from Back-End and make a function to process data
                </span>
            </div>
        </div>
        ,
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet">

                    </div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{ width: skill.percentage + "%" }} className="active-percentage">

                        </div>
                    </div>
                </div>
            ))}
        </div>
        ,
        <div className="resume-screen-container" key="projects">
            {projectDetails.map((item, index) => (
                <ResumeHeading
                    key={index}
                    heading={item.title}
                    subHeading={item.subHeading}
                    description={item.description}
                    startDate={item.duration.start}
                    endDate={item.duration.end}
                    link={item.link}
                />
            ))}
        </div>
        ,
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Billiard"
                description="Love to have some billiard game, it helps me focus on my target and achieve it. The sound when the ball goes into the hole excites me most"
            />
            <ResumeHeading
                heading="Football"
                description="Love to watch football match, especially Arsenal Fc and play it. Makes me more passionate at everything"
            />
        </div>
    ];

    const handleCarousel = (index) => {
        let offsetHeight = 360;
        let newCarouselOffset = {
            style: {
                transform: "translateY(" + index * offsetHeight * -1 + "px)"
            }
        };
        setCarouselOffSetStyle(newCarouselOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return (
            resumeBullets.map((bullet, index) => (
                <div onClick={() => handleCarousel(index)}
                    key={index}
                    className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}>
                    <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                        alt="no internet connection" />
                    <span className="bullet-label">{bullet.label}</span>
                </div>
            ))
        );
    };

    const getResumeScreen = () => {
        return (
            <div style={carouselOffSetStyle.style} className="resume-details-carousel">
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icon"></div>
                            <div className="bullets">
                                {getBullets()}
                            </div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">
                        {getResumeScreen()}
                    </div>
                </div>
            </div>
        </div>
    );
}
