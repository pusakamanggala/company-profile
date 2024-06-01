import Contact from "@/Contact";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services/ServicesSection";
import VideoIntro from "@/components/VideoIntro";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <VideoIntro />
      <Contact />
    </>
  );
}
