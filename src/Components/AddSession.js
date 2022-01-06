import React from 'react'
import './styles/AddSession.css'
import BaseContext from '../Context/BaseContext';
import { useContext } from 'react';

const addSession = async e=>{
    const {alert} = useContext(BaseContext);
    e.preventDefault();
    const sessionname = document.getElementById('sessionname').value;
    const sessionposition = document.getElementById('sessionposition').value;
    const sessiondescription = document.getElementById('sessiondescription').value;
    const sessionhost = document.getElementById('sessionhost').value;
    const sessionimage = document.getElementById('sessionimage').value;
    const sessiondate = document.getElementById('sessiondate').value ;
    const body = {
        "organiser" : {"name":sessionname,"host":sessionhost,"position":sessionposition},
        "description" : sessiondescription,
        "image" : sessionimage,
        "time" : new Date(sessiondate),
    }
    const res = await fetch('/api/session/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    }) 
    const data = await res.json();
    alert("success",`Succesfully book with id ${data.sessionId}`);

}
function AddSession() {
    return (
        <div id="AddSession">
            <form action="" id="AddSessionForm" onSubmit={addSession}>
                <div className="form-top">
                    <div className="form-left">
                        <input type="text" id="sessionname" placeholder='name'/>
                        <input type="text" id="sessionhost" placeholder='host'/>
                        <input type="text" id="sessionposition" placeholder='position'/>
                        <input type="text" id="sessiondate" placeholder='date'/>
                    </div>
                    <div className="form-right">
                        <input type="text" id="sessionimage" placeholder='image-url'/>
                        <input type="description" id="sessiondescription" placeholder='description'/>
                    </div>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default AddSession
