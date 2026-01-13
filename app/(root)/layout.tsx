import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "../globals.css";
import { QueryProvider } from "@/providers/ClientProvider";

const poppins = Poppins({
  weight: ['400', "500", "700"],
  subsets: ["latin"],
});


const inter = Inter({
  weight: ['400', "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elegant Ecommerce",
  description: "Your one stop shop to luxury",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.className} antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
