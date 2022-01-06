import React from 'react'
import './styles/SessionCard.css';

const timeFormat= (time)=>{
    const dt = new Date(time);
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Sept","Oct","Nov","Dec"]
    return `${month[dt.getMonth()-1]} ${dt.getDate()}, ${dt.getFullYear()}`;
}

const bookSession = async (id) =>{
    // todo: check if user is signed in and get `userId`
    let userId = null; // this userId will currently be giving error because it can't be found be the db
    const res = await fetch('/api/session/book',{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            sessionId:id,
            userId:userId,
        })
    })
    const data = await res.json();
}
function SessionCard(props) {
    const bookingPossible = props.session.seatsAvailable>0 && new Date(props.session.time) > new Date();
    return (
        <div className="SessionCard">
            <div className="session-image">
                <img src={props.session.image} alt={props.session.organiser.name}/>
            </div>
            <div className="session-about">
                <div className="session-about-name">
                    {props.session.organiser.host}
                </div>
                <div className="session-about-position">
                    {props.session.organiser.position}
                </div>
                <div className="session-about-description">
                    {props.session.description}
                </div>
                <div className="session-seats-remaining">
                    Seats left : {props.session.seatsAvailable}
                </div>
                <div className="session-scheduled-time">
                    Scheduled on {timeFormat(props.session.time)}
                </div>
            </div>
            <div className="session-book">
                <div className="session-book-btn" aria-disabled={!bookingPossible} onClick={()=>bookSession(props.session._id)}>{(bookingPossible)?"RSVP":"Bookings unavailable"} </div>
            </div>
        </div>
    )
}

export default SessionCard
