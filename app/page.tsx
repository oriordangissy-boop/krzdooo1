import Image from "next/image";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StaticLink as Link } from "./components/StaticLink";
import {
  CONTACT_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  assetPath,
  materials,
  solutions,
} from "./site-data";

const audienceEntries = [
  {
    label: "Brand & Corporate Procurement",
    title: "Source materials, samples, and product-development support",
    copy: "Start with a sample kit, a target product, or a volume requirement. We will help define the next practical step.",
    href: "/inquiry/sample-kit/",
  },
  {
    label: "Distributors & Channel Partners",
    title: "Build a sales-ready material and sample package",
    copy: "Request product information, samples, and project coordination for qualified customer opportunities.",
    href: "/inquiry/channel/",
  },
  {
    label: "Engineering & Project Buyers",
    title: "Develop a sample around your operating conditions",
    copy: "Share the application, form factor, quantity, timeline, and documentation needs. We will align the material route and sampling plan.",
    href: "/inquiry/custom-project/",
  },
] as const;

const supportItems = [
  ["Product information", "Available material forms, application references, and project information suitable for external review."],
  ["Sample support", "Material swatches and sample-kit options matched to procurement, channel, or engineering requirements."],
  ["Development sampling", "Sample coordination around structure, dimensions, end use, and delivery requirements."],
  ["Volume quote", "A project quotation after specifications, quantity, scope, and delivery requirements are confirmed."],
] as const;

