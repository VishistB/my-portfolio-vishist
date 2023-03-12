import React from "react";
import styles from "./Techskills.module.css";
function Technicalskills() {
    return (
        <>
            <div className={styles.TSpagewrapper}>
            {/* <svg className={styles.Voverlay} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V1080H1920V0ZM855.866 346L939.566 556H978.866L1063.17 346H1015.77L974.366 459.7C971.366 467.7 968.866 474.6 966.866 480.4C964.866 486.2 963.066 491.8 961.466 497.2C961.303 497.732 961.139 498.268 960.976 498.81C960 495.674 958.964 492.537 957.866 489.4C956.667 485.2 955.167 480.8 953.366 476.2C951.767 471.4 949.767 465.9 947.366 459.7L903.566 346H855.866Z" fill="rgb(13, 2, 31)"/>
</svg> */}
                <div className={styles.introOverlay}>
                    <div className={styles.skillheaderdiv}>
                        <h2 className={styles.skillheader}>TECHNICAL SKILLS</h2>
                    </div>
                    <div className={styles.techiconswrap}>
                        <div className={styles.iconsrow}>
                            <div className={styles.logobg}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                                />
                            </div>
                            <div className={styles.logobg}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                                />
                            </div>
                            <div className={styles.logobg}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"
                                />
                            </div>
                            <div className={styles.logobg}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                                />
                            </div>
                            <div className={styles.logobg}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                                />
                            </div>
                        </div>
                        <div className={styles.iconsrow}>
                            <div className={styles.logobg}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg"
                                />
                            </div>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                                />
                            </div>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                />
                            </div>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                />
                            </div>
                            <div className={styles.logobg}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
                                />
                            </div>
                        </div>
                        <div className={styles.iconsrow}>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg"
                                />
                            </div>
                            
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                />
                            </div>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                                />
                            </div>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                                />
                            </div>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
                                />
                            </div>
                        </div>
                        <div className={styles.iconsrow}>
                        <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                                />
                            </div>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                                />
                            </div>
                            <div className={styles.logobgt}>
                                <img
                                    className={styles.logoimg}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Technicalskills;
