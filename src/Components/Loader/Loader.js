import React from 'react'
import styles from './Loader.module.css'
function Loader() {
    return (
        <>
            <div className={styles.loaderwrap}>
                <div className={styles.letters}>
                        <div className={styles.v}>V</div>
                        <div className={styles.n}>N</div>
                        <div className={styles.b}>B</div>
                </div>
                <div className={styles.loader}>
                    <div className={styles.completion}></div>
                </div>

            </div>
        </>
    )
}

export default Loader
