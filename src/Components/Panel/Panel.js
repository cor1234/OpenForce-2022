import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Panel.css";
import MentorCard from "./MentorCard"

export default function Panel() {
    const history = useHistory();
    const [orgData, setorgData] = useState({bookedBy:[],panel:[]});
    const userEmail = "_10_eek"
    useEffect(() => {
        const updateOrg = async () => {
            var urlParm = new URL(window.location.href);

            const url = `http://localhost:5000/api/org/${urlParm.searchParams.get(
                "id"
            )}`;
            var resp = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            var comp = (await resp.json()).data;

            if (!comp) {
                history.push("/error");
                return;
            }
            setorgData(comp);
        };
        updateOrg();
    }, []);

    const bookMe = async ()=>{
        var urlParm = new URL(window.location.href);
        const url = `http://localhost:5000/api/org/${urlParm.searchParams.get("id")}/panel/register`;
        if(orgData.bookedBy.length >= 300){
            window.alert("Seats already full");
            return;
        }
        var data = {
            "username":userEmail
        }
        var resp = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body:JSON.stringify(data)
        });
        data = await resp.json();
        if(data.error){
            window.alert(data.error);
        }else{
            var temp = orgData;
            temp.bookedBy.push(userEmail);
            setorgData(temp);
            window.alert("Successfuly Registered");
        }
    }

    const getFormatedTime = (x) => {
        var dt = new Date(parseInt(x));
        var hour = "";
        if (dt.getHours() % 12 == 0) hour += "12";
        else
            hour += `${dt.getHours() % 12 < 10 ? "0" : ""}${
                dt.getHours() % 12
            }`;
        return `${hour}:${dt.getMinutes() < 10 ? "0" : ""}${dt.getMinutes()} ${
            dt.getHours() >= 12 ? "PM" : "AM"
        }`;
    };

    const getFormatedDate = (x) => {
        var dt = new Date(parseInt(x));
        return dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();
    };

    return (
        <div className="panelCont">
            <div className="bookSeat">
                <div className="eventDetail">
                    <div>Time : {getFormatedTime(orgData.time)}</div>
                    <div>Date : {getFormatedDate(orgData.time)}</div>
                    <div>Booked : {orgData.bookedBy.length}/300</div>
                </div>
                <div className="bookpanel">
                    {orgData.bookedBy.indexOf(userEmail) !== -1 ? (
                        <div className="alreadyBooked">Already Booked</div>
                    ) : orgData.bookedBy.length === 300 ? (
                        <div className="slotsfull">No Slots Avilable</div>
                    ) : (
                        <div className="bookNow" onClick={bookMe}>Book Now</div>
                    )}
                </div>
            </div>
            <div className="ourMentor">Our Mentors</div>
            <div className="panelMentorList">
                {
                    orgData.panel.map((elem)=>{
                        return (<MentorCard data={elem} />);
                    })
                }
            </div>
        </div>
    );
}
