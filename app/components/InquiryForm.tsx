"use client";

import { FormEvent, useState } from "react";
import {
  CONTACT_EMAIL,
  inquiryTypeOptions,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
} from "../site-data";

type GeneratedInquiry = {
  subject: string;
  body: string;
  mailto: string;
};

function valueOf(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export function InquiryForm({ initialType = "general" }: { initialType?: string }) {
  const [inquiryType, setInquiryType] = useState(initialType);
  const [generated, setGenerated] = useState<GeneratedInquiry | null>(null);
  const [copied, setCopied] = useState(false);

  function generateInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const typeLabel =
      inquiryTypeOptions.find(([value]) => value === inquiryType)?.[1] ??
      "General Project Inquiry";
    const name = valueOf(formData, "name");
    const company = valueOf(formData, "company");
    const workEmail = valueOf(formData, "email");
    const phone = valueOf(formData, "phone") || "Not provided";
    const buyerType = valueOf(formData, "buyerType");
    const direction = valueOf(formData, "direction");
    const projectStage = valueOf(formData, "projectStage");
    const quantity = valueOf(formData, "quantity") || "To be confirmed";
    const destination = valueOf(formData, "destination");
    const targetDate = valueOf(formData, "targetDate") || "To be confirmed";
    const brief = valueOf(formData, "brief");

    const subject = `[krzd.io] ${typeLabel} — ${company || name}`;
    const body = [
      "Hello Materials + Solutions team,",
      "",
      `Inquiry type: ${typeLabel}`,
      `Name: ${name}`,
      `Company / organization: ${company}`,
      `Work email: ${workEmail}`,
      `Phone: ${phone}`,
      `Buyer role: ${buyerType}`,
      `Material / development direction: ${direction}`,
      `Project stage: ${projectStage}`,
      `Expected quantity / volume: ${quantity}`,
      `Destination market / delivery country: ${destination}`,
      `Target sample or delivery date: ${targetDate}`,
      "",
      "Project brief:",
      brief,
      "",
      "Please advise on the relevant material information, sample route, and next commercial step.",
    ].join("\r\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setGenerated({ subject, body, mailto });
    setCopied(false);
  }

  async function copyInquiry() {
    if (!generated) return;
    await navigator.clipboard.writeText(`Subject: ${generated.subject}\n\n${generated.body}`);
    setCopied(true);
  }

  return (
    <div className="inquiry-workflow">
      <form className="contact-form inquiry-form" onSubmit={generateInquiry}>
        <p className="form-intro full">
          Complete the required fields to generate a structured email. Nothing is
          uploaded or stored by this website.
        </p>
        <label className="full">
          Inquiry Type
          <select
            name="inquiryType"
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value)}
            required
          >
            {inquiryTypeOptions.map(([value, label]) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Name
          <input name="name" required autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          Company / Organization
          <input
            name="company"
            required
            autoComplete="organization"
            placeholder="Company or organization"
          />
        </label>
        <label>
          Work Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="name@company.com"
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Country code and number"
          />
        </label>
        <label>
          Buyer Role
          <select name="buyerType" defaultValue="Brand / Corporate Procurement" required>
            <option>Brand / Corporate Procurement</option>
            <option>Distributor / Channel Partner</option>
            <option>Engineering / Project Buyer</option>
            <option>Product Development Team</option>
            <option>Other B2B Buyer</option>
          </select>
        </label>
        <label>
          Project Stage
          <select name="projectStage" defaultValue="Material review" required>
            <option>Material review</option>
            <option>Concept development</option>
            <option>Sampling</option>
            <option>Volume sourcing</option>
            <option>Channel opportunity</option>
          </select>
        </label>
        <label className="full">
          Material or Development Direction
          <select name="direction" defaultValue="Performance membranes and laminated textiles" required>
            <option>Performance membranes and laminated textiles</option>
            <option>Polyimide (PI) lightweight thermal materials</option>
            <option>Basalt-fiber composites</option>
            <option>Premium technical apparel development</option>
            <option>Composite structure development</option>
            <option>Application-led product development</option>
            <option>Other project requirement</option>
          </select>
        </label>
        <label>
          Expected Quantity / Volume
          <input name="quantity" placeholder="Sample quantity or estimated volume" />
        </label>
        <label>
          Destination Market / Delivery Country
          <input name="destination" required placeholder="Country or market" />
        </label>
        <label className="full">
          Target Sample or Delivery Date
          <input name="targetDate" placeholder="Required timing or internal milestone" />
        </label>
        <label className="full">
          Project Brief
          <textarea
            name="brief"
            rows={7}
            required
            minLength={30}
            placeholder="Describe the end use, form factor, operating conditions, sample purpose, documentation needs, and any constraints."
          />
        </label>
        <button className="button button-primary full" type="submit">
          Generate Email Inquiry
        </button>
        <small className="full">
          This form prepares an email in your mail application. You will review and
          send it yourself. For immediate contact, call{" "}
          <a href={PRIMARY_PHONE_HREF}>{PRIMARY_PHONE_DISPLAY}</a>.
        </small>
      </form>

      {generated && (
        <section className="inquiry-preview" aria-live="polite" aria-labelledby="inquiry-ready">
          <p className="section-label">EMAIL READY</p>
          <h2 id="inquiry-ready">Review and send your inquiry</h2>
          <p>
            Your details are prepared for <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            Open your email application to review the message before sending.
          </p>
          <div className="inquiry-preview-actions">
            <a className="button button-primary" href={generated.mailto}>
              Open Email Application
            </a>
            <button className="button button-dark" type="button" onClick={copyInquiry}>
              {copied ? "Inquiry Copied" : "Copy Inquiry"}
            </button>
          </div>
          <dl className="inquiry-summary">
            <div>
              <dt>To</dt>
              <dd>{CONTACT_EMAIL}</dd>
            </div>
            <div>
              <dt>Subject</dt>
              <dd>{generated.subject}</dd>
            </div>
          </dl>
          <details>
            <summary>Review complete email content</summary>
            <pre>{generated.body}</pre>
          </details>
        </section>
      )}
    </div>
  );
}
