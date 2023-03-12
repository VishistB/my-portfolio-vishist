import React from 'react'
import styles from './aboutme.module.css'
import Spline from '@splinetool/react-spline';

function Aboutme() {
    return (
        <>
        
            <div className={styles.Aboutmewrap}>

                <div className={styles.introOverlay}>
                    <div className={styles.abtmeheaderdiv}>
                        <h2 className={styles.abtmeheader}>ABOUT ME</h2>
                    </div>
                    <div className={styles.abtrow}>
                    <div className={styles.abtpara}>
                        <p>
                            Hi, My name is Vishist Bhagabati.<br/> 
                            I'm a Computer Engineering Undergrad from<br/>
                            Thapar Institute of Engineering and Technology.<br/>
                            I got into tech through my school's Robotics Club
                            and have been exploring different domains ever since...
                            <br/><br/><br/>  
                        </p>
                        <p>
                            I have primarily been into Website Development<br/>
                            but I've tried my hands on basic App Development as well
                            and lately I've been trying to learn Dev Ops.<br/>
                            <br/><br/>
                            Apart from tech, I make my own music too. <br/>
                            my songs are up on streaming services
                            such as Spotify and Apple music.
                        </p>
                    </div>
                    <div className={styles.Abtmodel}>
                        <Spline className={styles.codemodel} scene="https://prod.spline.design/l0u1QXal67JfL0IH/scene.splinecode" />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme
