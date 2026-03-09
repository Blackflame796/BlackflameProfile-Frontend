import React from 'react';
import styles from './Terminal.module.css';

export const TerminalPrompt = ({ char = "$" }) => (
    <span className={styles.Prompt}>
        {char}
    </span>
);

export const TerminalCommand = ({ children }: { children: React.ReactNode }) => (
    <span className={styles.Command}>{children}</span>
);

export const TerminalResponse = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.Response}>{children}</div>
);

export const TerminalLine = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.Line}>{children}</div>
);

export const TerminalCursor = () => (
    <span className={styles.Cursor}>_</span>
);
