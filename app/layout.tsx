import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oriordangissy-boop.github.io/krzdooo1/"),
  title: "材料＋解决方案｜材料模块、工艺路径与行业方案",
  description:
    "面向产业客户、品牌方与企业采购，提供标准材料与工艺模块、模块化升级和定制行业解决方案，支持材料选型、打样、资料与交付协同。",
  openGraph: {
    title: "材料＋解决方案",
    description: "标准材料 / 工艺模块 · 定制行业解决方案",
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
    title: "材料＋解决方案",
    description: "标准材料 / 工艺模块 · 定制行业解决方案",
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
