import { useGsap, gsap } from "@/hooks/useGsap";

const stats = [
  { value: 98, suffix: "%", label: "Recycled Materials" },
  { value: 0, suffix: ".0", label: "Plastic Waste" },
  { value: 50, suffix: "k", label: "Max Batch Size" },
  { value: 12, suffix: "y", label: "On The Market" },
];

export function WhyVessel() {
  const scope = useGsap((ctx) => {
    void ctx;
    stats.forEach((s, i) => {
      const el = document.querySelector<HTMLElement>(`.stat-num-${i}`);
      if (!el) return;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: s.value,
        duration: 2,
        ease: "expo.out",
        scrollTrigger: { trigger: ".why-section", start: "top 70%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(obj.v).toString();
        },
      });
    });
    gsap.from(".why-title", {
      yPercent: 110,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: ".why-section", start: "top 75%" },
    });
  });

  return (
    <section ref={scope} className="why-section py-24 md:py-32 px-6 md:px-10 bg-background border-y border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="overflow-hidden mb-16">
          <h2 className="why-title font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9]">
            Why <span className="text-outline">Vessel</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="border-t border-foreground pt-6">
              <div className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter">
                <span className={`stat-num-${i} tabular-nums`}>0</span>
                <span>{s.suffix}</span>
              </div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-muted-foreground mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
