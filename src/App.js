import "./App.css";
import Introsreen from "./Components/Introscreen/introsreen";
import Skillspage from "./Components/SkillsPage/Skillspage";
import Technicalskills from "./Components/Technical-Skills/Technicalskills";
import Aboutme from "./Components/About-Me/Aboutme";

function App() {
    
    return (
        <div className="App">
            <Introsreen/>
            <Skillspage/>
            <Technicalskills/>
            <Aboutme/>
        </div>
    );
}

export default App;
