import "./App.css";
import Introsreen from "./Components/Introscreen/introsreen";
import Skillspage from "./Components/SkillsPage/Skillspage";
import Technicalskills from "./Components/Technical-Skills/Technicalskills";

function App() {
    
    return (
        <div className="App">
            <Introsreen/>
            <Skillspage/>
            <Technicalskills/>
        </div>
    );
}

export default App;
