"use client";

import { useEffect, useState } from "react";
import { getProfiles } from "../lib/services";
import { Mail, Github, Send, Linkedin, Award } from "lucide-react";
import styles from "./about.module.css";
import pageStyles from "../page.module.css";
import sharedStyles from "../shared.module.css";

export default function AboutPage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    getProfiles().then(data => {
      if (data && data.length > 0) setProfile(data[0]);
    });
  }, []);

  if (!profile) return null;

  return (
    <div className={`${sharedStyles.animateFadeIn} ${styles.wrapper}`}>
      <header className={styles.header}>
        <h1 className={pageStyles.GreetingTitle} style={{ fontSize: '3.5rem' }}>About Me</h1>
        <p className={styles.specialization}>
          {profile.specialization}
        </p>
      </header>

      <div className={sharedStyles.GlassCard} style={{ padding: '3rem', marginBottom: '4rem' }}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={sharedStyles.DetailLabel}>Experience</span>
            <div className={sharedStyles.DetailValue} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <Award size={20} />
              {profile.experience_years}+ Years Professional
            </div>
          </div>
          <div className={styles.statItem}>
            <span className={sharedStyles.DetailLabel}>Location</span>
            <div className={sharedStyles.DetailValue} style={{ justifyContent: 'center' }}>Remote / Worldwide</div>
          </div>
        </div>

        <div className={styles.storySection}>
          <span className={sharedStyles.DetailLabel}>The Story</span>
          <div className={`${styles.storyText} ${sharedStyles.DetailValue}`}>
            {profile.description}
          </div>
        </div>
      </div>

      <div className={sharedStyles.SectionTitle}>Get In Touch</div>
      <div className={styles.contactsGrid}>
        {profile.email && (
          <a href={`mailto:${profile.email}`} className={`${sharedStyles.SkillPill} ${styles.contactBadge}`}>
            <Mail size={18} /> {profile.email}
          </a>
        )}
        {profile.telegram && (
          <a href={`https://t.me/${profile.telegram}`} target="_blank" rel="noopener noreferrer" className={`${sharedStyles.SkillPill} ${styles.contactBadge}`}>
            <Send size={18} /> @{profile.telegram}
          </a>
        )}
        {profile.github && (
          <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className={`${sharedStyles.SkillPill} ${styles.contactBadge}`}>
            <Github size={18} /> GitHub
          </a>
        )}
        {profile.linked_in && (
          <a href={profile.linked_in} target="_blank" rel="noopener noreferrer" className={`${sharedStyles.SkillPill} ${styles.contactBadge}`}>
            <Linkedin size={18} /> LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
