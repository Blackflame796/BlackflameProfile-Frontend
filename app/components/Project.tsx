"use client";

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
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
    github?: string;
    website?: string;
}

const Project: React.FC<ProjectProps> = ({ id, name, description, technologies, github, website }) => {
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.ProjectHeader}>
                {/* Spacer for grid balancing to keep title perfectly centered */}
                <div className={styles.HeaderSpacer} aria-hidden="true" />
                
                <h3 className={styles.ProjectTitle}>
                    <Link href={`/projects/${id}`} className={styles.StretchedLink}>
                        {name}
                    </Link>
                </h3>
                {(github || website) && (
                    <div className={styles.ProjectLinks}>
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.ProjectLink} onClick={(e) => e.stopPropagation()} aria-label="GitHub Repository">
                                <Github size={20} />
                            </a>
                        )}
                        {website && (
                            <a href={website} target="_blank" rel="noopener noreferrer" className={styles.ProjectLink} onClick={(e) => e.stopPropagation()} aria-label="Live Website">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                )}
                {!(github || website) && <div className={styles.HeaderSpacer} aria-hidden="true" />}
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
