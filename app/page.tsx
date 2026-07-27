"use client";

import { FormEvent, useState } from "react";

const audienceEntries = [
  {
    label: "Brand & Corporate Procurement",
    title: "Source materials, samples, and product-development support",
    copy: "Start with a sample kit, a target product, or a volume requirement. We will help define the next practical step.",
    href: "#materials",
  },
  {
    label: "Distributors & Channel Partners",
    title: "Build a sales-ready material and sample package",
    copy: "Request product information, samples, and project coordination for qualified customer opportunities.",
    href: "#support",
  },
  {
    label: "Engineering & Project Buyers",
    title: "Develop a sample around your operating conditions",
    copy: "Share the application, form factor, quantity, timeline, and documentation needs. We will align the material route and sampling plan.",
    href: "#solutions",
  },
] as const;

const materialCards = [
  {
    code: "MEMBRANE",
    title: "Performance membranes and laminated textiles",
    summary:
      "Layered material options for functional apparel and lightweight equipment, including outer fabrics, membrane layers, and textile substrates.",
    canDo:
      "Material selection, laminate-structure review, swatches, and product sampling coordination",
    projects: ["Functional outer layers", "Outdoor apparel", "Lightweight equipment"],
    sample:
      "Share the end use, target quantity, and timing. We will confirm available swatches, structure information, and the sampling route.",
    visual: "layers",
  },
  {
    code: "PI",
    title: "Polyimide (PI) lightweight thermal materials",
    summary:
      "Available material forms include fiber, yarn, woven and nonwoven textiles, and thermal batting.",
    canDo:
      "Sampling for apparel liners, mid-layers, insulation structures, and functional textiles",
    projects: [
      "Premium technical outerwear",
      "Luxury performance apparel",
      "Refined lining systems",
    ],
    sample:
      "Start from a material form or a target product. We will confirm available samples, the proposed construction, and required project information.",
    visual: "pi",
  },
  {
    code: "BASALT",
    title: "Basalt-fiber composites",
    summary:
      "Material forms include continuous fiber, woven fabrics, mats, prepreg, and composite products.",
    canDo:
      "Material-form review, composite-component discussion, and coordination for engineering samples",
    projects: ["Structural components", "Construction & infrastructure", "Transport & marine"],
    sample:
      "Share the part or carrier, dimensions, operating conditions, quantity, and documentation needs. We will confirm the relevant material form and sample path.",
    visual: "basalt",
  },
] as const;

const solutions = [
  {
    kicker: "PREMIUM PRODUCT DEVELOPMENT",
    title: "Premium technical apparel systems",
    copy: "Combine performance membranes, laminated textiles, and PI lightweight thermal materials across refined outer layers, mid-layers, and insulation structures. Develop a reviewable sample direction for premium travel, lifestyle, and performance collections before commercial planning.",
    tags: ["Refined outer layer", "PI thermal layer", "Garment sampling"],
    visual: "apparel",
  },
  {
    kicker: "COMPOSITE DEVELOPMENT",
    title: "Precision composite structures and samples",
    copy: "Start with basalt-fiber fabrics, mats, prepreg, or other available material forms, then define a sampling route for refined panels, structural shells, grids, or precision composite components.",
    tags: ["Refined panels", "Structural shells", "Precision components"],
    visual: "engineering",
  },
  {
    kicker: "PROJECT SAMPLING",
    title: "Application-led development for premium products",
    copy: "For premium mobility, marine, architectural, advanced air mobility, and performance-equipment projects, we first document the operating environment and structural constraints, then coordinate materials and samples.",
    tags: ["Premium applications", "Material route", "Project follow-through"],
    visual: "applications",
  },
] as const;

const supportItems = [
  [
    "Product information",
    "Available material forms, application references, and project information suitable for external review.",
  ],
  [
    "Sample support",
    "Material swatches and sample-kit options matched to procurement, channel, or engineering requirements.",
  ],
  [
    "Development sampling",
    "Sample coordination around structure, dimensions, end use, and delivery requirements.",
  ],
  [
    "Volume quote",
    "A project quotation after specifications, quantity, scope, and delivery requirements are confirmed.",
  ],
] as const;

