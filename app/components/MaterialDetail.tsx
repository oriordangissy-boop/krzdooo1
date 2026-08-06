import Image from "next/image";
import { Material, assetPath } from "../site-data";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StaticLink as Link } from "./StaticLink";

export function MaterialDetail({ material }: { material: Material }) {
  return (
    <main id="top">
      <SiteHeader />
      <section className="detail-hero material-detail-hero">
        <div className="section-shell detail-hero-grid">
          <div className="detail-hero-copy">
            <p className="eyebrow light">MATERIAL BRIEF / {material.code}</p>
            <h1>{material.title}</h1>
            <p>{material.summary}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/inquiry/sample-kit/">
                Request a Sample Kit
              </Link>
              <Link className="button button-ghost" href="/inquiry/volume-quote/">
                Request a Volume Quote
              </Link>
            </div>
          </div>
          <div className={`detail-media ${material.visual}`} aria-hidden="true">
            {material.image ? (
              <Image src={assetPath(material.image)} alt="" fill sizes="(max-width: 980px) 100vw, 42vw" priority />
            ) : (
              <div className="material-layer-stack">
                <i />
                <i />
                <i />
                <i />
              </div>
            )}
            <span>{material.code}</span>
          </div>
        </div>
      </section>

      <section className="detail-content-section">
        <div className="section-shell detail-content-grid">
          <div className="detail-main">
            <p className="section-label">AVAILABLE FOR PROJECT REVIEW</p>
            <h2>Material forms and development support</h2>
            <p>
              Start from an existing product brief, an application, or a sample
              requirement. We will confirm the relevant material form and the
              practical sampling route for your project.
            </p>
            <div className="detail-columns">
              <article>
                <h3>Material forms</h3>
                <ul>{material.forms.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article>
                <h3>Project support</h3>
                <ul>{material.support.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
          </div>
          <aside className="detail-aside">
            <p className="section-label">TYPICAL PROJECTS</p>
            <ul>{material.applications.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="brief-section">
        <div className="section-shell brief-grid">
          <div>
            <p className="section-label">WHAT TO INCLUDE</p>
            <h2>Send a brief your team can act on</h2>
            <p>{material.sampleNote}</p>
          </div>
          <ol>
            {material.briefInputs.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="detail-cta">
        <div className="section-shell detail-cta-inner">
          <div>
            <p className="section-label">NEXT STEP</p>
            <h2>Confirm sample availability and project scope</h2>
          </div>
          <div className="detail-cta-actions">
            <Link className="button button-primary" href="/inquiry/sample-kit/">
              Request a Sample Kit
            </Link>
            <Link className="button button-ghost" href="/#materials">
              View All Materials
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
