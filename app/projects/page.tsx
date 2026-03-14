export const dynamic = 'force-dynamic';

import Project from "../components/Project";
import { getProjects, Project as APIProject } from "../lib/services";
import styles from "./projects.module.css";
import pageStyles from "../page.module.css";
import sharedStyles from "../shared.module.css";

export default async function ProjectsPage() {
  let projects: APIProject[] = [];
  try {
    projects = await getProjects();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return (
    <div className={`${sharedStyles.animateFadeIn} ${styles.wrapper}`}>
      <h1 className={sharedStyles.SectionTitle}>All Projects</h1>
      <div className={styles.grid}>
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
          <p style={{ color: 'var(--nav-color)' }}>No projects found.</p>
        )}
      </div>
    </div>
  );
}
