import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle radial background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Fine grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="section-wrapper relative z-10 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="animate-fade-up delay-1">
            <div className="status-available mb-8">
              <span className="status-dot" />
              Building AI agents at BAPL
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-6 animate-fade-up delay-2">
            I build things with{' '}
            <span className="heading-italic">data</span>
            {' '}— and now I'm teaching{' '}
            <span className="heading-italic">AI to do it too.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-up delay-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Data analyst turned AI builder. I've spent years making sense of messy
            data and automating the boring stuff — now I'm designing AI agents that
            do the heavy lifting. Based in Brisbane, currently deep in the
            Microsoft Copilot Studio + Power Automate stack.
          </p>

          {/* Key chips */}
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-up delay-4">
            {['AI Agents', 'Copilot Studio', 'Power Automate', 'Power BI', 'SQL', 'Python'].map(
              (skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-5">
            <button onClick={() => scrollTo('#projects')} className="btn-primary">
              See What I've Built
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M7 7h10v10" />
              </svg>
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-secondary">
              Let's Talk
            </button>
          </div>
        </div>

        {/* Right side: quick stats */}
        <div className="mt-16 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up delay-6" style={{ borderTop: '1px solid var(--border)' }}>
          {[
            { value: '10+', label: 'AI agents in progress' },
            { value: '30%', label: 'Manual work automated' },
            { value: '$20K+', label: 'Cost savings delivered' },
            { value: '2M+', label: 'Records analysed' },
          ].map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter
                value={stat.value}
                className="font-display text-3xl md:text-4xl mb-1 block"
                style={{ color: 'var(--accent)' }}
              />
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
