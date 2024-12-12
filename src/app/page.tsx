import { Banner } from "@/components/Banner";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Partners />
      <Features />
    </>
  );
}
