import React from "react";
import styles from "./projects.module.css";
import { projData } from "./projdata";
import { width } from "@mui/system";

function Projects() {
    return (
        <>
            <div className={styles.projectwrap}>
                <div className={styles.introOverlay}>
                    <div className={styles.projheaderdiv}>
                        <h2 className={styles.projheader}>PROJECTS</h2>
                    </div>
                    <div className={styles.cardswrap}>
                            {projData.map((data) => {
                                console.log(data.src)
                                return (
                                    <div>
                                        <a href="#" className={styles.projcard}>
                                            <div
                                                style={{ background: `url(${data.src})`,backgroundPosition: "center", backgroundSize:"cover"}}
                                                className={styles.pictureholder}
                                            ></div>
                                            <h3 className={styles.cardname}>{data.name}</h3>
                                            <p className={styles.carddesc}>{data.desc}</p>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
