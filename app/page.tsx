export const dynamic = 'force-dynamic';

import styles from "./page.module.css";
import Terminal from "./components/Terminal/Terminal";
import { TerminalLine, TerminalPrompt, TerminalCommand, TerminalResponse, TerminalCursor } from "./components/Terminal/TerminalText";
import Link from "next/link";
import Project from "./components/Project";
import { getProjects, getProfiles, getTechnologies, Project as APIProject } from "./lib/services";

const Greeting = ({ profile }: { profile: any }) => (
  <div className={styles.GreetingContainer}>
    <h1 className={styles.GreetingTitle}>Hi, I'm {profile?.first_name || "Pavel"}</h1>
    <p className={styles.GreetingSubtitle}>
      {profile?.description || "Backend Developer with 3 years of experience building high-load systems and innovative web solutions. Welcome to my digital world."}
    </p>
  </div>
);

import sharedStyles from "./shared.module.css";

const TechnicalSkills = ({ technologies }: { technologies: any[] }) => {
  return (
    <div className={styles.SkillsContainer}>
      <h2 className={sharedStyles.SectionTitle}>Technical Stack</h2>
      <div className={styles.SkillsGrid}>
        {technologies.length > 0 ? (
          technologies.map((tech) => (
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
          ))
        ) : null}
      </div>
    </div>
  );
};

export default async function Home() {
  const [projectsData, profileData, technologiesData] = await Promise.all([
    getProjects(),
    getProfiles(),
    getTechnologies()
  ]);

  const projects = projectsData || [];
  const profile = profileData?.[0] || null;
  const technologies = technologiesData || [];

  return (
    <div className={styles.main}>
      <section className={styles.HeroSection}>
        <Greeting profile={profile} />
        <Terminal>
          <TerminalLine>
            <TerminalPrompt />
            <TerminalCommand>whoami</TerminalCommand>
          </TerminalLine>
          <TerminalLine>
            <TerminalResponse>
              {profile?.username || "blackflame"} — {profile?.specialization || "Backend Developer"}
            </TerminalResponse>
          </TerminalLine>
          <TerminalLine>
            <TerminalPrompt />
            <TerminalCommand>ls skills/</TerminalCommand>
          </TerminalLine>
          <TerminalLine>
            <TerminalResponse>
              {technologies.map(t => t.name).join("  ")}
            </TerminalResponse>
          </TerminalLine>
          <TerminalLine>
            <TerminalPrompt />
            <TerminalCursor />
          </TerminalLine>
        </Terminal>
      </section>

      <TechnicalSkills technologies={technologies} />
      
      <div className={styles.ProjectsSection}>
        <h2 className={sharedStyles.SectionTitle}>Projects</h2>
        <div className={styles.ProjectGrid}>
          {projects.length > 0 ? (
            projects.map((project) => (
              <Project 
                key={project.id} 
                id={project.id}
                name={project.name} 
                description={project.description} 
                technologies={project.technologies} 
                github={project.github}
                website={project.website}
              />
            ))
          ) : (
            <p style={{ color: 'var(--nav-color)', textAlign: 'center' }}>No projects found.</p>
          )}
        </div>
        <div className={styles.LearnMoreContainer}>
          <Link href="/projects" className={styles.LearnMoreButton}>
             Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
