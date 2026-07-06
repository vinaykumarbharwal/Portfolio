import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Vinay Kumar | Python Full-Stack Web Developer",
    template: "%s | Vinay Kumar",
  },
  description: "Vinay Kumar is a Python full-stack web developer skilled in React, Next.js, Node.js, FastAPI, Flask, Django, SQL, PostgreSQL, MongoDB, Pandas, and scikit-learn.",
  keywords: [
    "Vinay Kumar", "Python Full Stack Web Developer", "React Developer", "Next.js Developer",
    "Tailwind CSS", "Node.js", "FastAPI", "Flask", "Django", "Pandas", "scikit-learn",
    "SQL", "PostgreSQL", "MongoDB", "Agile", "GitHub", "GitHub Copilot", "ChatGPT", "Claude", "Gemini"
  ],
  authors: [{ name: "Vinay Kumar", url: "https://vinaykumarbharwal.me" }],
  creator: "Vinay Kumar",
  publisher: "Vinay Kumar",
  metadataBase: new URL("https://vinaykumarbharwal.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vinay Kumar | Python Full-Stack Web Developer",
    description: "Explore Vinay Kumar's work in Python full-stack web development, backend APIs, data-driven systems, and AI-assisted engineering.",
    url: "https://vinaykumarbharwal.me",
    siteName: "Vinay Kumar Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg", 
        width: 1200,
        height: 630,
        alt: "Vinay Kumar | Python Full-Stack Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Kumar | Python Full-Stack Web Developer",
    description: "Python full-stack web developer focused on modern web apps, APIs, data workflows, and AI tools.",
    images: ["https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg"],
    creator: "@vinaybharwal23",
  },
  icons: {
    icon: [
      { url: "images/black.png" },
      { url: "https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vinay Kumar",
              "jobTitle": "Python Full-Stack Web Developer",
              "url": "https://vinaykumarbharwal.me",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Yeshwantrao Chavan College Of Engineering"
              },
              "sameAs": [
                "https://github.com/vinaykumarbharwal",
                "https://www.linkedin.com/in/vinaykumarbharwal",
                "https://x.com/vinaybharwal23",
                "https://www.instagram.com/vinay_bhxrwal_0001"
              ]
            })
          }}
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-white selection:text-black bg-[#050505]`}
      >
        {children}
      </body>
    </html>
  );
}