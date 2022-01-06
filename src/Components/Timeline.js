import React from "react";
import "./styles/Timeline.css";
export default function Timeline() {
    const resetTimeline = () => {
        const a = document.querySelector(".dark");
        const dots = document.querySelectorAll(".dot");
        const dotcircle = document.querySelectorAll(".dotcircle");
        const line = document.querySelector(".tlline");
        const timelineCont = document.querySelector(".timelineCont");
        var padding = window
            .getComputedStyle(timelineCont)
            .paddingLeft.substring(
                0,
                window.getComputedStyle(timelineCont).paddingLeft.length - 2
            );
        console.log(
            `${line.offsetLeft - a.offsetLeft}px`,
            window
                .getComputedStyle(timelineCont)
                .paddingLeft.substring(
                    0,
                    window.getComputedStyle(timelineCont).paddingLeft.length - 2
                )
        );

        for (var i of dots) {
            i.style.left = `${line.offsetLeft - a.offsetLeft - padding - 10}px`;
        }
    };

    setTimeout(resetTimeline, 100);
    window.addEventListener('resize',resetTimeline);
    return (
        <>
            <div className="timelineCont">
                <div className="heading">Timeline</div>
                <div className="tlline"></div>
                <div class="tlboxwrap tlfirst">
                    <div className="tlboxes dark" id="tlbox1">
                        1st February 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox2">
                        Registration Open
                    </div>
                </div>

                <div class="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox3">
                        28th February 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox4">
                        Registration Close
                    </div>
                </div>

                <div class="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox5">
                        2nd march 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox6">
                        Opening Ceremony
                    </div>
                </div>

                <div class="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox7">
                        5th March- 10th March 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox8">
                        Panel Mentorship
                    </div>
                </div>

                <div class="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox9">
                        23rd March 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox10">
                        Contribution deadline
                    </div>
                </div>
            </div>
        </>
    );
}
