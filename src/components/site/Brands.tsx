import { useGsap, gsap } from "@/hooks/useGsap";

const brands = ["AETHER", "MORI", "KINSHIP", "NORTH/SOUTH", "OBSCURA", "FIELDNOTE", "VOLTA", "PARALLEL"];

export function Brands() {
  const scope = useGsap((ctx) => {
    void ctx;
    gsap.to(".marquee-track", {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
    gsap.from(".quote-line", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".quote-block", start: "top 75%" },
    });
  });

  return (
    <section ref={scope} className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="px-6 md:px-10 mb-16">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">03 / Trusted by</span>
      </div>
      <div className="relative overflow-hidden mb-20">
        <div className="marquee-track flex gap-16 whitespace-nowrap w-max">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span key={i} className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter uppercase opacity-70">
              {b} <span className="text-outline">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="quote-block max-w-4xl mx-auto px-6 md:px-10 text-center">
        <p className="quote-line font-display text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
          "Vessel didn't ship us packaging. They shipped us a brand artifact. Every unit looks like the hero shot."
        </p>
        <p className="quote-line mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          — Maren Holst, Creative Director · Mori Studio
        </p>
      </div>
    </section>
  );
}
