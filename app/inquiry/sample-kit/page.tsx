import type { Metadata } from "next";
import { InquiryPageContent } from "../../components/InquiryPageContent";

export const metadata: Metadata = {
  title: "Request a Sample Kit | Materials + Solutions",
  description: "Prepare a complete sample-kit inquiry for the Materials + Solutions team.",
};

export default function Page() {
  return <InquiryPageContent initialType="sample-kit" />;
}
