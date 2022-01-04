import React from "react";

import "../styles/Swags.css";
import SwagItem from "./SwagItem";

import config from "../../config/config";

const { desktopSwags, mobileSwags } = config;

function Swags(props) {
    return (
        <section id={"swags"}>
            <h1>DIGITAL SWAGS</h1>
            <p className={"swags-information"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={"swags-item-container"}>
                <SwagItem
                    key={desktopSwags.wallpaper.download}
                    images={desktopSwags.wallpaper.images}
                    link={desktopSwags.wallpaper.download}
                />
                <SwagItem
                    key={desktopSwags.zoomBackground.download}
                    images={desktopSwags.zoomBackground.images}
                    link={desktopSwags.zoomBackground.download}
                />
            </div>
            <div className={"swags-item-container"}>
                <SwagItem
                    key={mobileSwags.wallpaper.download}
                    mobile={true}
                    images={mobileSwags.wallpaper.images}
                    link={mobileSwags.wallpaper.download}
                    />
                <SwagItem
                    key={mobileSwags.story.download}
                    mobile={true}
                    images={mobileSwags.story.images}
                    link={mobileSwags.story.download}
                />
            </div>
        </section>
    );
}

export default Swags;
