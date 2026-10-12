export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`site-header shell${compact ? " site-header-compact" : ""}`}>
      <a className="wordmark" href="/" aria-label="John Hennessy home">
        JOHN HENNESSY<span className="wordmark-dot">.</span>
        <span className="wordmark-sub">COMMERCIAL STRATEGY · PROPTECH · GROWTH</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="/#expertise">Expertise</a>
        <a href="/services">Services</a>
        <a href="/about">About John</a>
      </nav>
      <a className="header-cta" href="/#contact">Let&apos;s talk <span>↗</span></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <a className="wordmark footer-wordmark" href="/">
          JOHN HENNESSY<span className="wordmark-dot">.</span>
          <span className="wordmark-sub">COMMERCIAL STRATEGY · PROPTECH · GROWTH</span>
        </a>
        <div className="footer-note">Commercial clarity.<br />Forward motion.</div>
        <a className="back-top" href="#top">BACK TO TOP <span>↑</span></a>
      </div>
      <div className="shell footer-legal">
        <span>© 2026 John Hennessy</span>
        <span>Independent by design.</span>
        <a href="mailto:hello@johnhennessy.co.uk">GET IN TOUCH ↗</a>
      </div>
    </footer>
  );
}

export function BrandLogos() {
  return (
    <section className="brand-band" aria-label="Selected companies John has worked with">
      <div className="shell brand-band-inner">
        <p className="eyebrow"><span className="eyebrow-line" /> 20+ YEARS WITH LEADING PROPERTY &amp; TECHNOLOGY BRANDS</p>
        <div className="brand-logos" aria-label="Rightmove, Zoopla, OnTheMarket, Reapit and IOVOX">
          <span className="brand-rightmove">rightmove<span>◆</span></span>
          <span className="brand-zoopla">Zoopla</span>
          <span className="brand-onthemarket">OnTheMarket</span>
          <span className="brand-reapit">REAPIT</span>
          <span className="brand-iovox">iOVOX</span>
        </div>
      </div>
    </section>
  );
}
