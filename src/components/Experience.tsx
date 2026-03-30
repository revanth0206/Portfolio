import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    role: 'Business Analyst',
    company: 'Business Analysis Pvt Ltd (BAPL)',
    location: 'Brisbane, QLD',
    period: 'Mar 2026 – Present',
    headline: 'Building 10+ AI agents to run business operations autonomously',
    points: [
      'Designing AI agents in Copilot Studio — each one scoped to a specific business area with its own data pipeline and security boundary',
      'Wiring up Google Drive to Microsoft 365 through Graph Connectors so agents can read company knowledge without moving files',
      'Setting up Entra ID security groups so the right people access the right agents — no exceptions',
      'Mapping out agent-to-agent orchestration in Power Automate so workflows can hand off across teams automatically',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'OZWIND (Q Labour Group Subsidiary)',
    location: 'Brisbane, QLD',
    period: 'Jul 2025 – Sep 2025',
    headline: 'Cut manual HR processing by 30% through automation',
    points: [
      'Built a Smartsheet–Xero integration that gave the team actual visibility into operations for the first time',
      'Shipped a company website in one day using AI-assisted workflows — it pulled 120+ leads in month one',
      'Ran cross-team workshops to nail down requirements and write SOPs that people actually followed',
      'Combined analytics with automation to fix workforce management headaches',
    ],
  },
  {
    role: 'Business Data Analyst',
    company: 'TechReady Blocks',
    location: 'Sydney, NSW',
    period: 'Feb 2025 – Jul 2025',
    headline: 'Saved $20K+ in prospecting costs by digging through 85K+ companies',
    points: [
      'Built Power BI dashboards that executives actually used to prioritise investments',
      'Mined 2M+ patent records to spot emerging technologies before the competition',
      'Grew YouTube viewer retention by 4.6× with data-backed content strategy',
      'Translated technical data outputs into language that business teams could act on',
    ],
  },
  {
    role: 'Data Analyst (Power BI Project)',
    company: 'The Data Analytics Institute',
    location: 'Sydney, NSW',
    period: 'Oct 2024 – Feb 2025',
    headline: 'Built an interactive dashboard across 10,000+ support tickets',
    points: [
      'Got deep into DAX — drill-through actions, dynamic visuals, the lot',
      'Found backlog and response time bottlenecks that were costing real time',
      'Proposed escalation redesigns that could cut response times by 15–20%',
    ],
  },
  {
    role: 'IT Operations Consultant',
    company: 'NRI Australia & New Zealand',
    location: 'Brisbane, QLD',
    period: 'Nov 2022 – May 2023',
    headline: 'Reduced logistics costs by 15% with data-driven planning',
    points: [
      'Built real-time dashboards in Excel and Power BI for tracking project delivery',
      'Used deployment data to forecast what resources we\'d actually need',
      'Kept clients, engineers, and PMs aligned — which is harder than any technical work',
    ],
  },
  {
    role: 'Data Reporting Analyst',
    company: 'Bharath Institute of Higher Education & Research',
    location: 'Chennai, India',
    period: 'Jan 2021 – May 2022',
    headline: 'Improved student retention by 10% and employment outcomes by 15%',
    points: [
      'Built Power BI dashboards tracking student engagement and academic performance',
      'Connected data insights with institutional goals across academic and careers teams',
      'Delivered analytics to senior leadership for funding proposals and strategic planning',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
    <div className="section-wrapper">
      <ScrollReveal>
        <span className="section-label">Experience</span>
        <h2 className="section-heading mb-4">
          The{' '}
          <span className="heading-italic">path here</span>
        </h2>
        <p className="section-subtext mb-16">
          Started with spreadsheets in Chennai. Now building AI agents in Brisbane. Every role taught me something I still use.
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
