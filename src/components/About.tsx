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
              <img
                src="/images/headshot.jpg"
                alt="Revanth Bethu — Data & AI Analyst based in Brisbane, Australia"
                className="w-full h-full object-cover"
                width="400"
                height="533"
                decoding="async"
                onError={(e) => {
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
              Data analyst by trade,{' '}
              <span className="heading-italic">AI builder by obsession</span>
            </h2>

            <div className="space-y-4 mb-10" style={{ color: 'var(--text-secondary)' }}>
              <p className="text-base leading-relaxed">
                I'm Revanth. I started out doing what most data analysts do — cleaning
                messy spreadsheets, building dashboards nobody asked for, and trying to
                convince stakeholders that their gut feeling was wrong (politely). Computer
                Science degree in India, Master's at Griffith in Brisbane, and a bunch of
                roles where I got to prove that data actually changes decisions when you
                present it right.
              </p>
              <p className="text-base leading-relaxed">
                But here's what gets me out of bed now:{' '}
                <strong style={{ color: 'var(--text-primary)' }}>AI agents</strong>. I'm
                currently at BAPL building 10+ AI agents using Microsoft Copilot Studio and
                Power Automate — each one scoped to a specific business function, pulling
                from Google Drive via Graph Connectors, locked down with Entra ID security
                groups. It's the kind of work where data, automation, and AI all collide.
              </p>
              <p className="text-base leading-relaxed">
                My sweet spot is the gap between "we have data" and "we have an AI system
                that actually does something useful with it." I'm not chasing buzzwords — I
                want to build systems that work without someone babysitting them.
              </p>
            </div>

            {/* AI Journey box */}
            <div className="card card-accent p-6 mb-8">
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
                    Where I'm headed
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Right now it's Copilot Studio agents and Power Automate orchestration.
                    Next it's multi-agent workflows where agents hand off tasks to each
                    other autonomously. The long game? Becoming the person companies call
                    when they want AI that actually plugs into their existing systems
                    and delivers ROI — not just a demo.
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
