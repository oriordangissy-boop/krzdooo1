import { InquiryForm } from "./InquiryForm";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_HREF,
} from "../site-data";

export function InquiryPageContent({ initialType = "general" }: { initialType?: string }) {
  return (
    <main id="top">
      <SiteHeader />
      <section className="inquiry-hero">
        <div className="section-shell">
          <p className="eyebrow light">B2B PROJECT INQUIRY</p>
          <h1>Give us the context needed to define the next step</h1>
          <p>
            Request a sample kit, a volume quote, channel support, or a custom
            development discussion. The form below prepares a complete email in your
            own mail application; this website does not upload or store your details.
          </p>
        </div>
      </section>
      <section className="inquiry-section">
        <div className="section-shell inquiry-grid">
          <InquiryForm initialType={initialType} />
          <aside className="inquiry-contact">
            <p className="section-label">DIRECT CONTACT</p>
            <h2>Materials + Solutions team</h2>
            <strong>{COMPANY_NAME}</strong>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={PRIMARY_PHONE_HREF}>{PRIMARY_PHONE_DISPLAY}</a>
            <a href={SECONDARY_PHONE_HREF}>{SECONDARY_PHONE_DISPLAY}</a>
            <p>{COMPANY_ADDRESS}</p>
            <div className="inquiry-expectations">
              <h3>Useful project inputs</h3>
              <ul>
                <li>Application and end use</li>
                <li>Material or product direction</li>
                <li>Sample purpose and expected quantity</li>
                <li>Destination market and timing</li>
                <li>Operating conditions or documentation needs</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
