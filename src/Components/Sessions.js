import React, { useEffect, useState } from 'react'
import SessionCard from './SessionCard';
import './styles/Session.css'
import i1 from './assets/1.jpg'
import i2 from './assets/2.jpg'
import i3 from './assets/3.jpg'
import i4 from './assets/4.jpg'
import i5 from './assets/5.jpg'

function Sessions() {
    const [sessions, setSessions] = useState([]);
    const [pastSessions, setPastSessions] = useState([]);
    useEffect(async () => {
        const res = await fetch('/api/session/',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.json();
        const s = [],ps = [];
        for(var i of data.sessions){
            if(new Date(i.time)<new Date()) ps.push(i);
            else s.push(i);
        }
        s.sort((a,b)=>new Date(a.time)<new Date(b.time));
        ps.sort((a,b)=>new Date(a.time)<new Date(b.time));
        setSessions(s);
        setPastSessions(ps);
    }, [])
    return (
    <>
        <div id="Sessions">
        <div className="heading">
            Schedule Event Now!
        </div>
            <div id="sessions-grid">
                {sessions.map((session=>{
                    return <SessionCard key={session._id} session={session}/>
                }))}
                {pastSessions.map((session=>{
                    return <SessionCard key={session._id} session={session}/>
                }))}
            </div>
        </div>
        </>
    )
}

export default Sessions
