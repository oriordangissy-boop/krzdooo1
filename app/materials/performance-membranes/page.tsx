import type { Metadata } from "next";
import { MaterialDetail } from "../../components/MaterialDetail";
import { materials } from "../../site-data";

const material = materials.find((item) => item.slug === "performance-membranes")!;

export const metadata: Metadata = {
  title: `${material.title} | Materials + Solutions`,
  description: material.summary,
};

export default function Page() {
  return <MaterialDetail material={material} />;
}
