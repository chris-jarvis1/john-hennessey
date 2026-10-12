import Image from "next/image";
import { BrandLogos, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = {
  title: "About John Hennessy | PropTech & Commercial Growth",
  description: "Meet John Hennessy: independent consultant and fractional commercial leader helping PropTech and property businesses build predictable, scalable revenue.",
};

export default function AboutPage() {
  return (
    <main id="top">
      <section className="inner-hero">
        <SiteHeader compact />
        <div className="shell inner-hero-copy">
          <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> ABOUT JOHN</p>
          <h1>Experience for<br />the <em>next stage.</em></h1>
          <p className="inner-hero-intro">Independent commercial leadership for PropTech, property and other trust-critical businesses ready to grow.</p>
        </div>
        <div className="shell inner-hero-foot"><span>20+ YEARS IN PROPERTY &amp; TECHNOLOGY</span><span>INDEPENDENT · HANDS-ON · COMMERCIAL</span></div>
      </section>

      <BrandLogos />

      <section className="about-detail-section section-pad">
        <div className="shell about-detail-grid">
          <div className="about-detail-photo">
            <Image src="/john-hennessy.jpg" alt="John Hennessy, independent commercial consultant" fill priority sizes="(max-width: 700px) 90vw, 44vw" />
            <span className="about-detail-caption">JOHN HENNESSY · PROPTECH GROWTH CONSULTANT</span>
          </div>
          <div className="about-detail-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A PRACTICAL PARTNER</p>
            <h2>Commercially minded.<br /><em>Close to execution.</em></h2>
            <p className="body-large">I’m John Hennessy, an independent consultant and fractional commercial leader. I work with founders, leadership teams and investors to build predictable revenue and create the foundations for sustainable growth.</p>
            <p>My work connects go-to-market strategy with the everyday disciplines that turn it into progress: sales execution, customer success, retention and expansion. I’m comfortable in the boardroom and alongside the teams responsible for making the plan real.</p>
            <p>I typically partner with B2B SaaS and PropTech businesses, compliance and risk-driven companies, and growth-stage teams looking to scale or bring more structure to revenue.</p>
            <a className="button button-lime" href="/#contact">Talk about your business <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="expertise-section section-pad about-focus-section">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> THE COMMERCIAL FOCUS</p><h2>Turn strategy<br />into <em>traction.</em></h2></div>
            <p className="heading-aside">A pragmatic outside perspective, shaped around the commercial challenge in front of you—not a generic playbook.</p>
          </div>
          <div className="focus-grid">
            <article><span>01</span><h3>Go-to-market</h3><p>Sharpen the proposition, positioning and plan for reaching the right customers.</p></article>
            <article><span>02</span><h3>Revenue engine</h3><p>Build and optimise sales, marketing and customer success around measurable growth.</p></article>
            <article><span>03</span><h3>Predictable growth</h3><p>Improve revenue visibility, retention and expansion as the company scales.</p></article>
            <article><span>04</span><h3>Leadership in change</h3><p>Support leadership teams through launches, transitions and scale-up phases.</p></article>
          </div>
        </div>
      </section>

      <section className="about-engagement section-pad">
        <div className="shell engagement-row">
          <p className="eyebrow"><span className="eyebrow-line" /> WORKING TOGETHER</p>
          <div><h2>Flexible by design.<br /><em>Focused on outcomes.</em></h2><p className="body-large">Support can be shaped around the work: day-rate advisory, retained consultancy or a defined project engagement.</p><a className="text-link dark-link" href="/services">Explore services <span>↗</span></a></div>
        </div>
      </section>

      <section className="contact-section">
        <div className="shell contact-grid">
          <div><p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> START A CONVERSATION</p><h2>What are you<br />building <em>next?</em></h2></div>
          <div className="contact-content"><p>Share the commercial challenge, growth opportunity or leadership gap you’re thinking about.</p><a className="contact-email" href="mailto:hello@johnhennessy.co.uk">hello@johnhennessy.co.uk <span>↗</span></a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
