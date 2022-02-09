import AboutMe from '../component/AboutMe/AboutMe';
import ContactMe from '../component/ContactMe/ContactMe';
import Home from '../component/Home/Home';
import Resume from '../component/Resume/Resume';
import Testimonial from '../component/Testimonial/Testimonial';

export const SCREENS = [
    {
        screen_name: "Home",
        component: Home
    },
    {
        screen_name: "About Me",
        component: AboutMe
    },
    {
        screen_name: "Resume",
        component: Resume
    },
    // {
    //     screen_name: "Testimonial",
    //     component: Testimonial
    // },
    {
        screen_name: "Contact Me",
        component: ContactMe
    }

];

export const GET_SCREENS_INDEX = (screen_name) => {
    if (!screen_name) {
        return -1;
    }

    for (let i = 0; i < SCREENS.length; i++) {
        if (SCREENS[i].screen_name === screen_name) return i;
    }

    return -1;
};