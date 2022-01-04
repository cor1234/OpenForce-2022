import React, { useEffect, useState } from "react";
import leftImg from "./Image/register.png";
import "./styles/Registration.css";

export default function Registration() {

    const [login, setlogin] = useState("register");

    const changeForm = ()=>{
        if(login === "register") setlogin("login");
        else setlogin("register");
    }

    const switchCont = (id, cont)=>{
        const interval1 = setInterval(()=>{
            const elem = document.getElementById(id);
            elem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.length - 1);
            if(elem.innerHTML.length === 1) {
                clearInterval(interval1);
                const interval2 = setInterval(()=>{
                    elem.innerHTML = cont.substring(0, elem.innerHTML.length + 1);
                    if(elem.innerHTML.length === cont.length){
                        clearInterval(interval2);
                        return;
                    }
                },50)
            }
        },50)
    }


    useEffect(() => {
        if(login === "register"){
            switchCont("passwordCont","Password") 
            switchCont("cpasswordCont","Confirm Password");
            switchCont("register","Register");
            switchCont("Regheading", "Register Now");
            switchCont("login","Login");
            document.getElementById("regpassword").setAttribute("type","password");
            document.getElementById("email").style.opacity = "1";
            document.getElementById("mobile").style.opacity = "1";
            document.getElementById("gender").style.opacity = "1";
            document.getElementById("username").style.opacity = "1";
            document.getElementById("college").style.opacity = "1";
        }else{
            switchCont("passwordCont","Email");
            switchCont("cpasswordCont","Password");
            switchCont("register","Login");
            switchCont("login","Register");
            switchCont("Regheading", "Login Now");
            document.getElementById("regpassword").setAttribute("type","email");
            document.getElementById("username").style.opacity = "0";
            document.getElementById("email").style.opacity = "0";
            document.getElementById("mobile").style.opacity = "0";
            document.getElementById("gender").style.opacity = "0";
            document.getElementById("college").style.opacity = "0";
        }


    }, [login])

    const getGender = ()=>{
        var gender = document.getElementsByName('gender');
        var genderVal;
        for(var i = 0; i < gender.length; i++){
            if(gender[i].checked){
                genderVal = gender[i].value;
            }
        }
        return genderVal;
    }

    const register= async ()=>{
        if(document.getElementById("regpassword").value !== document.getElementById("regcpassword").value){
            window.alert("Both Password Should match");
            return;
        }
        var data = {
            email : document.getElementById("regemail").value,
            name : document.getElementById("regname").value,
            password : document.getElementById("regpassword").value,
            mobileNo : document.getElementById("regno").value,
            college : document.getElementById("regcollege").value,
            gender:getGender()
        }
        const url = `http://localhost:5000/api/user/register`;
        var resp = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        });

        resp = await resp.json();
        
        if(resp.error){
            alert(resp.error);
            return;
        }

        data = resp.jwtTokken;
        localStorage.setItem("jwtTokken", data);
    }
    const loginMe = async ()=>{
        var data = {
            email : document.getElementById("regpassword").value,
            password : document.getElementById("regcpassword").value,
        }
        const url = `http://localhost:5000/api/user/login`;
        var resp = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        });

        resp = await resp.json();

        if(resp.error){
            alert(resp.error);
            return;
        }

        data = resp.jwtTokken;
        localStorage.setItem("jwtTokken", data);
    }

    const stepForwad=(e)=>{
        e.preventDefault();
        if(login === "register") register();
        else loginMe();
    }

    return (
        <div className="registration" id="reg">
            <div className="heading" id="Regheading">Register Now</div>
            <div className="regForm">
                <form id="regform" onSubmit={stepForwad}>
                    <div id="username">
                        <div className="regText">Full Name</div>
                        <div className="regInput">
                            <input
                                type="text"
                                required={true}
                                className="regInputField"
                                id="regname"
                            />
                        </div>
                    </div>
                    <div id="email">
                        <div className="regText">Email</div>
                        <div className="regInput">
                            <input
                                type="email"
                                required={true}
                                id="regemail"
                                className="regInputField"
                            />
                        </div>
                    </div>
                    <div id="password">
                        <div className="regText" id="passwordCont">Password</div>
                        <div className="regInput">
                            <input
                                type="text"
                                required={true}
                                className="regInputField"
                                id="regpassword"
                            />
                        </div>
                    </div>
                    <div id="cpassword">
                        <div className="regText" id="cpasswordCont">Confirm Password</div>
                        <div className="regInput">
                            <input
                                type="password"
                                autoComplete="true"
                                id="regcpassword"
                                required={true}
                                className="regInputField"
                            />
                        </div>
                    </div>
                    <div id="mobile">
                        <div className="regText">Mobile No</div>
                        <div className="regInput">
                            <input
                                type="number"
                                required={true}
                                id="regno"
                                className="regInputField"
                            />
                        </div>
                    </div>
                    <div id="gender">
                        <div className="regText">Gender</div>
                        <div className="regInput genderSelect">
                            <span>
                                <input type="radio" name="gender" id="male" value="Male"/>
                                <label htmlFor="male">Male</label>
                            </span>
                            <span>
                                <input type="radio" name="gender" id="female" value="Female"/>
                                <label htmlFor="female">Female</label>
                            </span>
                            <span>
                                <input type="radio" name="gender" id="other" value="Other"/>
                                <label htmlFor="other">Other</label>
                            </span>
                        </div>
                    </div>
                    <div id="college">
                        <div className="regText">College</div>
                        <div className="regInput">
                            <input
                                type="text"
                                required={true}
                                className="regInputField"
                                id="regcollege"
                            />
                        </div>
                    </div>
                    <div className="regbtncont">
                        <button type="submit" id="register">Register</button>
                        <button type="button" id="login" onClick={changeForm}>Login</button>
                    </div>
                </form>
                <div className="leftRegBar">
                    <img src={leftImg} className="regimage" />
                </div>
            </div>
        </div>
    );
}
