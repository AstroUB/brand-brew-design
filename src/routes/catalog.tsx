import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { bottles } from "@/data/bottles";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog — Vessel®" },
      { name: "description", content: "Browse the full range of customizable Vessel bottles. Four geometries, three finishes, infinite variations." },
      { property: "og:title", content: "Catalog — Vessel®" },
      { property: "og:description", content: "Four bottle geometries, calibrated for weight, light, and your brand." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <main className="pt-32 md:pt-40 px-6 md:px-10 pb-24">
        <header className="max-w-[1600px] mx-auto mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">The Catalog</span>
          <h1 className="font-display text-[16vw] md:text-[12vw] font-extrabold uppercase tracking-tighter leading-[0.85] mt-4">
            The <span className="text-outline">Range</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Four calibrated geometries. Each one designed for a different relationship between weight, light, and your brand identity.
          </p>
        </header>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-20">
          {bottles.map((b, i) => (
            <Link
              to="/customize"
              key={b.id}
              className={`group block ${i % 2 ? "md:translate-y-16" : ""}`}
            >
              <div className="relative aspect-[3/4] bg-surface outline outline-1 -outline-offset-1 outline-border overflow-hidden mb-6">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">0{i + 1}</span>
                <span className="absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.22em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Customize →
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">{b.name}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{b.spec}</p>
                </div>
                <span className="font-display text-2xl font-bold">{b.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
