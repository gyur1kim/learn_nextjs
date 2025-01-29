import { Metadata } from "next";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

// %s -> 동적으로 변경되는 부분, 해당 페이지에 지정된 title값을 넣음
export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
