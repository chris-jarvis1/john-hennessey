export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header shell">
          <a className="wordmark" href="#top" aria-label="John Hennessy home">
            JOHN HENNESSY<span className="wordmark-dot">.</span>
            <span className="wordmark-sub">STRATEGY · PROPTECH · GROWTH</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#approach">Approach</a>
            <a href="#expertise">Expertise</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
        </header>

        <div className="hero-layout shell">
          <div className="hero-copy">
            <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> INDEPENDENT ADVISORY · REAL ESTATE &amp; TECHNOLOGY</p>
            <h1>Make your<br /><em>next move</em><br />count.</h1>
            <p className="hero-intro">Clear thinking for ambitious property and proptech businesses. Find your edge, build the right relationships, and turn momentum into meaningful growth.</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#contact">Start a conversation <span>↗</span></a>
              <a className="text-link light-link" href="#approach">Explore the approach <span>↓</span></a>
            </div>
            <div className="hero-note"><span className="note-star">✳</span><span>Good advice starts<br />with good questions.</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract architectural photograph of a modern building">
            <div className="art-image" />
            <div className="art-frame" />
            <div className="art-caption"><span>01 / 03</span><span>Perspective changes everything</span></div>
          </div>
        </div>
        <div className="hero-bottom shell"><span>INDEPENDENT BY DESIGN</span><span className="scroll-cue">SCROLL TO EXPLORE <b>↓</b></span><span>WORKING ACROSS THE BUILT WORLD</span></div>
      </section>

      <section className="intro-section section-pad" id="approach">
        <div className="shell intro-grid">
          <p className="eyebrow"><span className="eyebrow-line" /> THE OPPORTUNITY</p>
          <div className="intro-content">
            <h2>Big ambitions deserve<br />more than <em>business as usual.</em></h2>
            <div className="intro-bottom">
              <p className="body-large">The property landscape is moving fast. I work alongside founders and leadership teams to make sense of what’s next—and move toward it with purpose.</p>
              <a className="round-link" href="#expertise" aria-label="Discover expertise">↘</a>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section section-pad" id="expertise">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> WHERE I CAN HELP</p><h2>From the big picture<br />to the <em>next right step.</em></h2></div>
            <p className="heading-aside">No off-the-shelf playbooks. Just sharp thinking, useful connections and focused support built around your business.</p>
          </div>
          <div className="service-grid">
            <article className="service-card service-card-dark">
              <div className="card-top"><span>01 / STRATEGY</span><span className="card-symbol">↗</span></div>
              <div className="service-icon icon-target"><span /></div>
              <h3>Find your<br /><em>growth path.</em></h3>
              <p>Turn a complex market into a clear plan. Pressure-test your positioning, sharpen your priorities and choose the moves that matter now.</p>
              <a href="#contact" className="card-link">Explore strategy <span>↗</span></a>
            </article>
            <article className="service-card service-card-sand">
              <div className="card-top"><span>02 / CONNECTIONS</span><span className="card-symbol">↗</span></div>
              <div className="service-icon icon-orbit"><span /><i /><b /></div>
              <h3>Get in the<br /><em>right rooms.</em></h3>
              <p>Build relationships that open doors. Access thoughtful introductions across real estate, proptech, investment and the wider built environment.</p>
              <a href="#contact" className="card-link">Build your network <span>↗</span></a>
            </article>
            <article className="service-card service-card-lime">
              <div className="card-top"><span>03 / MOMENTUM</span><span className="card-symbol">↗</span></div>
              <div className="service-icon icon-spark">✳</div>
              <h3>Make progress<br /><em>that lasts.</em></h3>
              <p>From market entry to an important next chapter, bring an experienced outside perspective to the moments that can shape your future.</p>
              <a href="#contact" className="card-link">Talk through your goals <span>↗</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="shell quote-wrap">
          <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> THE WAY I WORK</p>
          <span className="quote-mark">“</span>
          <blockquote>Strategy only matters<br />when it <em>moves you forward.</em></blockquote>
          <div className="quote-footer"><span>A practical partner for your next stage</span><span>INSIGHT <b>+</b> ACTION</span></div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="shell about-grid">
          <div className="about-visual">
            <div className="about-photo" />
            <div className="about-tag">REAL ESTATE<br /><span>MEETS WHAT’S NEXT</span></div>
            <span className="about-index">A DIFFERENT POINT OF VIEW / 02</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p>
            <h2>Curious by nature.<br /><em>Commercial by instinct.</em></h2>
            <p className="body-large">I’m John Hennessy. I help people building the future of property get closer to what’s possible—with honest advice, a wider perspective and a bias for action.</p>
            <p className="body-copy">The best outcomes rarely come from doing more of the same. They come from seeing the market clearly, knowing where you bring value and having the confidence to act. That’s the work we do together.</p>
            <a className="text-link dark-link" href="#contact">A good place to start <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER</p>
            <h2>Let’s make<br />something <em>move.</em></h2>
          </div>
          <div className="contact-content">
            <p>Have a challenge to untangle, an idea to test or a business ready for its next stage? Tell me a little about it. The first conversation is always straightforward.</p>
            <a className="contact-email" href="mailto:hello@johnhennessy.co.uk">Start a conversation <span>↗</span></a>
            <span className="contact-detail">Independent advisory · Real estate &amp; proptech</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-main">
          <a className="wordmark footer-wordmark" href="#top">JOHN HENNESSY<span className="wordmark-dot">.</span><span className="wordmark-sub">STRATEGY · PROPTECH · GROWTH</span></a>
          <div className="footer-note">Thoughtful advice.<br />Forward motion.</div>
          <a className="back-top" href="#top">BACK TO TOP <span>↑</span></a>
        </div>
        <div className="shell footer-legal"><span>© 2026 John Hennessy</span><span>Independent by design.</span><a href="mailto:hello@johnhennessy.co.uk">GET IN TOUCH ↗</a></div>
      </footer>
    </main>
  );
}
