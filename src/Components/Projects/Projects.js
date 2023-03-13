import React from 'react'
import styles from './projects.module.css'

function Projects() {
    return (
        <>
            <div className={styles.projectwrap}>
                <div className={styles.introOverlay}>
                <div className={styles.projheaderdiv}>
                        <h2 className={styles.projheader}>
                            PROJECTS
                        </h2>
                        <div className={styles.cardswrap}>
                            <div>
                            <div className={styles.projcard}>
                                <img className={styles.projpic} src='https://res.cloudinary.com/dibuy1ztk/image/upload/v1678733072/Portfolio%20Website/Screenshot_1656531315_py5vqf.png'/>
                            </div>
                            
                            </div>
                            <div>
                            <div className={styles.projcard}>
                            <img className={styles.projpic} src='https://res.cloudinary.com/dibuy1ztk/image/upload/v1678733417/Portfolio%20Website/Tmaps_a2m2oc.png'/>
                            </div>
                            </div>
                            <div>
                            <div className={styles.projcard}>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
