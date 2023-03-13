import "./App.css";
import Introsreen from "./Components/Introscreen/introsreen";
import Skillspage from "./Components/SkillsPage/Skillspage";
import Technicalskills from "./Components/Technical-Skills/Technicalskills";
import Aboutme from "./Components/About-Me/Aboutme";
import Contactpage from "./Components/Contact-page/Contactpage";
import Projects from "./Components/Projects/Projects";

function App() {
    
    return (
        <div className="App">
            <Introsreen/>
            <Skillspage/>
            <Technicalskills/>
            <Aboutme/>
            {/* <Projects/> */}
            <Contactpage/>
        </div>
    );
}

export default App;
