import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/scrollService';
import Animations from '../../utilities/animations';
import "./AboutMe.css";

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreens(props.id);
    };
    const fadeInSubscription = ScrollService.cureentScreenFadeIn._subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANT = {
        description: "A dedicated person who is passionate about technology. Has proficiency in mobile development using React Native and related subject that linked with React Native. Has the experience as a Mobile Apps Developer using React Native at several projects and a Scrum Master on final project at Glints Academy",
        highlight: {
            bullets: [
                "Web and Mobile Apps Developer",
                "React and React Native",
                "Redux for State Mnanagement",
                "Integrate Data with Back-End",
                "Business Man"
            ],
            heading: "Summary Highlight"
        }
    };

    const renderHighlight = () => {
        return (
            SCREEN_CONSTANT.highlight.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        );
    };
    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading
                    title={"About Me"}
                    subHeading={"Why Choose Me?"}
                />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANT.description}</span>
                        <div className="about-me-highlight">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANT.highlight.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                            Hire Me{" "}
                            </button>
                            <a href="CV_Prima_Anugerah_Maharyono.pdf" download="CV Prima Anugerah Maharyono.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
