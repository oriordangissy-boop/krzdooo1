import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oriordangissy-boop.github.io/krzdooo1/"),
  title: "材料＋解决方案｜功能材料、复合材料与成品方案",
  description:
    "面向品牌、渠道与产业客户，提供功能膜与复合面料、聚酰亚胺轻暖材料、玄武岩纤维复合材料，以及对应的成品开发、打样与项目交付。",
  openGraph: {
    title: "功能材料与成品解决方案",
    description: "功能膜 · PI轻暖材料 · 玄武岩纤维复合材料",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "https://oriordangissy-boop.github.io/krzdooo1/og.png",
        width: 1200,
        height: 630,
        alt: "材料＋解决方案",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "功能材料与成品解决方案",
    description: "功能膜 · PI轻暖材料 · 玄武岩纤维复合材料",
    images: ["https://oriordangissy-boop.github.io/krzdooo1/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
