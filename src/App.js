import "./App.css";
import Introsreen from "./Components/Introscreen/introsreen";
import Skillspage from "./Components/SkillsPage/Skillspage";
import Technicalskills from "./Components/Technical-Skills/Technicalskills";
import Aboutme from "./Components/About-Me/Aboutme";
import Contactpage from "./Components/Contact-page/Contactpage";

function App() {
    
    return (
        <div className="App">
            <Introsreen/>
            <Skillspage/>
            <Technicalskills/>
            <Aboutme/>
            <Contactpage/>
        </div>
    );
}

export default App;
