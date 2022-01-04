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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Particles />
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <AboutUs/>
                        <Sessions />
                        <Organization />
                        <SponsorsContainer />
                        <Registration />
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
