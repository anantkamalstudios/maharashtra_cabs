import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/main.css";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maharashtra Cabs - Reliable Intercity Cab Services",
  description:
    "Book affordable intercity cabs across Maharashtra. Enjoy comfortable rides from Mumbai, Pune, Nashik and more with Maharashtra Cabs.",
  keywords: [
    "Maharashtra Cabs",
    "intercity cabs",
    "Mumbai to Pune cab",
    "Pune to Nashik taxi",
    "cab booking Maharashtra",
    "online cab service",
    "car rental Maharashtra",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/web-app-manifest-192x192.png",
  openGraph: {
    title: "Maharashtra Cabs - Book Cabs Online",
    description:
      "Get hassle-free cab booking for intercity travel in Maharashtra. Starting from just ₹2499.",
    url: "https://maharashtracabs.com",
    siteName: "Maharashtra Cabs",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Maharashtra Cabs Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharashtra Cabs",
    description:
      "Affordable and reliable intercity cabs in Maharashtra. Book now for a safe ride.",
    images: ["/web-app-manifest-512x512.png"],
    site: "@maharashtracabs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <PageLoader>{children}</PageLoader>
      </body>
    </html>
  );
}
