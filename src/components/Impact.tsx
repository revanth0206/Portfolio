import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const metrics = [
  {
    value: '10+',
    label: 'AI Agents Being Built',
    context: 'Copilot Studio agents across service delivery, HR, finance & analytics at BAPL',
  },
  {
    value: '30%',
    label: 'Manual Work Eliminated',
    context: 'Automated onboarding, rostering & payroll workflows at OZWIND',
  },
  {
    value: '$20K+',
    label: 'Prospecting Costs Saved',
    context: 'Market analysis across 85K+ companies at TechReady Blocks',
  },
  {
    value: '2M+',
    label: 'Records Crunched',
    context: 'Patent & inventor data mined for emerging tech identification',
  },
  {
    value: '4.6×',
    label: 'Viewer Retention Boost',
    context: 'Data-backed YouTube content strategy that actually worked',
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
            Not vanity metrics.{' '}
            <span className="heading-italic">Real outcomes.</span>
          </h2>
          <p className="section-subtext mx-auto">
            I measure every project by what changed after I was done — not what I was busy doing.
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
              <AnimatedCounter value={m.value} className="metric-value mb-3 block" />
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
