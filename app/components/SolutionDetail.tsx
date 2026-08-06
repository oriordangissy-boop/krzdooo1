import Image from "next/image";
import { Solution, assetPath, materials } from "../site-data";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StaticLink as Link } from "./StaticLink";

export function SolutionDetail({ solution }: { solution: Solution }) {
  const related = materials.filter((material) => solution.relatedMaterials.includes(material.slug));

  return (
    <main id="top">
      <SiteHeader />
      <section className="detail-hero solution-detail-hero">
        <div className="section-shell detail-hero-grid">
          <div className="detail-hero-copy">
            <p className="eyebrow light">{solution.kicker}</p>
            <h1>{solution.title}</h1>
            <p>{solution.summary}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/inquiry/custom-project/">
                Discuss a Custom Project
              </Link>
              <Link className="button button-ghost" href="/inquiry/sample-kit/">
                Request a Sample Kit
              </Link>
            </div>
          </div>
          <div className={`detail-media ${solution.visual}`} aria-hidden="true">
            <Image src={assetPath(solution.image)} alt="" fill sizes="(max-width: 980px) 100vw, 42vw" priority />
          </div>
        </div>
      </section>

      <section className="detail-content-section">
        <div className="section-shell detail-content-grid">
          <div className="detail-main">
            <p className="section-label">PROJECT OUTCOME</p>
            <h2>A reviewable route before volume planning</h2>
            <p>{solution.outcome}</p>
            <div className="workstream-list">
              {solution.workstreams.map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="detail-aside">
            <p className="section-label">RELATED MATERIALS</p>
            <div className="related-links">
              {related.map((material) => (
                <Link href={`/materials/${material.slug}/`} key={material.slug}>
                  <small>{material.code}</small>
                  <strong>{material.shortTitle}</strong>
                  <span>View material brief →</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="brief-section">
        <div className="section-shell brief-grid">
          <div>
            <p className="section-label">PROJECT INPUTS</p>
            <h2>Give us enough context to define the sample</h2>
            <p>
              Project feasibility, sample scope, documentation, lead time, and
              commercial terms are confirmed only after the brief is reviewed.
            </p>
          </div>
          <ol>
            {solution.briefInputs.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="detail-cta">
        <div className="section-shell detail-cta-inner">
          <div>
            <p className="section-label">START A PROJECT</p>
            <h2>Turn the application brief into a sampling plan</h2>
          </div>
          <div className="detail-cta-actions">
            <Link className="button button-primary" href="/inquiry/custom-project/">
              Send Project Brief
            </Link>
            <Link className="button button-ghost" href="/#solutions">
              View All Development Routes
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
