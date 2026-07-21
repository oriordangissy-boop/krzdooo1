import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "看人之大科技研究院｜多材料功能服装与产业解决方案",
  description:
    "以功能服装为首个落地入口，提供材料选型、组合设计、样品打样、检测协同与生产交付支持。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
