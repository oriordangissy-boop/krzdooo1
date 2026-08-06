import type { Metadata } from "next";
import { InquiryPageContent } from "../../components/InquiryPageContent";

export const metadata: Metadata = {
  title: "Discuss a Custom Project | Materials + Solutions",
  description: "Prepare a complete custom-development inquiry for the Materials + Solutions team.",
};

export default function Page() {
  return <InquiryPageContent initialType="custom-project" />;
}
