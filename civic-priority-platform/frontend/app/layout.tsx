import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, DM_Mono } from "next/font/google";

import "./globals.css";
import Providers from "@/app/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://civico.app"),

  title: {
    default: "CIVICO",
    template: "%s | CIVICO",
  },

  description:
    "CIVICO enables citizens to report development issues through text, voice, or images while AI organizes, prioritizes, and delivers actionable insights to public officials.",

  applicationName: "CIVICO",

  keywords: [
    "CIVICO",
    "Citizen Platform",
    "Governance",
    "AI",
    "Development",
    "Infrastructure",
    "Public Services",
    "Roads",
    "Water",
    "Education",
    "Healthcare",
    "Constituency",
    "Smart Governance",
  ],

  authors: [
    {
      name: "CIVICO Team",
    },
  ],

  creator: "CIVICO",

  publisher: "CIVICO",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "CIVICO",

    description:
      "Report civic issues using text, voice or images. AI organizes citizen requests into actionable priorities for public officials.",

    siteName: "CIVICO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "CIVICO",

    description:
      "AI-powered civic issue reporting and constituency intelligence platform.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${dmMono.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-[#eeede9]
          font-sans
          antialiased
          text-[#171817]
          selection:bg-[#e25a45]
          selection:text-white
        "
      >
        {/* Analog Noise Raster Texture Overlay */}
        <div className="static-noise" aria-hidden="true" />
        <Providers>
          <div
            id="app-shell"
            className="
              flex
              min-h-screen
              flex-col
            "
          >
            <a
              href="#main-content"
              className="
                sr-only
                focus:not-sr-only
                focus:absolute
                focus:left-4
                focus:top-4
                focus:z-50
                rounded-md
                bg-[#e25a45]
                px-4
                py-2
                text-sm
                font-medium
                text-white
              "
            >
              Skip to content
            </a>

            <main
              id="main-content"
              className="
                flex-1
                overflow-x-hidden
              "
            >
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
