import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BaseContext from "../Context/BaseContext";
import Addissue from "./Addissue";
import IssueCard from "./IssueCard";
import "./styles/OrgFullPage.css";

export default function IssueFullPage(props) {
    const context = useContext(BaseContext);
    const [orgIssue, setorgIssue] = useState([]);
    const [orgData, setorgData] = useState({});
    const [difficultyLevel, setdifficultyLevel] = useState("All");
    const history = useHistory();
    useEffect(() => {
        const updateOrg = async () => {
            var urlParm = new URL(window.location.href);
            var url = `http://localhost:5000/api/org/issue/${urlParm.searchParams.get("id")}`;
            var resp = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            var data = (await resp.json()).data;
            if (!data) {
                history.push("/error");
                return;
            }


            url = `http://localhost:5000/api/org/${urlParm.searchParams.get("id")}`;
            resp = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });


            var comp = (await resp.json()).data;

            setorgData(comp);
            var array = [];
            for (var i of data.issue) {
                array.push(JSON.parse(i));
            }
            setorgIssue(array);
        };
        updateOrg();
    }, []);

    useEffect(() => {
    }, [orgIssue]);

    useEffect(()=>{
    }, [orgData])

    const chgPrefrence = (e) => {
        setdifficultyLevel(e.target.value);
    };


    return (
        <div className="fullHeight">
            {/* <Addissue/> */}
            <div className="orgHeader">
                <div className="vertical-center fpageOrgDetails">
                    <img src={orgData.logo} alt="" className="fullPageLogo" />
                    <div>{orgData.name}</div>
                </div>
                <div className="rightOrgFullHeader">
                    <select className="selectBox" onChange={chgPrefrence}>
                        <option>All</option>
                        <option>Easy</option>
                        <option>Intermediate</option>
                        <option>Hard</option>
                    </select>
                    {/* <div className="addNew" onClick={showAddNewIssue}>Add New</div> */}
                </div>
            </div>
            <div className="issuesCont">
                {orgIssue.length === 0 ? (
                    <div className="noIssue middle">No Issue Avilable</div>
                ) : (
                    orgIssue.map((elem,ind) => {
                        elem.ind = ind + 1;
                        return (
                            <IssueCard
                                data={elem}
                                level={difficultyLevel}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}
