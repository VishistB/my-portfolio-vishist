import React from 'react'
// import "./introscreen.css";
// import visimage from "../../Assets/linkedin image nobg.jpg";
// import { Typewriter } from "react-simple-typewriter";
// import VBpic from "./assets/VNBpic.png"
import Typewriter  from "typewriter-effect";
import styles from "./introscreen.module.css"

function Introsreen() {
    return (
       <div className={styles.introscreen}>
            <div className={styles.introOverlay}>
                    <div className={styles.namediv}>
                        <h1 className={styles.mynameis}>VISHIST BHAGABATI</h1>
                    </div>
                    <div className={styles.scrolldowndiv}>
                        <h2 className={styles.scrolldown}>SCROLL DOWN</h2>
                    </div>
                    <img src="https://res.cloudinary.com/dibuy1ztk/image/upload/v1677656843/Portfolio%20Website/Portfoliositepic_cn7gs9.png" className={styles.VNBpic}/>
            </div>
       </div> 
    )
}

export default Introsreen




