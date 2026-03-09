"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Project.module.css';

interface Tech {
    name: string;
    icon: string;
    link: string;
}

interface ProjectProps {
    id: number | string;
    name: string;
    description: string;
    technologies?: any[];
}

const Project: React.FC<ProjectProps> = ({ id, name, description, technologies }) => {
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.ProjectHeader}>
                <h3 className={styles.ProjectTitle}>
                    <Link href={`/projects/${id}`} className={styles.StretchedLink}>
                        {name}
                    </Link>
                </h3>
            </div>
            <p className={styles.ProjectDesc}>{description}</p>
            <div className={styles.TechPills}>
                {technologies?.map((tech) => (
                    <div key={tech.id} className={styles.TechWrapper}>
                        {tech.link ? (
                            <a 
                                href={tech.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.TechLinkPill}
                            >
                                {tech.icon_url && (
                                    <img
                                        src={tech.icon_url}
                                        alt={tech.name}
                                        className={styles.TechIcon}
                                    />
                                )}
                                {tech.name}
                            </a>
                        ) : (
                            <div className={styles.TechLinkPill}>
                                {tech.icon_url && (
                                    <img
                                        src={tech.icon_url}
                                        alt={tech.name}
                                        className={styles.TechIcon}
                                    />
                                )}
                                {tech.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
