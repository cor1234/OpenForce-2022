import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from 'react';
import { faMapMarkerAlt,faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import './styles/Contact.css';
library.add(faMapMarkerAlt, faPhone, faEnvelope);



function Contact() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div>
            <section className="contact" >
                <div className="heading">
                    Contact Us
                </div>
                <div className="content">
                    <p>Codeflow, a community that serves the ultimate purpose of Learning must go on,  is an organization whose main motive is to empower the student community by organizing webinars,
                        hackathons and open source events.As a community, we have impacted 6k+ students and reached 100+ colleges  in less than 1 year. We had previously organized an event called “DSA Bootcamp” which had 5k+ registrations, 30+ community partners and collaborated with 25+ eminent speakers. </p>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><FontAwesomeIcon icon="map-marker-alt"/></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p> Nit Kurukshetra<br />Kurukshetra,Haryana<br />136119</p>
                            </div>
                        </div>
                        <div className="box">

                            <div className="icon"><FontAwesomeIcon icon="phone" /></div>

                            <div className="text">
                                <h3>Phone</h3>
                                <p> +91-7082860744</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <FontAwesomeIcon icon="envelope" />
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>Codefloworg@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form>
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="user_email" required="required" />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" required="required"></input>
                                <span>Type Your message</span>
                            </div>
                            <div className="inputBox">
                                <button id="submit-contact-form">{status}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
