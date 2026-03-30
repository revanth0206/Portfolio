import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote:
      "Revanth has an exceptional ability to translate complex data into actionable insights. His Power BI dashboards transformed how our leadership team makes decisions.",
    name: 'Your Name Here',
    role: 'Role · Company',
    initials: '??',
  },
  {
    quote:
      "Working with Revanth on workflow automation saved us countless hours. He doesn't just analyse data — he understands the business context and delivers real value.",
    name: 'Your Name Here',
    role: 'Role · Company',
    initials: '??',
  },
  {
    quote:
      "Revanth's market analysis was instrumental in shaping our go-to-market strategy. His attention to detail and proactive communication made the collaboration seamless.",
    name: 'Your Name Here',
    role: 'Role · Company',
    initials: '??',
  },
];

/*
  ================================================================
  REVANTH: Replace the placeholder testimonials above with real
  quotes from colleagues, managers, or clients. You can pull
  recommendations from your LinkedIn profile. Update:
    - quote: The actual testimonial text
    - name: Person's full name
    - role: Their job title and company
    - initials: Their initials (e.g., 'JD' for John Doe)
  ================================================================
*/

const Testimonials = () => (
  <section id="testimonials" className="section-padding">
    <div className="section-wrapper">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-label justify-center">Testimonials</span>
          <h2 className="section-heading">
            What people <span className="heading-italic">say</span>
          </h2>
          <p className="section-subtext mx-auto">
            Feedback from colleagues and collaborators I've had the pleasure of working with.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="card card-accent p-7 h-full flex flex-col">
              {/* Quote icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-4 flex-shrink-0"
                style={{ color: 'var(--accent)', opacity: 0.4 }}
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                  fill="currentColor"
                />
                <path
                  d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                  fill="currentColor"
                />
              </svg>

              {/* Quote text */}
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                "{t.quote}"
              </p>

              {/* Person */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: 'var(--accent-dim)',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent-mid)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
