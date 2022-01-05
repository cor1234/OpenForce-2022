import React from "react";
import "./styles/Timeline.css";
export default function Timeline() {
    return (
        <>
            <div className="timelineCont">
                <div className="heading">
                    Timeline
                </div>
                <div class="tlboxwrap">
                    <div className="tlboxes" id="tlbox1">
                        1st February 2022
                    </div>
                    <div className="tlboxes" id="tlbox2">
                        Registration Open
                    </div>
                </div>

                <div class="tlboxwrap">
                    <div className="tlboxes" id="tlbox3">
                        28th February 2022
                    </div>
                    <div className="tlboxes" id="tlbox4">
                        Registration Close
                    </div>
                </div>

                <div class="tlboxwrap">
                    <div className="tlboxes" id="tlbox5">
                        2nd march 2022
                    </div>
                    <div className="tlboxes" id="tlbox6">
                        Opening Ceremony
                    </div>
                </div>

                <div class="tlboxwrap">
                    <div className="tlboxes" id="tlbox7">
                        <pre>5th March- 10th March 2022</pre>
                    </div>
                    <div className="tlboxes" id="tlbox8">
                        Panel Mentorship
                    </div>
                </div>

                <div class="tlboxwrap">
                    <div className="tlboxes" id="tlbox9">
                        23rd March 2022
                    </div>
                    <div className="tlboxes" id="tlbox10">
                        Contribution deadline
                    </div>
                </div>
            </div>
        </>
    );
}