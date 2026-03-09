import React from 'react';
import styles from './Terminal.module.css';

interface TerminalProps {
    children?: React.ReactNode;
    title?: string;
}

const Terminal = ({ children, title = "terminal" }: TerminalProps) => {
    return (
        <div className={styles.TerminalContainer}>
            <div className={styles.TerminalGlow}></div>
            <div className={styles.TerminalWindow}>
                <div className={styles.TerminalHeader}>
                    <div className={styles.WindowButtons}>
                        <div className={`${styles.Button} ${styles.Close}`}></div>
                        <div className={`${styles.Button} ${styles.Minimize}`}></div>
                        <div className={`${styles.Button} ${styles.Maximize}`}></div>
                    </div>
                    <div className={styles.TerminalTitle}>{title}</div>
                </div>
                <div className={styles.TerminalBody}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Terminal;
