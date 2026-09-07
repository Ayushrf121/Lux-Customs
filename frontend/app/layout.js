import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Testimonials from "./components/home/Testimonials";
import Divider from "./components/utils/Divider";
import ContactSection from "./components/home/ContactSection";
import FAQ from "./components/home/Faq";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Auto TintGard | Window Tinting & Protection Melbourne",
  description: "Professional car window tinting and paint protection in Hoppers Crossing, Melbourne.",
  icons: {
    icon: '/logo.webp', // Or /favicon.ico depending on what file you used
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Divider />
        <Testimonials />
        <Divider />
        <FAQ/>
        <Divider />
        <ContactSection/>
        <Divider />
        <Footer />
      </body>
    </html>
  );
}
