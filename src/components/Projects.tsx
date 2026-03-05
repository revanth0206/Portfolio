import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'Q Labour Group — Company Website',
    subtitle: 'AI-Assisted Development · Web Design · Dynamic Forms',
    image: null,
    liveUrl: 'https://qlabourgroup.com.au/',
    description:
      'Developed the complete company website for Q Labour Group (OZWIND\'s parent company) using AI-assisted workflows. Designed and launched the site within a single day, integrating dynamic forms for lead capture and expression of interest collection.',
    outcomes: [
      'Built and deployed a production website in just 1 day using AI-assisted development',
      'Captured 120+ expressions of interest within the first month of launch',
      'Integrated dynamic forms streamlining client and candidate onboarding',
      'Established online presence across Brisbane, Gold Coast & Sunshine Coast',
    ],
    tags: ['AI-Assisted Development', 'Web Design', 'Dynamic Forms', 'Lead Generation'],
    featured: true,
  },
  {
    title: 'Customer Support Cases Dashboard',
    subtitle: 'Power BI · DAX · Data Visualisation',
    image: '/images/project-support-dashboard.png',
    liveUrl: null,
    description:
      'Analysed 10,000+ support tickets to uncover resolution trends by severity, region, and support tier. Built drill-through visuals and dynamic filtering to empower stakeholders with self-service insights.',
    outcomes: [
      'Identified backlog bottlenecks across quarterly cycles',
      'Proposed escalation redesigns projected to cut response times by 15–20%',
      'Delivered a self-service analytics model for managers to monitor KPIs',
    ],
    tags: ['Power BI', 'DAX', 'Data Analysis', 'Stakeholder Reporting'],
    featured: false,
  },
  {
    title: 'Web Marketing Analytics Dashboard',
    subtitle: 'Power BI · Web Analytics · KPI Tracking',
    image: '/images/project-marketing-dashboard.png',
    liveUrl: null,
    description:
      'Built a comprehensive web marketing dashboard tracking 418K+ sessions, bounce rates, pageviews, and device breakdowns. Provided multi-tab navigation for cockpit views, sessions, pageviews, and load time analysis.',
    outcomes: [
      'Tracked 325K+ unique pageviews across desktop, mobile, and tablet',
      'Identified top-performing pages and geographic traffic distribution',
      'Enabled data-driven content and channel optimisation decisions',
    ],
    tags: ['Power BI', 'Web Analytics', 'Marketing', 'KPI Dashboards'],
    featured: false,
  },
  {
    title: 'Woolworths Sales Analysis Report',
    subtitle: 'Power BI · Sales Analytics · Profit Margin Analysis',
    image: '/images/project-sales-dashboard.png',
    liveUrl: null,
    description:
      'Designed a sales performance dashboard covering $1.35M+ in total sales across NSW and Victoria. Analysed profit margins by city, sales by team, category breakdowns, and year-over-year trends.',
    outcomes: [
      'Revealed $325K total profit with 12.7% overall margin across regions',
      'Identified top-performing teams and employees driving revenue',
      'Surfaced loss-making locations for strategic cost review',
    ],
    tags: ['Power BI', 'Sales Analytics', 'Profit Analysis', 'Business Intelligence'],
    featured: false,
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="section-wrapper">
      <ScrollReveal>
        <span className="section-label">Projects</span>
        <h2 className="section-heading mb-4">
          Work that <span className="heading-italic">speaks for itself</span>
        </h2>
        <p className="section-subtext mb-16">
          From full websites built in a day with AI to dashboards analysing millions of records.
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
                    Featured
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: '#5FBF7A15',
                      color: '#5FBF7A',
                      border: '1px solid #5FBF7A30',
                    }}
                  >
                    Live Website
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

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.liveUrl!}
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
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip" style={{ fontSize: '11px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className={`${i % 2 === 0 ? 'md:order-2' : ''}`}>
                  {project.image && (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                <div className={`flex flex-col justify-center ${i % 2 === 0 ? 'md:order-1' : ''}`}>
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

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip" style={{ fontSize: '11px' }}>
                        {tag}
                      </span>
                    ))}
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
