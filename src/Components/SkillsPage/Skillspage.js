import React from 'react'
import styles from './skillspage.module.css'
import Marquee from "react-fast-marquee";
import Spline from '@splinetool/react-spline';

function Skillspage() {
    return (
        <>
            <div className={styles.skillsPagewrapper}>
                <div className={styles.splinediv}>
                        <Spline scene="https://prod.spline.design/mDHt-5l7OTQzGN0K/scene.splinecode"/>
                </div>
                <Marquee
                speed={100}
                gradient={false}
                pauseOnHover={true}
                direction={"right"}
                >
                    <h1 className={styles.skillheading}><b>Web Development</b></h1>
                    <h1 className={styles.skillheading}><b> UI/UX </b></h1>
                    <h1 className={styles.skillheading}><b> MUSIC </b></h1>
                    <h1 className={styles.skillheading}><b> Robotics </b></h1>
                </Marquee>
                <Marquee
                speed={100}
                gradient={false}
                pauseOnHover={true}
                
                >
                    <h1 className={styles.skillheading}><b> Learning </b></h1>
                    <h1 className={styles.skillheading}><b> Dev Ops </b></h1>
                    <h1 className={styles.skillheading}><b> 3D Web Stuff </b></h1>
                    <h1 className={styles.skillheading}><b> Data Structures </b></h1>
                </Marquee>
            </div>
        </>
    )
}

export default Skillspage
