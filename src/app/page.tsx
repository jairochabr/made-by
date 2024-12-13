import { Banner } from "@/components/banner";
import { FAQs } from "@/components/FAQs";
import { Feature } from "@/components/Feature";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { ShowCase } from "@/components/showcase";

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
    </>
  );
}
