import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import materials from "@/assets/materials-detail.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — Vessel®" },
      { name: "description", content: "Vessel is a custom bottle packaging studio crafting premium hardware for brands that refuse to blend in." },
      { property: "og:title", content: "Studio — Vessel®" },
      { property: "og:description", content: "A custom bottle packaging studio for premium brands." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main className="pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <header className="max-w-[1600px] mx-auto mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">The Studio</span>
          <h1 className="font-display text-[14vw] md:text-[10vw] font-extrabold uppercase tracking-tighter leading-[0.85] mt-4">
            Bottled <br /><span className="text-outline">With Intent.</span>
          </h1>
        </header>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={materials} alt="Studio detail" loading="lazy" width={1600} height={1024} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8 lg:pt-10">
            <p className="font-display text-2xl md:text-3xl font-bold leading-tight">
              We started Vessel in 2014, in a 200 sqft workshop, with one belief: a bottle is brand architecture, not a wrapper.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Twelve years later we ship to studios, hotel groups, and event producers in 38 countries. Every Vessel passes through three finishing lines and seven QA stations before it reaches you. Nothing leaves with a defect. Nothing leaves without intent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work in batches from 50 units (a launch event, a hotel suite) to 50,000 (a national rollout). Our minimums stay low because small brands deserve the same hardware as the giants.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl font-extrabold">2014</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-2">Founded</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold">38</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-2">Countries Shipped</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold">B-Corp</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-2">Certified 2021</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold">98%</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-2">Recycled Input</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
