import { StaticLink as Link } from "./StaticLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Materials and Solutions home">
        <span className="brand-mark">M+</span>
        <span className="brand-copy">
          <strong>Materials + Solutions</strong>
          <small>FUNCTIONAL + COMPOSITE MATERIALS</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/#materials">Materials</Link>
        <Link href="/#audiences">For Buyers</Link>
        <Link href="/#solutions">Development</Link>
        <Link href="/inquiry/sample-kit/">Sample Support</Link>
      </nav>
      <Link className="header-cta" href="/inquiry/custom-project/">
        Contact Sales
      </Link>
      <details className="mobile-nav">
        <summary aria-label="Open navigation menu">Menu</summary>
        <nav aria-label="Mobile navigation">
          <Link href="/#materials">Materials</Link>
          <Link href="/#audiences">For Buyers</Link>
          <Link href="/#solutions">Development</Link>
          <Link href="/inquiry/sample-kit/">Sample Support</Link>
          <Link href="/inquiry/custom-project/">Contact Sales</Link>
        </nav>
      </details>
    </header>
  );
}