const process = [
  [
    "Send a project brief",
    "Share the end use, material direction, quantity, target market, and timeline.",
  ],
  [
    "Confirm the sample route",
    "We match the relevant material form, information, and available sampling path.",
  ],
  [
    "Review sample and quote",
    "For development work, confirm the construction, sample scope, and commercial quotation.",
  ],
  [
    "Plan delivery",
    "Coordinate documents, supply, feedback, and volume-delivery requirements.",
  ],
] as const;

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Materials and Solutions home">
          <span className="brand-mark">M+</span>
          <span className="brand-copy">
            <strong>Materials + Solutions</strong>
            <small>FUNCTIONAL + COMPOSITE MATERIALS</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#materials">Materials</a>
          <a href="#audiences">For Buyers</a>
          <a href="#solutions">Development</a>
          <a href="#support">Sample Support</a>
        </nav>
        <a className="header-cta" href="#contact">
          Contact Sales
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#materials">Materials</a>
            <a href="#audiences">For Buyers</a>
            <a href="#solutions">Development</a>
            <a href="#support">Sample Support</a>
            <a href="#contact">Contact Sales</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow light">FUNCTIONAL & COMPOSITE MATERIALS</p>
            <h1 id="hero-title">
              Materials, product development, and sampling support
            </h1>
            <p className="hero-lede">
              We supply performance membranes and laminated textiles, polyimide (PI)
              lightweight thermal materials, and basalt-fiber composites for brands,
              distributors, and engineering project buyers. Start with a sample kit
              or send us a project brief.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#support">
                Request a Sample Kit
              </a>
              <a className="button button-ghost" href="#contact">
                Send Project Brief
              </a>
            </div>
            <ul className="hero-deliverables" aria-label="Available support">
              <li>
                <span>01</span>
                Material swatches
              </li>
              <li>
                <span>02</span>
                Structure samples
              </li>
              <li>
                <span>03</span>
                Product development
              </li>
              <li>
                <span>04</span>
                Volume delivery
              </li>
            </ul>
          </div>

          <div className="specimen-rack" aria-label="Available material families">
            <div className="rack-head">
              <span>Available materials</span>
              <b>3 MATERIAL FAMILIES</b>
            </div>
            <div className="specimen specimen-membrane">
              <div className="layer-sample" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div>
                <span>Performance membranes</span>
                <small>Outer textile · Membrane · Substrate</small>
              </div>
            </div>
            <div className="specimen specimen-pi">
              <div className="source-frame source-pi" aria-hidden="true">
                <img
                  src="materials/pi-premium-apparel-v2.webp"
                  alt=""
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div>
                <span>PI lightweight thermal materials</span>
                <small>Fiber · Textile · Batting</small>
              </div>
            </div>
            <div className="specimen specimen-basalt">
              <div className="source-frame source-basalt" aria-hidden="true">
                <img
                  src="materials/basalt-material-studio-v2.webp"
                  alt=""
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div>
                <span>Basalt-fiber composites</span>
                <small>Fiber · Fabric · Composite products</small>
              </div>
            </div>
            <div className="rack-foot">
              <span>Material</span>
              <i />
              <span>Sample</span>
              <i />
              <span>Project</span>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-strip" id="audiences">
        <div className="section-shell audience-grid">
          {audienceEntries.map((item) => (
            <a href={item.href} key={item.label}>
              <span>{item.label}</span>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
              <b>Explore this route →</b>
            </a>
          ))}
        </div>
      </section>

      <section className="materials-section" id="materials">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-label">THREE MATERIAL FAMILIES</p>
              <h2>Compare available materials and start with the right sample</h2>
            </div>
            <p>
              Start with swatches, or bring us a target product or application.
              Specific grades, performance data, standards, and supply terms are
              confirmed for each project.
            </p>
          </div>

          <div className="material-card-grid">
            {materialCards.map((item) => (
              <article className={`material-card ${item.visual}`} key={item.code}>
                <div className="material-visual" aria-hidden="true">
                  {item.visual === "layers" && (
                    <div className="material-layer-stack">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  )}
                  {item.visual === "pi" && (
                    <img
                      src="materials/pi-premium-apparel-v2.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {item.visual === "basalt" && (
                    <img
                      src="materials/basalt-material-studio-v2.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <span>{item.code}</span>
                </div>
                <div className="material-content">
                  <p className="material-code">{item.code}</p>
                  <h3>{item.title}</h3>
                  <p className="material-summary">{item.summary}</p>
                  <dl>
                    <div>
                      <dt>What we support</dt>
                      <dd>{item.canDo}</dd>
                    </div>
                    <div>
                      <dt>Typical projects</dt>
                      <dd>
                        {item.projects.map((project) => (
                          <span key={project}>{project}</span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt>How to request samples</dt>
                      <dd>{item.sample}</dd>
                    </div>
                  </dl>
                  <a className="text-link" href="#contact">
                    Request a Sample Kit <span>→</span>
                  </a>
                </div>
              </article>
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
              <a className="button button-primary" href="#contact">
                Request a Sample Kit
              </a>
              <a className="button button-dark" href="#contact">
                Request a Volume Quote
              </a>
            </div>
          </div>
          <div className="support-list">
            {supportItems.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-label">DEVELOPMENT DIRECTIONS</p>
              <h2>Move from material form to a reviewable sample</h2>
            </div>
            <p>
              These are development directions available for project discussion and
              sampling. They are not listed as fixed, ready-stock specifications.
            </p>
          </div>
          <div className="solution-stack">
            {solutions.map((item, index) => (
              <article className={`solution-card ${item.visual}`} key={item.title}>
                <div className="solution-media" aria-hidden="true">
                  {item.visual === "apparel" && (
                    <img
                      src="materials/pi-premium-apparel-v2.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {item.visual === "engineering" && (
                    <img
                      src="materials/basalt-material-studio-v2.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {item.visual === "applications" && (
                    <img
                      src="materials/basalt-premium-applications-v2.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                <div className="solution-copy">
                  <div className="solution-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p>{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <span>{item.copy}</span>
                  <ul>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href="#contact">
                    Discuss a Custom Project <b>→</b>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cooperation-section">
        <div className="section-shell cooperation-grid">
          <div className="cooperation-copy">
            <p className="section-label">THREE BUYING ROUTES</p>
            <h2>Choose the route that matches your buying role</h2>
            <p>
              Tell us whether you are sourcing for a brand, building a channel
              opportunity, or developing an engineering application. We will respond
              with the relevant information, sample route, or quotation requirements.
            </p>
          </div>
          <div className="cooperation-cards">
            <article>
              <span>Brand & Corporate Procurement</span>
              <p>Material swatches, product direction, custom development, and volume quotes.</p>
              <a href="#contact">Request a Sample Kit →</a>
            </article>
            <article>
              <span>Distributor & Channel Partnership</span>
              <p>Product information, sample support, opportunity review, and channel coordination.</p>
              <a href="#contact">Contact Sales →</a>
            </article>
            <article>
              <span>Engineering & Project Development</span>
              <p>Sample definition based on the application, form factor, and delivery requirements.</p>
              <a href="#contact">Send Project Brief →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell">
          <div className="process-title">
            <p className="section-label">WORKING PROCESS</p>
            <h2>Four steps from brief to delivery planning</h2>
          </div>
          <ol className="process-list">
            {process.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="company-section">
        <div className="section-shell company-grid">
          <div className="company-statement">
            <p className="section-label">PROJECT SUPPORT</p>
            <h2>Materials, sampling, and project follow-through in one workflow</h2>
          </div>
          <div className="company-copy">
            <p>
              We support material selection, specification discussion, sample
              coordination, document preparation, test coordination, supply
              coordination, and delivery follow-up for brand, channel, and
              engineering customers.
            </p>
            <ul>
              <li>Shenzhen company · Dongguan service base</li>
              <li>Material swatches · Product sampling</li>
              <li>Project quotes · Delivery follow-up</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light">START WITH A SPECIFIC REQUIREMENT</p>
            <h2>Tell us what you are sourcing</h2>
            <p>
              Share your buyer type, target material or product, expected quantity,
              destination market, and timeline. We will respond with the relevant
              sample route, quotation requirements, or development questions.
            </p>
            <div className="contact-actions">
              <a className="button button-ghost" href="tel:+8613712670275">
                Call Business Development
              </a>
              <a className="button button-ghost" href="mailto:540148510@qq.com">
                Email Project Brief
              </a>
            </div>
            <div className="contact-details">
              <strong>Shenzhen Kanrenzhida Technology Co., Ltd.</strong>
              <a href="tel:+8613712670275">+86 137 1267 0275</a>
              <a href="tel:+8613549376386">+86 135 4937 6386</a>
              <a href="mailto:540148510@qq.com">540148510@qq.com</a>
              <p>
                Rooms 1101–1102, Building 6, Xinghua Smart City, No. 143,
                Dongcheng Section, Guanchang Road, Dongcheng Subdistrict,
                Dongguan, Guangdong, China
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <p className="form-intro full">
              Use this worksheet to organize your brief. It does not transmit or
              store data.
            </p>
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Company / Organization
              <input name="company" placeholder="Company or organization" />
            </label>
            <label>
              Phone
              <input
                name="phone"
                required
                inputMode="tel"
                placeholder="Country code and number"
              />
            </label>
            <label>
              Buyer Type
              <select name="customer" defaultValue="brand">
                <option value="brand">Brand / Corporate Procurement</option>
                <option value="channel">Distributor / Channel Partner</option>
                <option value="industry">Engineering / Project Buyer</option>
                <option value="unsure">Not sure — please advise</option>
              </select>
            </label>
            <label className="full">
              Material or Product Direction
              <select name="direction" defaultValue="membrane">
                <option value="membrane">Performance membranes and laminated textiles</option>
                <option value="pi">Polyimide (PI) lightweight thermal materials</option>
                <option value="basalt">Basalt-fiber composites</option>
                <option value="development">Product development and sampling</option>
                <option value="other">Other industrial application</option>
              </select>
            </label>
            <label className="full">
              Project Brief
              <textarea
                name="message"
                rows={5}
                placeholder="End use, quantity, destination market, timeline, and the sample or information you need"
              />
            </label>
            <button className="button button-primary full" type="submit">
              Show How to Send This Brief
            </button>
            {sent && (
              <p className="form-next-step full" role="status">
                Your details have not been sent. Email your brief to{" "}
                <a href="mailto:540148510@qq.com">540148510@qq.com</a> or call{" "}
                <a href="tel:+8613712670275">+86 137 1267 0275</a>.
              </p>
            )}
            <small className="full">
              This worksheet does not transmit or store data. To start a project,{" "}
              <a href="mailto:540148510@qq.com">email the project brief</a> or{" "}
              <a href="tel:+8613712670275">call Business Development</a>.
            </small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <span className="brand-mark">M+</span>
            <div>
              <strong>Materials + Solutions</strong>
              <p>Functional materials · Composite materials · Product development</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="#materials">Materials</a>
            <a href="#solutions">Development</a>
            <a href="#support">Sample Support</a>
            <a href="#contact">Contact Sales</a>
          </div>
        </div>
        <div className="section-shell footer-legal">
          <span>© 2026 Shenzhen Kanrenzhida Technology Co., Ltd.</span>
          <span>
            Material specifications, test results, applicable standards, supply
            responsibilities, and commercial terms are subject to project-specific
            confirmation documents.
          </span>
        </div>
      </footer>
    </main>
  );
}
