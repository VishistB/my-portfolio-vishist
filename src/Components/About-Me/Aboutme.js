import React, { useEffect } from 'react'
import styles from './aboutme.module.css'
import Spline from '@splinetool/react-spline';
import {motion} from 'framer-motion'
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimation } from 'framer-motion';

function Aboutme() {
    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)
    const animation=useAnimation()
    useEffect(()=>{
        if(isInView1){
            animation.start({
                opacity: 1,
                transition:{type:'spring', duration: 2}
            });
        }
        else if(!isInView1){
            animation.start({
                opacity: 0,
                transition:{type:'spring', duration: 2}
            });
        }
    },[isInView1])
    
    return (
        <>
        
            <div className={styles.Aboutmewrap}>

                <div className={styles.introOverlay}>
                    <div className={styles.abtmeheaderdiv}>
                        <h2 className={styles.abtmeheader}>ABOUT ME</h2>
                    </div>
                    <div className={styles.abtrow}>
                    <div ref={ref1} className={styles.abtpara}>
                        <motion.p
                        initial={{opacity:0}}
                        animate={animation}
                        >
                            Hi, My name is Vishist Bhagabati.<br/> 
                            I'm a Computer Engineering Undergrad from<br/>
                            Thapar Institute of Engineering and Technology.<br/>
                            I got into tech through my school's Robotics Club
                            and have been exploring different domains ever since...<br/>
                            At the moment I am a part of Microsoft Learn Student Chapter in my college.
                            <br/>
                            <br/>  
                        </motion.p>
                        <motion.p
                        initial={{opacity:0}}
                        animate={animation}
                        >
                            I have primarily been into Website Development<br/>
                            using frameworks such as React and Django 
                            but I've tried my hands on basic App Development as well
                            and just recently started getting to know about Docker.<br/>
                            <br/>
                            Apart from tech, I make my own music too. <br/>
                            my songs are up on streaming services
                            such as Spotify and Apple music.
                        </motion.p>
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
