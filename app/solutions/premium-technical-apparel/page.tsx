import type { Metadata } from "next";
import { SolutionDetail } from "../../components/SolutionDetail";
import { solutions } from "../../site-data";

const solution = solutions.find((item) => item.slug === "premium-technical-apparel")!;

export const metadata: Metadata = {
  title: `${solution.title} | Materials + Solutions`,
  description: solution.summary,
};

export default function Page() {
  return <SolutionDetail solution={solution} />;
}
