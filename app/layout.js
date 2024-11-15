import localFont from "next/font/local";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";
import connectDB from "@/libs/mongoose";
import config from "@/config";
import { NextAuthProvider } from "@/components/NextAuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: config.siteTitle,
  description: config.siteDescription,
};

export default async function RootLayout({ children }) {
  try {
    await connectDB();
    console.info("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
