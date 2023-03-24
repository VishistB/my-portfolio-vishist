import "./App.css";
import Introsreen from "./Components/Introscreen/introsreen";
import Skillspage from "./Components/SkillsPage/Skillspage";
import Technicalskills from "./Components/Technical-Skills/Technicalskills";
import Aboutme from "./Components/About-Me/Aboutme";
import Contactpage from "./Components/Contact-page/Contactpage";
import Projects from "./Components/Projects/Projects";
import Loader from "./Components/Loader/Loader";
import { useState } from "react";
import { Component } from "react";

function App() {
    const [isLoaded,loadState] = useState(false);

    function ldcheck(){
        setTimeout(function () {if (document.readyState === "complete") {
            loadState(true);
        }}, 5000);
        
    }
    return (
        <div className="App">
            {!isLoaded? 
            (<div onLoad={ldcheck}><Loader/><Introsreen/></div>) 
            :<div>
            <Introsreen/>
            <Skillspage/>
            <Technicalskills/>
            <Aboutme/>
            <Projects/>
            <Contactpage/></div>
            }
            
            
        </div>
    );
}

export default App;