const process = [
  ["Send a project brief", "Share the end use, material direction, quantity, target market, and timeline."],
  ["Confirm the sample route", "We match the relevant material form, information, and available sampling path."],
  ["Review sample and quote", "For development work, confirm the construction, sample scope, and commercial quotation."],
  ["Plan delivery", "Coordinate documents, supply, feedback, and volume-delivery requirements."],
] as const;

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow light">FUNCTIONAL & COMPOSITE MATERIALS</p>
            <h1 id="hero-title">Materials, product development, and sampling support</h1>
            <p className="hero-lede">
              We supply performance membranes and laminated textiles, polyimide (PI)
              lightweight thermal materials, and basalt-fiber composites for brands,
              distributors, and engineering project buyers. Start with a sample kit
              or send us a project brief.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/inquiry/sample-kit/">
                Request a Sample Kit
              </Link>
              <Link className="button button-ghost" href="/inquiry/custom-project/">
                Send Project Brief
              </Link>
            </div>
            <ul className="hero-deliverables" aria-label="Available support">
              <li><span>01</span>Material swatches</li>
              <li><span>02</span>Structure samples</li>
              <li><span>03</span>Product development</li>
              <li><span>04</span>Volume delivery</li>
            </ul>
          </div>

          <div className="specimen-rack" aria-label="Available material families">
            <div className="rack-head"><span>Available materials</span><b>3 MATERIAL FAMILIES</b></div>
            <Link className="specimen specimen-membrane" href="/materials/performance-membranes/">
              <div className="layer-sample" aria-hidden="true"><i /><i /><i /></div>
              <div><span>Performance membranes</span><small>Outer textile · Membrane · Substrate</small></div>
            </Link>
            <Link className="specimen specimen-pi" href="/materials/polyimide-thermal/">
              <div className="source-frame source-pi" aria-hidden="true">
                <Image src={assetPath("/materials/pi-premium-apparel-v2.webp")} alt="" fill sizes="180px" priority />
              </div>
              <div><span>PI lightweight thermal materials</span><small>Fiber · Textile · Batting</small></div>
            </Link>
            <Link className="specimen specimen-basalt" href="/materials/basalt-fiber-composites/">
              <div className="source-frame source-basalt" aria-hidden="true">
                <Image src={assetPath("/materials/basalt-material-studio-v2.webp")} alt="" fill sizes="180px" priority />
              </div>
              <div><span>Basalt-fiber composites</span><small>Fiber · Fabric · Composite products</small></div>
            </Link>
            <div className="rack-foot"><span>Material</span><i /><span>Sample</span><i /><span>Project</span></div>
          </div>
        </div>
      </section>

      <section className="audience-strip" id="audiences">
        <div className="section-shell audience-grid">
          {audienceEntries.map((item) => (
            <Link href={item.href} key={item.label}>
              <span>{item.label}</span><h2>{item.title}</h2><p>{item.copy}</p><b>Start this route →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="materials-section" id="materials">
        <div className="section-shell">
          <div className="section-heading">
            <div><p className="section-label">THREE MATERIAL FAMILIES</p><h2>Review material forms, applications, and sample support</h2></div>
            <p>
              Open a material brief for available forms, project-support scope, and
              the information needed to request samples. Specific grades,
              performance data, standards, and supply terms are confirmed per project.
            </p>
          </div>
          <div className="material-card-grid">
            {materials.map((item) => (
              <Link className={`material-card ${item.visual}`} href={`/materials/${item.slug}/`} key={item.code}>
                <div className="material-visual" aria-hidden="true">
                  {item.visual === "layers" ? (
                    <div className="material-layer-stack"><i /><i /><i /><i /></div>
                  ) : (
                    <Image src={assetPath(item.image!)} alt="" fill sizes="(max-width: 860px) 100vw, 33vw" />
                  )}
                  <span>{item.code}</span>
                </div>
                <div className="material-content">
                  <p className="material-code">{item.code}</p>
                  <h3>{item.title}</h3>
                  <p className="material-summary">{item.summary}</p>
                  <dl>
                    <div><dt>Forms</dt><dd>{item.forms.slice(0, 3).map((form) => <span key={form}>{form}</span>)}</dd></div>
                    <div><dt>Projects</dt><dd>{item.applications.map((project) => <span key={project}>{project}</span>)}</dd></div>
                  </dl>
                  <span className="text-link">View material brief <span>→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="support-section" id="support">
        <div className="section-shell support-grid">
          <div className="support-intro">
            <p className="section-label">SAMPLES & COMMERCIAL SUPPORT</p>
            <h2>Get the samples and information needed for your next decision</h2>
            <p>
              Procurement teams can review material and product directions. Channel
              partners can request sales information and sample support. Engineering
              buyers can start from an application and sampling requirement.
            </p>
            <div className="support-actions">
              <Link className="button button-primary" href="/inquiry/sample-kit/">Request a Sample Kit</Link>
              <Link className="button button-dark" href="/inquiry/volume-quote/">Request a Volume Quote</Link>
            </div>
          </div>
          <div className="support-list">
            {supportItems.map(([title, copy], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div><p className="section-label">DEVELOPMENT DIRECTIONS</p><h2>Move from application brief to a reviewable sample</h2></div>
            <p>Each route explains the inputs, workstreams, and materials used to scope a B2B development project.</p>
          </div>
          <div className="solution-stack">
            {solutions.map((item, index) => (
              <Link className={`solution-card ${item.visual}`} href={`/solutions/${item.slug}/`} key={item.title}>
                <div className="solution-media" aria-hidden="true"><Image src={assetPath(item.image)} alt="" fill sizes="(max-width: 860px) 100vw, 45vw" /></div>
                <div className="solution-copy">
                  <div className="solution-number">{String(index + 1).padStart(2, "0")}</div>
                  <p>{item.kicker}</p><h3>{item.title}</h3><span>{item.summary}</span>
                  <ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <span className="solution-link">View development route <b>→</b></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cooperation-section">
        <div className="section-shell cooperation-grid">
          <div className="cooperation-copy">
            <p className="section-label">THREE BUYING ROUTES</p>
            <h2>Start from your buying role and project objective</h2>
            <p>Tell us whether you are sourcing for a brand, building a channel opportunity, or developing an engineering application.</p>
          </div>
          <div className="cooperation-cards">
            {audienceEntries.map((item) => (
              <article key={item.label}><span>{item.label}</span><p>{item.copy}</p><Link href={item.href}>Start an inquiry →</Link></article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell">
          <div className="process-title"><p className="section-label">WORKING PROCESS</p><h2>Four steps from brief to delivery planning</h2></div>
          <ol className="process-list">
            {process.map(([title, copy], index) => (
              <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-callout">
          <div className="contact-copy">
            <p className="eyebrow light">START WITH A SPECIFIC REQUIREMENT</p>
            <h2>Build a complete project inquiry</h2>
            <p>
              Provide the buyer role, material or product direction, quantity,
              destination market, timing, and technical context. The inquiry page
              validates the required fields and prepares a complete email for review.
            </p>
          </div>
          <div className="contact-callout-actions">
            <Link className="button button-primary" href="/inquiry/custom-project/">Send Project Brief</Link>
            <a className="button button-ghost" href={`mailto:${CONTACT_EMAIL}`}>Email Contact</a>
            <a className="button button-ghost" href={PRIMARY_PHONE_HREF}>{PRIMARY_PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
