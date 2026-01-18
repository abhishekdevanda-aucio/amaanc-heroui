import Hero from "@/components/home/Hero";
import ServicesHighlights from "@/components/home/ServicesHighlights";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesHighlights />
      <Testimonials />
    </div>
  );
}
