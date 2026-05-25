import { useGsap, gsap } from "@/hooks/useGsap";
import materials from "@/assets/materials-detail.jpg";

const finishes = [
  { name: "UV Digital Print", desc: "Photographic gradient, edge-to-edge color, 1440dpi." },
  { name: "Ceramic Silk-Screen", desc: "Permanent fired ink, 200+ wash cycles guaranteed." },
  { name: "Laser Etch", desc: "Sub-surface engraving, zero ink, infinite longevity." },
];

export function Materials() {
  const scope = useGsap((ctx) => {
    void ctx;
    gsap.from(".mat-img", {
      scale: 1.2,
      duration: 1.4,
      ease: "expo.out",
      scrollTrigger: { trigger: ".mat-section", start: "top 75%" },
    });
    gsap.from(".mat-title", {
      yPercent: 110,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: ".mat-section", start: "top 75%" },
    });
    gsap.from(".mat-finish", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".mat-list", start: "top 80%" },
    });
  });

  return (
    <section ref={scope} className="mat-section py-24 md:py-40 px-6 md:px-10 bg-foreground text-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={materials} alt="Bottle material detail" loading="lazy" width={1600} height={1024} className="mat-img w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <span className="text-[10px] uppercase tracking-[0.25em] opacity-50">02 / Finishes</span>
          <div className="overflow-hidden mt-4">
            <h2 className="mat-title font-display text-5xl md:text-7xl font-extrabold uppercase leading-[0.9]">
              Three Ways <br /> To Wear It.
            </h2>
          </div>
          <p className="mt-6 max-w-md opacity-70 leading-relaxed">
            Every Vessel ships through one of three finishing lines, each calibrated for a different lifetime of contact.
          </p>
          <div className="mat-list mt-12 space-y-6">
            {finishes.map((f, i) => (
              <div key={f.name} className="mat-finish flex gap-6 md:gap-10 items-start border-t border-background/15 pt-6">
                <span className="font-display text-2xl tabular-nums opacity-40">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase">{f.name}</h3>
                  <p className="text-sm md:text-base opacity-70 mt-1 max-w-md">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
