import type { Metadata } from "next";
import { InquiryPageContent } from "../../components/InquiryPageContent";

export const metadata: Metadata = {
  title: "Distributor and Channel Inquiry | Materials + Solutions",
  description: "Prepare a distributor or channel-partnership inquiry for the Materials + Solutions team.",
};

export default function Page() {
  return <InquiryPageContent initialType="channel" />;
}
