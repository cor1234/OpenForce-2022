import React, { useEffect } from "react";
import "./styles/OrgFullPage.css";

export default function IssueCard(props) {
    if (props.level !== "All" && props.level !== props.data.level) return <></>;
    return (
        <div class="card" style={{color:"#EEE9E6", border:"2px solid #eee9e6", marginTop:"10px", borderRadius:"10px"}}>
            <div class="card-header" style={{background:"#1C232D", borderTopRightRadius:"10px", borderTopLeftRadius:"10px"}}>
                Issue-{props.data.ind}{" "}
                <span className="badge bg-secondary">{props.data.level}</span>
            </div>
            <div class="card-body" style={{background:"#46474B",borderBottomRightRadius:"10px",borderBottomLeftRadius:"10px"}}>
                <h5 class="card-title">{props.data.title}</h5>
                <p class="card-text">{props.data.desc}</p>
                <a href={props.data.repo} class="btn btn-dark" style={{background:"#1c232d", border:"none", minWidth:"100px"}} target="_blank">
                    Open
                </a>
            </div>
        </div>
    );
}
