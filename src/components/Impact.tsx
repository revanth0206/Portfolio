import ScrollReveal from './ScrollReveal';

const metrics = [
  {
    value: '30%',
    label: 'Reduction in Manual HR Processing',
    context: 'Automated onboarding, rostering & payroll at OZWIND',
  },
  {
    value: '$20K+',
    label: 'Prospecting Cost Savings',
    context: 'Market analysis across 85K+ companies at TechReady Blocks',
  },
  {
    value: '2M+',
    label: 'Records Analysed',
    context: 'Patent & inventor data for emerging tech identification',
  },
  {
    value: '4.6×',
    label: 'Viewer Retention Increase',
    context: 'Data-backed YouTube performance optimisation',
  },
  {
    value: '15%',
    label: 'Logistics Cost Reduction',
    context: 'Data-driven IT rollout planning at NRI Australia',
  },
];

const Impact = () => (
  <section id="impact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
    <div className="section-wrapper">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-label justify-center">
            Impact
          </span>
          <h2 className="section-heading">
            Numbers that <span className="heading-italic">actually matter</span>
          </h2>
          <p className="section-subtext mx-auto">
            Every role I take, I measure success by real business outcomes — not vanity metrics.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {metrics.map((m, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div
              className={`card card-accent p-8 text-center h-full ${
                i >= 3 ? 'sm:col-span-1' : ''
              }`}
            >
              <p className="metric-value mb-3">{m.value}</p>
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {m.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {m.context}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Impact;
