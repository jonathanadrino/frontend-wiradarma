import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Rigid, engineered type used site-wide
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "The Wiradarma Group — Institutional Real Estate Advisory, Indonesia",
  description:
    "Institutional real estate advisory and distressed asset turnarounds in Indonesia. Executive-level risk mitigation, regulatory navigation, and tactical asset protection for foreign syndicates and family offices.",
};

export const viewport = {
  themeColor: "#ffffff",
};

// Runs before first paint: applies a saved theme choice so dark-mode visitors never see a light flash.
// Light is the default for first-time visitors.
const themeScript = `(function(){try{var t=localStorage.getItem("wg-theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${roboto.variable} ${robotoMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
