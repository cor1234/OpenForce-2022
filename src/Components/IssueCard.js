import React, { useEffect } from "react";
import "./styles/OrgFullPage.css";

export default function IssueCard(props) {

    if (props.level !== "All" && props.level !== props.data.level) return <></>;
    return (
        <div className="issueCont">
            <div className="issueLeft">
                <div className="issueNumber middle">{props.data.ind}</div>
                <div>
                    <div className="issueHeading">{props.data.title} <span className="levelTag">{props.data.level}</span></div>
                    <div className="issueTags">
                        {props.data.desc}
                    </div>
                </div>
            </div>
            <a href={props.data.repo} className="openIssue" target="_blank">
                Open
            </a>
        </div>
    );
}
