import type { Metadata } from "next";
import { InquiryPageContent } from "../components/InquiryPageContent";

export const metadata: Metadata = {
  title: "Project Inquiry | Materials + Solutions",
  description: "Prepare a complete sample, volume-quote, channel, or custom-development inquiry for the Materials + Solutions team.",
};

export default function InquiryPage() {
  return <InquiryPageContent />;
}
