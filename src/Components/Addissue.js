import React, { useContext } from 'react'
import BaseContext from '../Context/BaseContext'
import "./styles/Addissue.css"

export default function Addissue() {
    const context = useContext(BaseContext);
    const hidenewIssue = ()=>{
        context.setshowNewIssue(false);
    }

    const addIssue=(e)=>{
        e.preventDefault();
        context.setshowNewIssue(false);
        var newIssuetitle = document.getElementById("newIssuetitle");
        var newIssuegitRepo = document.getElementById("newIssuegitRepo");
        var level = document.getElementById("newissuelevel");
        var newIssueDesc = document.getElementById("newIssueDesc");
        var data = {};
        data.title = newIssuetitle.value; newIssuetitle.value="";
        data.desc = newIssueDesc.value;
        data.level = level.value;
        data.repo = newIssuegitRepo.value;
        context.callApi(`/api/org/issue/${context.orgData._id}`,"PUT",data);
        window.alert("Issue Added Successfully");
    }

    return (
        <div className='addIssueCont middle' style={{
                top:`${context.showNewIssue?50:-600}px`,
                width:`${context.showNewIssue?60:0}%`
            }}>
            <i className="fas fa-times" id="closeNewIssue" onClick={hidenewIssue}></i>
            <form className='newIssueForm' onSubmit={addIssue}>
                <div>
                    <input type="text" id="newIssuetitle" className='newIssueInput' placeholder='Title'/>
                    <input type="text" id="newIssuegitRepo" className='newIssueInput'placeholder='Git Repo Link'/>
                    <select id="newissuelevel" className='newIssueInput'>
                        <option>Easy</option>
                        <option>Intermediate</option>
                        <option>Hard</option>
                    </select>
                </div>
                <div>
                    <textarea rows={5} className="newIssueDesc" id="newIssueDesc" placeholder='Enter Description'></textarea>
                </div>
                <input type="submit" value="Create" id="createNewIssue" className='newIssueInput'/>

            </form>

            <div className='circle1'></div>
            <div className='circle2'></div>

        </div>
    )
}
