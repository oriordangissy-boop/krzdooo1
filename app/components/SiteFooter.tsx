import { COMPANY_NAME } from "../site-data";
import { StaticLink as Link } from "./StaticLink";

export function SiteFooter() {
  return (
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
          <Link href="/#materials">Materials</Link>
          <Link href="/#solutions">Development</Link>
          <Link href="/inquiry/sample-kit/">Sample Support</Link>
          <Link href="/inquiry/custom-project/">Contact Sales</Link>
        </div>
      </div>
      <div className="section-shell footer-legal">
        <span>© 2026 {COMPANY_NAME}</span>
        <span>
          Material specifications, test results, applicable standards, supply
          responsibilities, and commercial terms are subject to project-specific
          confirmation documents.
        </span>
      </div>
    </footer>
  );
}
