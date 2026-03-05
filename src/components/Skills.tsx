import ScrollReveal from './ScrollReveal';

const skillGroups = [
  {
    title: 'Data & Analytics',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    skills: ['SQL Querying', 'Python Scripting', 'Data Modelling', 'Data Cleaning', 'Predictive Analysis', 'BigQuery Analytics'],
  },
  {
    title: 'Visualisation & Reporting',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    skills: ['Power BI', 'Dashboard Design', 'Data Visualisation', 'Business Reporting', 'DAX'],
  },
  {
    title: 'Automation & Integration',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    skills: ['Workflow Automation', 'Smartsheet', 'API Integration', 'Xero', 'Cloud Platforms'],
  },
  {
    title: 'AI & Emerging Tech',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M12 12v8M8 16h8" />
      </svg>
    ),
    skills: ['Databricks ML', 'Python (scikit-learn, pandas)', 'AI-Assisted Workflows', 'LLM Integration', 'Predictive Modelling'],
  },
  {
    title: 'Strategy & Communication',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    skills: ['Stakeholder Engagement', 'Process Optimisation', 'Strategic Planning', 'Project Coordination', 'Cross-functional Collaboration'],
  },
];

const tools = [
  'Power BI', 'SQL Server', 'Python', 'Databricks', 'Smartsheet', 'Xero',
  'Excel (Advanced)', 'BigQuery', 'Git / GitHub', 'VS Code', 'Jupyter', 'Azure',
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="section-wrapper">
      <ScrollReveal>
        <span className="section-label">Skills</span>
        <h2 className="section-heading mb-4">
          The <span className="heading-italic">toolkit</span> behind the results
        </h2>
        <p className="section-subtext mb-16">
          Technical depth paired with business acumen — structured for impact.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {skillGroups.map((group, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="card card-accent p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'var(--accent-dim)',
                    color: 'var(--accent)',
                  }}
                >
                  {group.icon}
                </div>
                <h3 className="font-display text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip" style={{ fontSize: '12px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Tools bar */}
      <ScrollReveal>
        <div
          className="p-6 rounded-xl"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
        >
          <p
            className="text-xs font-semibold tracking-wider uppercase mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Tools & Platforms
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-sm font-medium px-3 py-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Skills;
