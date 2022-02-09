import React, { useState } from 'react';
import { SCREENS, GET_SCREENS_INDEX } from '../../../utilities/commonUtil';
import scrollService from '../../../utilities/scrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    // let mybutton = document.getElementById("btn-back-to-top");

    // // When the user scrolls down 20px from the top of the document, show the button
    // window.onscroll = function () {
    //     scrollFunction();
    // };


    // // When the user clicks on the button, scroll to the top of the document
    // mybutton.addEventListener("click", backToTop);

    // function backToTop() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    //     setSelectedScreen(0);
    // }


    const updateCurrentScreen = (currentScreen) => {
        if (currentScreen || !currentScreen.screenInView) return;
        let screenIndex = GET_SCREENS_INDEX(currentScreen.screenInView);

        if (screenIndex < 0) return;
    };

    let currentScreenSubscription = scrollService.currentScreenBroadCaster._subscribe(updateCurrentScreen);

    const getHeaderOptions = () => {
        return (
            SCREENS.map((screen, i) => (
                <div key={screen.screen_name}
                    className={getHeaderOptionsClass(i)}
                    onClick={() => switchScreen(i, screen)}>
                    <span>
                        {screen.screen_name}
                    </span>
                </div>
            ))
        );
    };

    const getHeaderOptionsClass = (index) => {
        let classNames = "";
        let classes = "header-option";
        if (index < SCREENS.length - 1)
            classNames += "header-options-separator ";
        if (selectedScreen === index)
            classNames += "selected-header-option";
        // console.log(selectedScreen, "selected");
        return `${classes} ${classNames}`;
    };

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) return;
        console.log(index, "index");
        screenComponent.scrollIntoView({ behavior: "smooth" });
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    };

    // let mybutton = document.getElementById("btn-back-to-top");
    // let home = document.getElementById("Home");
    // window.onscroll = () => {
    //     scrollFunction();
    // };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         mybutton.style.display = "block";
    //     } else {
    //         mybutton.style.display = "none";
    //     }
    // }

    // const scrollHandler = () => {
    //     // document.body.scrollTop = 0;
    //     // document.documentElement.scrollTop = 0;
    //     home.scrollIntoView({ behavior: "smooth" });
    //     // scrollService.scrollHandler.scrollToHome();
    //     setSelectedScreen(0);
    // };


    return (
        <div>
            {/* <button
                type="button"
                className="btn btn-danger btn-floating btn-lg"
                id="btn-back-to-top"
                onClick={() => scrollHandler}
            >
                <i class="fa fa-arrow-up"></i>
            </button> */}
            <div
                className="header-container"
                onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className="header-parent">
                    <div className="header-hamburger"
                        onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
                    </div>
                    <div className="header-logo">
                        <span>WELCOME</span>
                    </div>
                    <div className={showHeaderOptions ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    );
}
