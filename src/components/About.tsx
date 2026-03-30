import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-wrapper">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Photo column */}
          <ScrollReveal className="md:col-span-2">
            <div
              className="aspect-[3/4] rounded-2xl overflow-hidden relative"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
              }}
            >
              {/*
                ===================================================
                REVANTH: Replace the src below with your headshot.
                Put your photo in /public/images/headshot.jpg
                ===================================================
              */}
              <img
                src="/images/headshot.jpg"
                alt="Revanth Bethu — Data & Business Analyst based in Brisbane, Australia"
                className="w-full h-full object-cover"
                width="400"
                height="533"
                decoding="async"
                onError={(e) => {
                  // Fallback if no photo yet
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--text-muted);gap:12px;padding:24px;text-align:center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <span style="font-size:13px;line-height:1.5">Add your headshot at<br/><code style="font-size:11px;color:var(--accent)">/public/images/headshot.jpg</code></span>
                    </div>
                  `;
                }}
              />
              {/* Accent corner */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, var(--accent) 50%)',
                  opacity: 0.15,
                }}
              />
            </div>

            {/* Quick info below photo */}
            <div className="mt-6 space-y-3">
              {[
                { icon: '📍', text: 'Brisbane, Australia' },
                { icon: '🎓', text: "Master's in IT (Data Analytics) — Griffith University" },
                { icon: '✅', text: 'Australian Resident — Full Work Rights' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Bio column */}
          <ScrollReveal delay={0.15} className="md:col-span-3">
            <span className="section-label">About Me</span>
            <h2 className="section-heading">
              From raw data to <span className="heading-italic">real outcomes</span>
            </h2>

            <div className="space-y-4 mb-10" style={{ color: 'var(--text-secondary)' }}>
              <p className="text-base leading-relaxed">
                I'm Revanth — a Data & Business Analyst who finds the story hiding in
                spreadsheets, databases, and messy workflows. I started with a Computer
                Science degree in India, moved to Brisbane to complete my Master's in
                Information Technology (Data Analytics) at Griffith University, and have
                since built a track record of delivering measurable impact across every
                role I've held.
              </p>
              <p className="text-base leading-relaxed">
                My work sits at the intersection of <strong style={{ color: 'var(--text-primary)' }}>analytics</strong>,{' '}
                <strong style={{ color: 'var(--text-primary)' }}>process automation</strong>, and{' '}
                <strong style={{ color: 'var(--text-primary)' }}>business strategy</strong>.
                Whether it's cutting 30% off manual HR processing, saving $20K+ in prospecting costs
                through market analysis, or building dashboards that executives actually use — I focus
                on outcomes that move the needle.
              </p>
              <p className="text-base leading-relaxed">
                Right now, I'm deepening my skills in AI and machine learning — not just
                as a buzzword, but as a practical toolkit for building smarter systems. My
                goal is to evolve into an AI-focused consultant who helps businesses adopt
                intelligent automation and data-driven decision-making.
              </p>
            </div>

            {/* AI Journey box */}
            <div
              className="card card-accent p-6 mb-8"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent-dim)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4zM16 16l4 4M4 20l4-4M12 12v8M8 16h8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                    Growing Into AI
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    I'm actively exploring predictive analytics, AI-assisted workflow design,
                    and tools like Databricks ML, Python (scikit-learn, pandas), and LLM-powered
                    automation. My vision: become the bridge between raw AI capability and
                    practical business value.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
                Certifications & Programs
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Certified Data Analyst — Data Analytics Institute',
                  'ACS Professional Year — ECA Australia',
                  'Master of IT (Data Analytics) — Griffith University',
                ].map((cert) => (
                  <span key={cert} className="chip" style={{ fontSize: '11px' }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
