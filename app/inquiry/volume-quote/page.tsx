import type { Metadata } from "next";
import { InquiryPageContent } from "../../components/InquiryPageContent";

export const metadata: Metadata = {
  title: "Request a Volume Quote | Materials + Solutions",
  description: "Prepare a complete volume-quote inquiry for the Materials + Solutions team.",
};

export default function Page() {
  return <InquiryPageContent initialType="volume-quote" />;
}
