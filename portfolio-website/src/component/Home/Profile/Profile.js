import React from 'react';
import Typical from "react-typical";
import ScrollService from '../../../utilities/scrollService';

import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                            {/* <a href="#">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-google-plus-square"></i>
                            </a> */}
                            <a href="https://www.instagram.com/prima.maharyono/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            {/* <a href="#">
                                <i className="fa fa-youtube-square"></i>
                            </a> */}
                            <a href="https://www.linkedin.com/in/primamaharyono/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/primaam">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                        Hello, I'M <span className="highlighted-text">Prima</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev",
                                        1500,
                                        "React Native Developer",
                                        1500,
                                        "React Js Developer",
                                        1500,
                                        "A Business Man",
                                        1500,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Dedicated Person and Passionate with Technology
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="CV_Prima_Anugerah_Maharyono.pdf" download="CV Prima Anugerah Maharyono.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
}
