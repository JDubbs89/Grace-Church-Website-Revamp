import type { Metadata } from "next";
import { Montserrat, Inter} from "next/font/google";
import "./globals.css";
import SiteHeader from "@components/persistent/header";
import Footer from "@components/persistent/footer";

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
        <Footer>
          <div className="flex flex-col ml-auto mr-60 h-fit p-4 my-auto">
            <div>Useful Links</div>
            <ol>
              <li>f</li>
              <li>f</li>
              <li>f</li>
            </ol>
          </div>
          <div className="flex flex-col mr-auto ml-60 h-fit p-4 my-auto">
            <div>Navigation</div>
            <ol className="px-2 py-1 text-gray-200">
              <li><a className="hover:" href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/ministries">Ministries</a></li>
              <li><a href="/media">Media</a></li>
              <li><a href="unifiedgiving.com/give/index/30">Giving</a></li>
              <a>Contact</a>
            </ol>
          </div>
        </Footer>
      
      </body>
    </html>
  );
}
