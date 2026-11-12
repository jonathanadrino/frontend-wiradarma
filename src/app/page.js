import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Doctrine from "@/components/Doctrine";
import Capabilities from "@/components/Capabilities";
import Principal from "@/components/Principal";
import Engagement from "@/components/Engagement";
import Inquiries from "@/components/Inquiries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Doctrine />
        <Capabilities />
        <Principal />
        <Engagement />
        <Inquiries />
      </main>
      <Footer />
    </>
  );
}
