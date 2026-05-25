import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PreviewLab } from "@/components/site/PreviewLab";

export const Route = createFileRoute("/customize")({
  head: () => ({
    meta: [
      { title: "The Lab — Customize Your Bottle | Vessel®" },
      { name: "description", content: "Upload your brand artwork and preview it wrapped on a Vessel bottle in real-time 3D." },
      { property: "og:title", content: "The Lab — Vessel®" },
      { property: "og:description", content: "Live 3D preview of your brand on premium custom bottles." },
    ],
  }),
  component: Customize,
});

function Customize() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main className="pt-24 md:pt-32">
        <header className="px-6 md:px-10 pb-12 md:pb-20 max-w-[1600px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">The Lab</span>
          <h1 className="font-display text-[14vw] md:text-[10vw] font-extrabold uppercase tracking-tighter leading-[0.85] mt-4">
            Preview <br /> <span className="text-outline">in 3D</span>
          </h1>
        </header>
        <PreviewLab />
      </main>
      <Footer />
    </div>
  );
}
