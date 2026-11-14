import { Roboto, Roboto_Mono } from "next/font/google";
import "@/app/globals.css";

// Shared <html>/<body> shell. Each language has its own root layout (app/(en), app/(id)) so that
// <html lang> is correct in the server-rendered HTML; both render this component.

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

// Runs before first paint: applies a saved theme choice so dark-mode visitors never see a light flash.
// Light is the default for first-time visitors.
const themeScript = `(function(){try{var t=localStorage.getItem("wg-theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootDocument({ lang, children }) {
  return (
    <html
      lang={lang}
      data-theme="light"
      suppressHydrationWarning
      className={`${roboto.variable} ${robotoMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        {/* Kept out of <head> on purpose: browser extensions (popup blockers etc.) inject their own
            <script> tags into <head> before React hydrates, which React would then mismatch against
            this one. As the first node in <body> it still runs before anything is painted. */}
        <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
