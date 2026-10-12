import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ArrowIcon } from "@/components/icons";

export const metadata = {
  title: "Services | John Hennessy Commercial & PropTech Growth",
  description: "Commercial strategy, sales growth, GTM, partnerships, fractional leadership, AI strategy and revenue optimisation for property and PropTech businesses.",
};

const capabilities = [
  { index: "01", title: "Commercial strategy", summary: "Get clear on where to play and how to win.", detail: "Pressure-test your commercial ambition, sharpen your proposition and positioning, and set priorities that connect strategy to execution." },
  { index: "02", title: "Sales growth & go-to-market", summary: "Bring structure to the route from product to revenue.", detail: "Build a focused GTM plan, strengthen sales execution and align the customer journey to your market, team and stage of growth." },
  { index: "03", title: "Strategic partnerships", summary: "Create the relationships that extend your reach.", detail: "Identify and develop partnerships that open routes to market, build credibility and create commercial value for both sides." },
  { index: "04", title: "Interim & fractional leadership", summary: "Add senior commercial leadership when you need it.", detail: "Bring hands-on leadership to a launch, leadership gap, growth phase or period of change—without adding full-time overhead." },
  { index: "05", title: "AI strategy & innovation", summary: "Find the useful opportunity, not the noise.", detail: "Explore where emerging technology can improve customer value, commercial workflows and competitive positioning." },
  { index: "06", title: "Revenue optimisation", summary: "Make growth more visible, resilient and repeatable.", detail: "Improve revenue predictability, retention and expansion by aligning sales, marketing and customer success around the outcomes that matter." },
];

export default function ServicesPage() {
  return (
    <main id="top">
      <section className="inner-hero services-hero">
        <SiteHeader compact />
        <div className="shell inner-hero-copy">
          <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> SERVICES &amp; ENGAGEMENT</p>
          <h1>Commercial support<br />that <em>moves business.</em></h1>
          <p className="inner-hero-intro">From a strategic question to senior leadership in the room, get the right experience around the challenge at hand.</p>
        </div>
        <div className="shell inner-hero-foot"><span>STRATEGY · SALES · LEADERSHIP</span><span>BUILT AROUND YOUR BUSINESS</span></div>
      </section>

      <section className="service-detail-section section-pad">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> SIX WAYS TO CREATE MOMENTUM</p><h2>Clear priorities.<br /><em>Useful progress.</em></h2></div>
            <p className="heading-aside">Practical commercial support for PropTech, property and trust-driven businesses at an important point in their growth.</p>
          </div>
          <div className="service-detail-list">
            {capabilities.map((item) => (
              <article className="service-detail-item" key={item.index}>
                <span className="service-detail-index">{item.index}</span>
                <div><h3>{item.title}</h3><p className="service-detail-summary">{item.summary}</p></div>
                <p className="service-detail-description">{item.detail}</p>
                <a href="/#contact" aria-label={`Discuss ${item.title}`}><ArrowIcon className="ui-icon" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement-options-section">
        <div className="shell engagement-options">
          <div><p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> A FLEXIBLE WAY TO WORK</p><h2>Choose the shape<br />that <em>fits the work.</em></h2></div>
          <div className="engagement-option-list">
            <article><span>01</span><div><h3>Day rate</h3><p>Focused support for a specific need or regular time with your team.</p></div></article>
            <article><span>02</span><div><h3>Retained consultancy</h3><p>Ongoing commercial guidance and continuity as your priorities evolve.</p></div></article>
            <article><span>03</span><div><h3>Project engagement</h3><p>A defined piece of work with a clear objective and practical outcome.</p></div></article>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="shell contact-grid">
          <div><p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> LET’S TALK</p><h2>Start with<br />the <em>challenge.</em></h2></div>
          <div className="contact-content"><p>Tell me where you want to go, what’s getting in the way and what kind of support might help.</p><a className="contact-email" href="mailto:hello@johnhennessy.co.uk">Start a conversation <span><ArrowIcon className="ui-icon" /></span></a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
