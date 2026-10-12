import Image from "next/image";
import { BrandLogos, SiteFooter, SiteHeader } from "@/components/site-chrome";

const services = [
  {
    number: "01 / COMMERCIAL STRATEGY",
    title: <>Find your<br /><em>growth path.</em></>,
    description: "Clarify your proposition, positioning and go-to-market plan. Turn commercial ambition into a focused set of moves your team can execute.",
    label: "Explore commercial strategy",
    tone: "service-card-dark",
  },
  {
    number: "02 / SALES GROWTH & GTM",
    title: <>Build a more<br /><em>predictable engine.</em></>,
    description: "Strengthen sales execution, customer success and retention to create healthier, more predictable and scalable revenue.",
    label: "Explore sales & GTM",
    tone: "service-card-sand",
  },
  {
    number: "03 / COMMERCIAL LEADERSHIP",
    title: <>Make the next<br /><em>stage count.</em></>,
    description: "Bring experienced interim or fractional commercial leadership to a launch, growth phase or moment of change.",
    label: "Explore leadership support",
    tone: "service-card-lime",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <SiteHeader />
        <div className="hero-layout shell">
          <div className="hero-copy">
            <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> PROPTECH GROWTH CONSULTANT</p>
            <h1>Commercial<br /><em>clarity.</em><br />Real growth.</h1>
            <p className="hero-intro">I help PropTech and property businesses accelerate growth, build strategic partnerships and create more predictable revenue.</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#contact">Start a conversation <span>↗</span></a>
              <a className="text-link light-link" href="/services">Explore services <span>↓</span></a>
            </div>
            <div className="hero-note"><span className="note-star">✳</span><span>Independent commercial leadership<br />for what comes next.</span></div>
          </div>
          <div className="hero-art" aria-label="King's Cross railway station in London">
            <Image className="art-image station-image" src="/building1.jpg" alt="King's Cross station, a historic London railway station" fill priority sizes="(max-width: 640px) 90vw, 42vw" />
            <div className="art-frame" />
          </div>
        </div>
        <div className="hero-bottom shell"><span>20+ YEARS OF EXPERIENCE</span><span className="scroll-cue">SCROLL TO EXPLORE <b>↓</b></span><span>UK PROPERTY · GLOBAL PERSPECTIVE</span></div>
      </section>

      <section className="intro-section section-pad" id="approach">
        <div className="shell intro-grid">
          <p className="eyebrow"><span className="eyebrow-line" /> THE OPPORTUNITY</p>
          <div className="intro-content">
            <h2>Turn commercial ambition<br />into <em>revenue that scales.</em></h2>
            <div className="intro-bottom">
              <p className="body-large">I work with founders, leadership teams and investors to align go-to-market strategy, sales execution and customer retention—especially in trust-critical markets where buying cycles are complex and credibility matters.</p>
              <a className="round-link" href="#expertise" aria-label="Discover expertise">↘</a>
            </div>
          </div>
        </div>
      </section>

      <BrandLogos />

      <section className="expertise-section section-pad" id="expertise">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> WHERE JOHN CAN HELP</p><h2>Commercial expertise<br />for <em>your next stage.</em></h2></div>
            <p className="heading-aside">Hands-on, data-driven and pragmatic. Board-level perspective, close to the day-to-day work of building revenue.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className={`service-card ${service.tone}`} key={service.number}>
                <div className="card-top"><span>{service.number}</span><span className="card-symbol">↗</span></div>
                <div className={`service-icon ${index === 0 ? "icon-target" : index === 1 ? "icon-orbit" : "icon-spark"}`}>
                  {index === 0 ? <span /> : index === 1 ? <><span /><i /><b /></> : "↗"}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/services" className="card-link">{service.label} <span>↗</span></a>
              </article>
            ))}
          </div>
          <div className="service-more"><a className="text-link dark-link" href="/services">See the full range of support <span>↗</span></a></div>
        </div>
      </section>

      <section className="proof-section">
        <div className="shell proof-grid">
          <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> EXPERIENCE THAT GETS TO WORK</p>
          <div className="proof-stats">
            <div><strong>20<span>+</span></strong><p>years in property<br />and technology</p></div>
            <div><strong>6</strong><p>commercial growth<br />capabilities</p></div>
            <div><strong>3</strong><p>ways to engage:<br />day rate, retained, project</p></div>
          </div>
          <p className="proof-note">Experience across recognised names including Rightmove, Zoopla, OnTheMarket, Reapit and IOVOX.</p>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="shell about-grid">
          <div className="about-visual portrait-about">
            <Image className="about-photo portrait-image" src="/john-hennessy.jpg" alt="John Hennessy" fill sizes="(max-width: 640px) 90vw, 40vw" />
            <div className="about-tag">20+ YEARS<br /><span>COMMERCIAL EXPERIENCE</span></div>
            <span className="about-index">PROPTECH · PROPERTY · GROWTH / 01</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT JOHN</p>
            <h2>Commercial by instinct.<br /><em>Practical by nature.</em></h2>
            <p className="body-large">I’m John Hennessy, an independent consultant and fractional commercial leader. I help ambitious teams build predictable, scalable revenue—and stay close enough to make the plan happen.</p>
            <p className="body-copy">From B2B SaaS and PropTech to compliance and other trust-driven markets, I bring a hands-on approach to growth, change and scale-up.</p>
            <a className="text-link dark-link" href="/about">More about John <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER</p>
            <h2>Ready to make<br />growth <em>happen?</em></h2>
          </div>
          <div className="contact-content">
            <p>Need to sharpen your go-to-market strategy, strengthen revenue or add senior commercial leadership? Let’s talk through what would move the business forward.</p>
            <a className="contact-email" href="mailto:hello@johnhennessy.co.uk">Start a conversation <span>↗</span></a>
            <a className="contact-detail contact-linkedin" href="https://www.linkedin.com/in/johnshennessy" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
