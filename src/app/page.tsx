import { Banner } from "@/components/Banner/index";
import { Header } from "@/components/Header/index";
import { Hero } from "@/components/Hero/index";
import { Partners } from "@/components/Partners";
import { Feature } from "@/components/Features";
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
