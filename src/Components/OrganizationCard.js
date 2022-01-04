import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/Organization.css";

export default function OrganizationCard(props) {
    const history = useHistory();
    const showIssues = ()=>{
        history.push(`issue?id=${props.data._id}`)
    }
    const showPanel = ()=>{
        history.push(`panel?id=${props.data._id}`)
    }
    return (
        <div className="orgCont">
            <div className="orgDataCont">
                <img
                    src={props.data.logo}
                    alt={props.data.name}
                    width="150px"
                    className="orgLogo"
                />
            </div>
            <div className="orgNavigation">
                <div className="orgName">{props.data.name}</div>
                <div className="orgIssue orgButton" onClick={showIssues}>Issues</div>
                <div className="orgPanel orgButton" onClick={showPanel}>Panel</div>

                <div className="absolute orgBall ball1"></div>
                {/* <div className="absolute orgBall ball3"></div> */}

            </div>
        </div>
    );
}
