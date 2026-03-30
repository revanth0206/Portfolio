import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'BAPL AI Agent Architecture',
    subtitle: 'Copilot Studio · Power Automate · Graph Connectors · Entra ID',
    image: null,
    liveUrl: null,
    description:
      'Designing and deploying 10+ AI agents for a consulting firm — each one scoped to a specific business function (HR, finance, service delivery, analytics). The tricky part: all company knowledge lives in Google Drive, so I\'m building the data pipeline through Graph Connectors into Microsoft 365, with folder-level isolation so each agent only sees what it should. Security is handled through Entra ID groups.',
    outcomes: [
      'Architected a scalable pattern: one connector per agent, scoped to specific folder IDs',
      'Designed role-based access control so only the right team can use each agent',
      'Planning agent-to-agent orchestration via Power Automate for cross-functional handoffs',
      'Built a learning framework and documentation set for the entire project',
    ],
    tags: ['Copilot Studio', 'Power Automate', 'Graph Connectors', 'Entra ID', 'Google Cloud'],
    featured: true,
  },
  {
    title: 'Q Labour Group — Company Website',
    subtitle: 'AI-Assisted Development · Web Design · Dynamic Forms',
    image: null,
    liveUrl: 'https://qlabourgroup.com.au/',
    description:
      'Built a full company website in a single day using AI-assisted workflows. Not a template — a proper site with dynamic forms for lead capture and expression of interest collection. It went from "we need a website" to live in under 24 hours.',
    outcomes: [
      'Designed, built, and deployed in just 1 day with AI-assisted development',
      '120+ expressions of interest captured in the first month',
      'Dynamic forms streamlined both client and candidate onboarding',
      'Established online presence across Brisbane, Gold Coast & Sunshine Coast',
    ],
    tags: ['AI-Assisted Dev', 'Web Design', 'Lead Generation'],
    featured: false,
  },
  {
    title: 'Customer Support Cases Dashboard',
    subtitle: 'Power BI · DAX · Data Visualisation',
    image: '/images/project-support-dashboard.png',
    liveUrl: null,
    description:
      'Dug into 10,000+ support tickets to find where things were breaking down — which severity levels were bottlenecked, which regions were underserved, and where escalation paths were failing. Built drill-through visuals so managers could self-serve instead of asking me every time.',
    outcomes: [
      'Found quarterly backlog patterns that nobody had noticed',
      'Proposed escalation redesigns projected to cut response times by 15–20%',
      'Gave managers a self-service dashboard so they could stop waiting on reports',
    ],
    tags: ['Power BI', 'DAX', 'Data Analysis'],
    featured: false,
  },
  {
    title: 'Web Marketing Analytics Dashboard',
    subtitle: 'Power BI · Web Analytics · KPI Tracking',
    image: '/images/project-marketing-dashboard.png',
    liveUrl: null,
    description:
      'Tracked 418K+ sessions worth of web traffic — bounce rates, pageviews, device breakdowns, the works. Multi-tab dashboard with cockpit views for quick decisions and deep-dive tabs for when the marketing team wanted specifics.',
    outcomes: [
      'Tracked 325K+ unique pageviews across desktop, mobile, and tablet',
      'Pinpointed the top-performing pages and where traffic was actually coming from',
      'Gave the marketing team data to back their content and channel decisions',
    ],
    tags: ['Power BI', 'Web Analytics', 'Marketing'],
    featured: false,
  },
  {
    title: 'Woolworths Sales Analysis Report',
    subtitle: 'Power BI · Sales Analytics · Profit Margin Analysis',
    image: '/images/project-sales-dashboard.png',
    liveUrl: null,
    description:
      'Analysed $1.35M+ in sales across NSW and Victoria — profit margins by city, team performance, category breakdowns, and year-over-year trends. The goal: find where money was being made and where it was being quietly lost.',
    outcomes: [
      'Revealed $325K total profit with 12.7% margin across regions',
      'Identified which teams and employees were actually driving revenue',
      'Surfaced loss-making locations that needed a strategic rethink',
    ],
    tags: ['Power BI', 'Sales Analytics', 'Business Intelligence'],
    featured: false,
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="section-wrapper">
      <ScrollReveal>
        <span className="section-label">Projects</span>
        <h2 className="section-heading mb-4">
          Stuff I've{' '}
          <span className="heading-italic">actually built</span>
        </h2>
        <p className="section-subtext mb-16">
          From AI agents that run business operations to dashboards that changed how teams make decisions.
        </p>
      </ScrollReveal>

      <div className="space-y-20">
        {projects.map((project, i) => (
          <ScrollReveal key={i} delay={0.1}>
            {project.featured ? (
              <div
                className="card card-accent p-8 md:p-10"
                style={{
                  borderColor: 'var(--accent-mid)',
                  background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-elevated))',
                }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: 'var(--accent-dim)',
                      color: 'var(--accent)',
                      border: '1px solid var(--accent-mid)',
                    }}
                  >
                    Current Project
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: '#8b5cf615',
                      color: '#a78bfa',
                      border: '1px solid #8b5cf630',
                    }}
                  >
                    AI Agents
                  </span>
                </div>

                <p
                  className="text-xs font-semibold tracking-wider uppercase mb-3"
                  style={{ color: 'var(--accent)' }}
                >
                  {project.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl mb-4">
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6 max-w-3xl"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {project.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: 'var(--accent)' }}
                      />
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip" style={{ fontSize: '11px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className={`${project.image ? 'grid md:grid-cols-2 gap-8 items-start' : 'card card-accent p-8 md:p-10'}`}>
                {project.image && (
                  <div className={`${i % 2 === 0 ? 'md:order-2' : ''}`}>
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.subtitle}`}
                        loading="lazy"
                        width="600"
                        height="400"
                        decoding="async"
                      />
                    </div>
                  </div>
                )}

                <div className={`flex flex-col justify-center ${project.image && i % 2 === 0 ? 'md:order-1' : ''}`}>
                  <p
                    className="text-xs font-semibold tracking-wider uppercase mb-3"
                    style={{ color: 'var(--accent)' }}
                  >
                    {project.subtitle}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl mb-4">
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {project.outcomes.map((outcome, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                        />
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: '13px', padding: '10px 20px' }}
                      >
                        Visit Live Site
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17l9.2-9.2M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip" style={{ fontSize: '11px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
