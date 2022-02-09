import { SCREENS } from "./commonUtil";
import { Subject } from 'rxjs';
import { object } from 'prop-types';


export default class scrollService {
    static scrollHandler = new scrollService();

    static currentScreenBroadCaster = new Subject();
    static cureentScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me");

        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth" });
    };
    scrollToHome = () => {
        let homeScreen = document.getElementById("Home");

        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" });
    };
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;

            case 'complete':
                return completelyVisible;

            default:
                return false;
        }
    };

    checkCurrentScreenUnderViewport = (event) => {
        if (!event || object.keys(event).length < 1)
            return;
        for (let screen of SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if (!screenFromDOM)
                continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, 'partial');

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    scrollService.cureentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullyVisible) {
                    scrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    };
}