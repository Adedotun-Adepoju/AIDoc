import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";
import { cx } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "AI DOC",
  description: "Your favorite AI Doctor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(quicksand.variable, "font-quicksand min-h-screen overflow-x-hidden")}
      >
        {children}
      </body>
    </html>
  );
}
