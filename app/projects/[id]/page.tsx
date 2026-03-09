import React from "react";
import Link from "next/link";
import { getProject } from "../../lib/services";
import { ArrowLeft, ExternalLink } from "lucide-react";
import styles from "./project-detail.module.css";
import pageStyles from "../../page.module.css";
import sharedStyles from "../../shared.module.css";

interface Project {
  id: number | string;
  name: string;
  description: string;
  link?: string;
  technologies?: {
    id: number;
    name: string;
    icon_url?: string;
    link?: string;
  }[];
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let project: Project | null = null;
  
  try {
    project = await getProject(id);
  } catch (error) {
    console.error("Failed to fetch project:", error);
  }

  if (!project) {
    return (
      <div className={`${sharedStyles.animateFadeIn} ${styles.wrapper}`} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className={styles.ProjectDetailTitle}>404</h1>
          <p className={sharedStyles.DetailValue}>Project not found in the digital void.</p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/projects" className={pageStyles.LearnMoreButton}>
              Return to Reality
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${sharedStyles.animateFadeIn} ${styles.wrapper}`}>
      <Link href="/projects" className={styles.BackLink}>
        <ArrowLeft size={18} />
        Back to projects
      </Link>
      
      <header className={styles.ProjectDetailHeader}>
        <h1 className={styles.ProjectDetailTitle}>{project.name}</h1>
        <div className={sharedStyles.SkillsGrid}>
          {project.technologies?.map((tech) => (
            tech.link ? (
              <a 
                key={tech.id} 
                href={tech.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={sharedStyles.SkillPill}
              >
                {tech.icon_url && <img src={tech.icon_url} alt={tech.name} className={sharedStyles.SkillIcon} />}
                {tech.name}
              </a>
            ) : (
              <div key={tech.id} className={sharedStyles.SkillPill}>
                {tech.icon_url && <img src={tech.icon_url} alt={tech.name} className={sharedStyles.SkillIcon} />}
                {tech.name}
              </div>
            )
          ))}
        </div>
      </header>

      <div className={sharedStyles.GlassCard}>
        <div className={styles.DetailSection}>
          <span className={sharedStyles.DetailLabel}>Description</span>
          <div className={sharedStyles.DetailValue}>{project.description}</div>
        </div>

        {project.link && (
          <div className={styles.DetailSection}>
            <span className={sharedStyles.DetailLabel}>Live Project</span>
            <div className={sharedStyles.DetailValue}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={pageStyles.LearnMoreButton} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <ExternalLink size={18} />
                Visit Website
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
