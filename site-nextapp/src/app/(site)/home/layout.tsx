import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "../../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Grace Church",
  description: "Grace Church, 2692 N Dettman Rd, Jackson, MI",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${inter.variable} antialiased`}>
      {children}
    </div>

  );
}
