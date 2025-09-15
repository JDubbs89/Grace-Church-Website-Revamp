import type { Metadata } from "next";
import { Montserrat, Inter} from "next/font/google";
import "./globals.css";
import SiteHeader from "@components/persistent/header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grace Church",
    template: "%s | Grace Church",
    absolute: "",
  },
  description: "Grace Church, 2692 Dettman Rd, Jackson, MI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        
        <SiteHeader/>
        {children}
      
      
      </body>
    </html>
  );
}
