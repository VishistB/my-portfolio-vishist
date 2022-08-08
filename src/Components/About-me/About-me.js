import "./About-me.css"
import mobiledev from "../../Assets/Mobile Dev.PNG"

export default function AboutMe()
{
    function appear()
    {
        const mdevpic=document.getElementById('mobiledevpic');
        mdevpic.style.transform="translate(67vw)"
    }
    return(
        <div className="aboutme" onMouseOver={appear}>
                <h1><b>About Me</b></h1>
                <div id="contentflex">
                <p id="aboutmecontent"  >
                My name is Vishist Bhagabati.<br/> 
                I enjoy developing Websites and making music!<br/> 
                <br/>
                I primarily work on the frontend part and really love creating animations for the<br/> 
                webpages I work on.
                <br/>
                The times when I'm not working on Websites I can be found making robotic sound<br/> 
                effects for my songs.<br/>
                <br/>
                Speaking of Robotics............I've been part of the robotics team back in school<br/> 
                So I have fair amounts of experience working with different types of sensors and<br/> 
                hardware as well!
                <br/>
                Here's a little bit about me.<br/>
                <br/>
                Now Let us look at what I've worked with.
                </p>
                <img id="mobiledevpic" src={mobiledev} width="500px"/>
                </div>
            </div>
    )
}
