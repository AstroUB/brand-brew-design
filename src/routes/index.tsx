import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { CoreSeries } from "@/components/site/CoreSeries";
import { PreviewLab } from "@/components/site/PreviewLab";
import { Materials } from "@/components/site/Materials";
import { WhyVessel } from "@/components/site/WhyVessel";
import { Brands } from "@/components/site/Brands";
import { OrderSection } from "@/components/site/OrderSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vessel® — Custom Bottle Packaging Studio" },
      { name: "description", content: "Upload your brand, preview your packaging in 3D, and order custom bottles from 50 to 50,000 units." },
      { property: "og:title", content: "Vessel® — Custom Bottle Packaging" },
      { property: "og:description", content: "Premium custom packaging on architectural-grade water bottles." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <CoreSeries />
        <PreviewLab />
        <Materials />
        <WhyVessel />
        <Brands />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}
