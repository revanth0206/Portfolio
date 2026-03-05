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
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,168,83,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Fine grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(240,237,232,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,232,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="section-wrapper relative z-10 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="animate-fade-up delay-1">
            <div className="status-available mb-8">
              <span className="status-dot" />
              Available for opportunities in Australia
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-6 animate-fade-up delay-2">
            I turn messy data into{' '}
            <span className="heading-italic">clear decisions</span>{' '}
            and manual processes into{' '}
            <span className="heading-italic">automated systems.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-up delay-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Data & Business Analyst based in Brisbane, Australia. I build dashboards,
            automate workflows, and deliver insights that save real money — with a
            growing focus on AI-driven solutions.
          </p>

          {/* Key chips */}
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-up delay-4">
            {['Power BI', 'SQL', 'Python', 'Databricks', 'Workflow Automation', 'AI & ML'].map(
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
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M7 7h10v10" />
              </svg>
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-secondary">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right side: quick stats */}
        <div className="mt-16 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up delay-6" style={{ borderTop: '1px solid var(--border)' }}>
          {[
            { value: '30%', label: 'Manual work reduced' },
            { value: '$20K+', label: 'Cost savings delivered' },
            { value: '2M+', label: 'Records analysed' },
            { value: '4.6×', label: 'Viewer retention boost' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl mb-1" style={{ color: 'var(--accent)' }}>
                {stat.value}
              </p>
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
