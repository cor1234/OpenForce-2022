import React,{ useState } from 'react';
import "./App.css";
import Sessions from "./Components/Sessions";
import Home from "./Components/Home";
import Organization from "./Components/Organization";
import IssueFullPage from "./Components/IssueFullPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeamContainer from "./Components/Team/TeamContainer";
import SponsorsContainer from "./Components/Sponsors/SponsorsContainer";
import { useEffect } from "react";
import MentorCard from "./Components/Panel/MentorCard";
import Panel from "./Components/Panel/Panel";
import Particles from "./Components/Particles";
import Registration from "./Components/Registration";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Swags from "./Components/Swags/Swags";
import Timeline from "./Components/Timeline";
import FAQ from "./Components/FAQ"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
    const [faqs, setfaqs] = useState([
        {
        question: 'This is a sample faq',
        answer: 'This is a sample answer',
        open: true
        },
        {
        question: 'This is yet again a sample faq',
        answer: 'Yes again a sample answer',
        open: false
        },
        {
            question: 'This is yet again a sample faq',
            answer: 'Yes again a sample answer',
            open: false
        },
        {
            question: 'Oops again a sample faq',
            answer:'sample answer cheers :)',
            open: false
        }
    ]);
    const toggleFAQ = index =>{
        setfaqs(faqs.map((faq,i) => {
            if(i === index){
            faq.open = !faq.open;
            }
            else{
            faq.open = false;
            }
            return faq;
        }))
    }
    return (
        <BrowserRouter>
            <div className="App">
                <Particles />
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <AboutUs/>
                        <Timeline/>
                        <Sessions />
                        <Organization />
                        <SponsorsContainer />
                        <Registration />
                        <div className="faqs">
                            {faqs.map((faq,i) => (
                                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                            ))}
                        </div>
                        <TeamContainer />
                        <Contact />
                    </Route>
                    <Route exact path={"/swags"}>
                        <Swags />
                    </Route>
                    <Route exact path="/issue">
                        <IssueFullPage />
                    </Route>
                    <Route exact path="/panel">
                        <Panel />
                    </Route>
                    <Route exact path="/test">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
