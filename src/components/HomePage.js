import { getContent } from "@/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Doctrine from "@/components/Doctrine";
import Capabilities from "@/components/Capabilities";
import Principal from "@/components/Principal";
import Engagement from "@/components/Engagement";
import Inquiries from "@/components/Inquiries";
import Footer from "@/components/Footer";

// The one-page site, rendered in the given language ("en" | "id").
export default function HomePage({ locale }) {
  const t = getContent(locale);
  return (
    <>
      <Header locale={t.locale} nav={t.nav} labels={t.header} />
      <main>
        <Hero t={t} />
        <Doctrine t={t} />
        <Capabilities t={t} />
        <Principal t={t} />
        <Engagement t={t} />
        <Inquiries t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
