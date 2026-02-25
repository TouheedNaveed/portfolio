import Hero from "@/components/home/Hero";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedProjects />
      <AboutSnapshot />
      <ContactCTA />
    </>
  );
}
