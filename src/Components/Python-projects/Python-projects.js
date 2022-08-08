import "./Python-projects.css"
import ytdownloaderpic from "../../Assets/YTdownloader.PNG"
import quizapppic  from "../../Assets/Quizapp.PNG"

export default function Pythonproj(){
    return(
        <div className="pythonprojects">
            <h1 className="Projheading">Python YTDownloader</h1>
            <img className="Pyprojopic" src={ytdownloaderpic}/>
            <h1 className="Projheading">Python Quiz App</h1>
            <img className="Pyprojopic" src={quizapppic}/>
        </div>
    )
}