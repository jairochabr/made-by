import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Feature } from "@/components/Feature";
import { ShowCase } from "@/components/Showcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Partners />
      <Feature />
      <ShowCase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
