import React from 'react';
import { SCREENS } from '../utilities/commonUtil';

export default function Component() {

    const allScreens = () => {
        return (
            SCREENS.map((screen) => {
                return (
                    (screen.component) ?
                        <screen.component
                            screenName={screen.screen_name}
                            key={screen.screen_name}
                            id={screen.screen_name} />
                        :
                        <div
                            key={screen.screen_name}
                        ></div>);
            })
        );
    };
    return (
        <div className="portfolio-container">
            {allScreens()}
        </div>
    );
}
