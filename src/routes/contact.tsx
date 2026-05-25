import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vessel®" },
      { name: "description", content: "Reach out to the Vessel studio for inquiries, partnerships, or press." },
      { property: "og:title", content: "Contact — Vessel®" },
      { property: "og:description", content: "Talk to the Vessel studio." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 md:pt-40 px-6 md:px-10 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Contact</span>
          <h1 className="font-display text-[14vw] md:text-[10vw] font-extrabold uppercase tracking-tighter leading-[0.85] mt-4 mb-16">
            Get In <br /><span className="text-outline">Touch.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4">General</p>
              <a href="mailto:hello@vessel.studio" className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight block hover:text-brand-accent transition-colors">
                hello@vessel.studio
              </a>
              <p className="text-muted-foreground text-sm pt-4">Reply within one business day.</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4">Press</p>
              <a href="mailto:press@vessel.studio" className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight block hover:text-brand-accent transition-colors">
                press@vessel.studio
              </a>
              <p className="text-muted-foreground text-sm pt-4">Image library and brand assets on request.</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4">Studio</p>
              <p className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight">
                128 Industrial Way <br /> New York, NY 10012
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4">Telephone</p>
              <a href="tel:+18880000000" className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight block hover:text-brand-accent transition-colors">
                +1 (888) 000-0000
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
