import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    role: 'Data Analyst',
    company: 'OZWIND (Q Labour Group Subsidiary)',
    location: 'Brisbane, QLD',
    period: 'Jul 2025 – Sep 2025',
    headline: 'Automated HR workflows, reducing manual processing by 30%',
    points: [
      'Designed integrated Smartsheet–Xero workspace improving visibility and reporting efficiency',
      'Built a company website with AI-assisted workflows, capturing 120+ expressions of interest in month one',
      'Facilitated cross-team workshops to gather requirements and define SOPs',
      'Combined analytics and automation to optimise workforce management',
    ],
  },
  {
    role: 'Business Data Analyst',
    company: 'TechReady Blocks',
    location: 'Sydney, NSW',
    period: 'Feb 2025 – Jul 2025',
    headline: 'Delivered $20K+ in cost savings through market analysis across 85K+ companies',
    points: [
      'Built executive Power BI dashboards to prioritise investments and track strategy',
      'Analysed 2M+ patent and inventor records to uncover emerging technologies',
      'Achieved 4.6× YouTube viewer retention through data-backed engagement strategies',
      'Translated technical outputs into business outcomes for cross-functional teams',
    ],
  },
  {
    role: 'Data Analyst (Power BI Project)',
    company: 'The Data Analytics Institute',
    location: 'Sydney, NSW',
    period: 'Oct 2024 – Feb 2025',
    headline: 'Built interactive dashboard analysing 10,000+ support tickets',
    points: [
      'Used advanced DAX calculations, drill-through actions, and dynamic visuals',
      'Identified process bottlenecks in backlog and response times',
      'Proposed escalation redesigns projected to improve response times by 15–20%',
    ],
  },
  {
    role: 'IT Operations Consultant',
    company: 'NRI Australia & New Zealand',
    location: 'Brisbane, QLD',
    period: 'Nov 2022 – May 2023',
    headline: 'Reduced logistics costs by 15% through data-driven planning',
    points: [
      'Built real-time Excel and Power BI dashboards for project delivery tracking',
      'Analysed deployment data to forecast resource requirements',
      'Coordinated cross-departmental communication between clients, engineers, and PMs',
    ],
  },
  {
    role: 'Data Reporting Analyst',
    company: 'Bharath Institute of Higher Education & Research',
    location: 'Chennai, India',
    period: 'Jan 2021 – May 2022',
    headline: 'Improved student retention by 10% and employment outcomes by 15%',
    points: [
      'Designed Power BI dashboards tracking student engagement and performance',
      'Aligned data insights with institutional goals across academic and careers teams',
      'Delivered analytics to senior leadership for strategic decisions and funding proposals',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
    <div className="section-wrapper">
      <ScrollReveal>
        <span className="section-label">Experience</span>
        <h2 className="section-heading mb-4">
          Where I've <span className="heading-italic">made an impact</span>
        </h2>
        <p className="section-subtext mb-16">
          From Chennai to Brisbane — every role has been about turning data into decisions.
        </p>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="timeline-line hidden md:block" style={{ left: '7px' }} />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-8">
                  <div className="timeline-dot" />
                </div>

                {/* Content card */}
                <div className="card card-accent p-6 md:p-8 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl mb-1">{exp.role}</h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap self-start flex-shrink-0"
                      style={{
                        color: 'var(--accent)',
                        background: 'var(--accent-dim)',
                        border: '1px solid var(--accent-mid)',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Impact headline */}
                  <p
                    className="text-sm font-semibold mb-4 pb-4"
                    style={{
                      color: 'var(--accent)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    ↗ {exp.headline}
                  </p>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: 'var(--text-muted)' }}
                        />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
