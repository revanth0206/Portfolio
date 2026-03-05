const NotFound = () => (
  <div
    className="flex min-h-screen items-center justify-center"
    style={{ background: 'var(--bg-primary)' }}
  >
    <div className="text-center">
      <h1 className="font-display text-6xl mb-4" style={{ color: 'var(--accent)' }}>
        404
      </h1>
      <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
        This page doesn't exist.
      </p>
      <a href="/" className="btn-primary">
        Back to Home
      </a>
    </div>
  </div>
);

export default NotFound;
