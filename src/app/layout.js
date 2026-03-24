import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingChatbot from "@/components/FloatingChatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://kameshhedau.com"),

  title: {
    default: "Kamesh Hedau | Frontend Developer",
    template: "%s | Kamesh Hedau",
  },

  description:
    "Kamesh Hedau is a Frontend Developer specializing in React.js and Next.js, building modern, responsive, and high-performance web applications.",

  keywords: [
    "Kamesh Hedau",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "HTML Developer",
    "CSS Developer",
    "JavaScript Developer",
    "Web Developer India",
  ],

  authors: [{ name: "Kamesh Hedau" }],

  openGraph: {
    title: "Kamesh Hedau",
    description:
      "Explore projects and work of Kamesh Hedau - React.js & Next.js Developer.",
    url: "https://kameshhedau.com",
    siteName: "Kamesh Hedau",
    images: [
      {
        url: "/image/kamesh-hedau.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*  Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kamesh Hedau",
              url: "https://kameshhedau.com/",
            }),
          }}
        />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kamesh Hedau",
              url: "https://kameshhedau.com",
              image: "https://kameshhedau.com/image/kamesh-hedau.jpeg",
              jobTitle: "Frontend Developer",
              sameAs: ["https://www.linkedin.com/in/kamesh-hedau/"],
            }),
          }}
        />

        {/* Canonical */}
        <link rel="canonical" href="https://kameshhedau.com" />
      </head>

      <body className={poppins.className}>
        <Navbar />
        <ScrollToTop />
        <br />
        <div style={{ marginTop: "70px" }}>{children}</div>
          <FloatingChatbot />
        <Footer />
      </body>
    </html>
  );
}
