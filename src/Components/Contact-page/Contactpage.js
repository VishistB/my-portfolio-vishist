import React from "react";
import styles from "./contactpage.module.css";

function Contactpage() {
    return (
        <>
            <div className={styles.contactwrapper}>
                <div className={styles.introOverlay}>
                    <div className={styles.connectheaderdiv}>
                        <h2 className={styles.connectheader}>
                            CONNECT WITH ME
                        </h2>
                    </div>
                    <div className={styles.horizontalwrap}>
                        <div className={styles.formwrap}>
                            <form
                                className={styles.uform}
                                action="#"
                                method="POST"
                            >
                                <input
                                    className={styles.inp}
                                    type="text"
                                    name="username"
                                    placeholder="Name"
                                    autoComplete="off"
                                    required
                                />
                                <input
                                    className={styles.inp}
                                    type="email"
                                    name="email"
                                    placeholder="XYZ@email.com"
                                    autoComplete="off"
                                    required
                                />
                                <textarea
                                    className={styles.inpa}
                                    name="message"
                                    autoComplete="off"
                                    maxLength={1000}
                                    required
                                ></textarea>
                                <input className={styles.submit} type="submit" name="submit" value="SUBMIT"/>
                            </form>
                        </div>
                        <div className={styles.resume}>
                            <a href="#">
                                <img
                                    src="https://snipstock.com/assets/cdn/png/9158b40e7bdbc9f91c717998388bd27f.png"
                                    width="300px"
                                />
                            </a>
                            <h3>
                                <b>Resume</b>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactpage;
