import type { Metadata } from "next";
import { InquiryPageContent } from "../../components/InquiryPageContent";

export const metadata: Metadata = {
  title: "General Project Inquiry | Materials + Solutions",
  description: "Prepare a general B2B project inquiry for the Materials + Solutions team.",
};

export default function Page() {
  return <InquiryPageContent initialType="general" />;
}
