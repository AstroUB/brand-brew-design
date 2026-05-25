import { Link } from "@tanstack/react-router";
import { useGsap, gsap } from "@/hooks/useGsap";
import { bottles } from "@/data/bottles";

export function CoreSeries() {
  const scope = useGsap((ctx) => {
    void ctx;
    gsap.from(".core-title", {
      yPercent: 110,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: ".core-section", start: "top 80%" },
    });
    gsap.from(".core-card", {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".core-grid", start: "top 75%" },
    });
  });

  function handleTilt(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget.querySelector<HTMLElement>(".tilt-inner");
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, { rotateY: x * 14, rotateX: -y * 14, duration: 0.6, ease: "power2.out" });
  }
  function resetTilt(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget.querySelector<HTMLElement>(".tilt-inner");
    if (!el) return;
    gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "power2.out" });
  }

  return (
    <section ref={scope} className="core-section py-24 md:py-40 px-6 md:px-10 bg-surface">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div className="overflow-hidden">
          <h2 className="core-title font-display text-[14vw] md:text-8xl font-extrabold uppercase tracking-tighter leading-[0.9]">
            The Core <br className="md:hidden" /> Series
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3 max-w-xs">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">01 / Catalog</span>
          <p className="text-sm text-muted-foreground">Four calibrated geometries. Each one a different conversation between weight, light, and your brand.</p>
        </div>
      </div>

      <div className="core-grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {bottles.map((b, i) => (
          <div
            key={b.id}
            className={`core-card group cursor-pointer perspective-[1200px] ${i % 2 ? "md:translate-y-24" : ""}`}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="tilt-inner preserve-3d transition-shadow">
              <div className="relative aspect-[3/4] bg-background outline outline-1 -outline-offset-1 outline-border overflow-hidden mb-6">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight">{b.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{b.spec}</p>
                </div>
                <span className="font-display text-xl md:text-2xl font-bold">{b.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-3 border border-foreground px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition-colors"
        >
          Browse Full Catalog
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
