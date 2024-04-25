import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linkify",
  description: "search less, stream more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo/logo.svg" type="image/svg+xml" />
      </Head>
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  );
}
