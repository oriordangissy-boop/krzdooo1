import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oriordangissy-boop.github.io/krzdooo1/"),
  title:
    "Functional & Composite Materials | Product Development and Sampling Support",
  description:
    "Performance membranes and laminated textiles, polyimide (PI) lightweight thermal materials, basalt-fiber composites, product development, and sampling support for international B2B buyers.",
  openGraph: {
    title: "Functional & Composite Materials",
    description: "Product development and sampling support for international B2B buyers.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://oriordangissy-boop.github.io/krzdooo1/og.png",
        width: 1731,
        height: 909,
        alt: "Functional and composite materials with product development and sampling support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Functional & Composite Materials",
    description: "Product development and sampling support for international B2B buyers.",
    images: ["https://oriordangissy-boop.github.io/krzdooo1/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
