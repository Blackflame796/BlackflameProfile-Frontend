"use client";

import React, { useEffect, useState } from 'react';
import styles from "./Preloader.module.css";
import clsx from "clsx";

interface PreloaderProps {
    fullScreen?: boolean;
    text?: string;
    className?: string;
    minimumDisplayTime?: number;
    isLoading?: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({
    fullScreen = true,
    text = '',
    className,
    minimumDisplayTime = 1500,
    isLoading = true
}) => {
    const [shouldRender, setShouldRender] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Automatically hide after minimumDisplayTime
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => setShouldRender(false), 300);
        }, minimumDisplayTime);
        
        return () => clearTimeout(timer);
    }, [minimumDisplayTime]);

    if (!shouldRender) return null;

    const loaderElement = (
        <div className={clsx(
            styles.LoaderWrapper,
            !isVisible && styles.Hidden
        )}>
            <span className={styles.Loader} />
            {text && <div className={styles.Text}>{text}</div>}
        </div>
    );

    if (fullScreen) {
        return (
            <div className={clsx(styles.Container, className)}>
                {loaderElement}
            </div>
        );
    }

    return loaderElement;
};

export default Preloader;