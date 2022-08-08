import "./App.css";
import visimage from "./Assets/linkedin image nobg.jpg";
// import { Typewriter } from "react-simple-typewriter";
import Typewriter  from "typewriter-effect";

function App() {
    return (
        <div className="App">

            <div className="firstimage"></div>
            {/* the box content for the intro */}
            <div className="introbox">
                <div id="details">
                    <div id="img-box">

                        <img src={visimage} width="200px" />
                    </div>
                    
                    <h2>Vishist Bhagabati</h2>
                    <h3>Computer Engineering Sophmore</h3>
                    <div id="introsocials">
                        <a id="introlinkedin" href="https://www.linkedin.com/in/vishist-bhagabati-738398227/">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                width="30px"

                            />
                        </a>
                        <a id="introinsta" href="https://www.instagram.com/vishistbhagabati/">
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
                            width='30px'
                          />
                        </a>
                        <a id="introgithub" href="https://github.com/VishistB">
                          <img
                            src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                            width='30px'
                          />
                        </a>
                    </div>
                </div>
                <div className="introtext">
                    <h1 id="iam">
                        <b>I am a</b>
                    </h1>
                    <h2>
                    <Typewriter
                        async onInit={(typewriter)=>{
                            typewriter
                                .changeDelay(50)
                                .typeString("Frontend Developer<br>")
                                .pauseFor(100)
                                .typeString("UI/UX designer<br>")
                                .pauseFor(100)
                                .typeString("Musician<br>")
                                .start()
                        }}
                    ></Typewriter>
                    </h2>
                </div>
                <div id="resume">
                    <a href="https://drive.google.com/file/d/1XDfzUAt6pUEDsRY6Z3cg0dTiNeR6Wke4/view?usp=sharing"><img src="https://snipstock.com/assets/cdn/png/9158b40e7bdbc9f91c717998388bd27f.png" width="400px"/></a>
                    <h3><b>Resume</b></h3>
                </div>
            </div>

        </div>
    );
}

export default App;
